import React,  {Component} from 'react';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import {loginEndpoint, signupEndpoint, signupGoogle} from '../../services/auth-ws'

const {Content} = Layout


export default function Auth ({match, history}) {
    const onFinish = async (values) => {
     try{
        const create = match.path === '/signup' ? signupEndpoint : loginEndpoint
        const {data} = await create(values)
        localStorage.setItem("user", JSON.stringify(data.user))
        if (match.path === "/signup") {
            history.push("/login")
        }else{
            history.push("/profile")
        }
     }catch(error){
        console.log (error)
     }
    
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      }
    return (
        <Content style={{ padding: '50px' }}>
        <Layout className="site-layout-background" style={{ padding: '50px' }}> 
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                {match.path === "/signup" &&  <Form.Item 
                label="Email"
                name="email"
                >
                    <Input/>
                    
                </Form.Item>}

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    </Content>
    )
}