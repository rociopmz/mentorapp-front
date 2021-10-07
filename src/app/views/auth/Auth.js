import { Form, Input, Button, Checkbox, Layout, Row, Col } from 'antd';
import {loginEndpoint, signupEndpoint, signupGoogle} from '../../services/auth-ws'
import { useContext} from 'react'; 
import {Ctx} from '../../hooks/auth-hooks'


const {Content} = Layout


export default function Auth ({match, history}) {
    const { login } = useContext(Ctx)
    const onFinish = async (values) => {
     try{
        const create = match.path === '/signup' ? signupEndpoint : loginEndpoint
        const {data} = await create(values)
        localStorage.setItem("user", JSON.stringify(data.user))
        if (match.path === "/signup") {
            history.push("/login")
        }else{
            login (data.user)
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
                    <Input placeholder="Jon Doe" />
                </Form.Item>

                {match.path === "/signup" &&  <Form.Item 
                label="Email"
                name="email"
                >
                    <Input placeholder="jondoe@ejemplo.com" />
                    
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