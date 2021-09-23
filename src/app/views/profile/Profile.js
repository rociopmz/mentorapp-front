import React,  {useState, useEffect} from 'react';
import { Form, Input, Button, Checkbox, Layout, Select, Spin } from 'antd';
import { updateUser } from '../../services/auth-ws';


const {Content} = Layout
const { Option } = Select;


export default function Profile () {
    const [user, setUser]= useState({})
    const [loader, setLoader]= useState(true)

    const onFinish = async(values) => {
        setLoader(true)
        try{ 
            if (values.role===true){
                values.role = "mentor"
            }else{
                values.role= "mentee"
            }
            values["_id"]=user._id
            const{data}= await updateUser(values)
            localStorage.setItem("user", JSON.stringify(data.result))
            setUser(data.result)
            setLoader(false)
        }catch(error){ 
            console.log(error)
            setLoader(false)
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      }
     const getData = () =>{
         const localUser = JSON.parse(localStorage.getItem("user"))
         setUser (localUser)
         setLoader(false)
     }
    useEffect(()=>{ 
        getData()
    },[])
console.log (user)
    return (
        loader ? <Spin size="large" /> : 
        <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}> 
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{...user, role:user.role != "mentor" ? false : true }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                >
                    <Input disabled />
                </Form.Item>

                <Form.Item 
                label="Email"
                name="email"
                >
                    <Input disabled />
                    
                </Form.Item>

                <Form.Item
                    label="Aboutme"
                    name="aboutme"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Objective"
                    name="objective"
                >
                    <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    >
                    <Option value= "Revisión de CV">
                    Revisión de CV    
                    </Option>

                    <Option value= "Revisión de Portafolio">
                    Revisión de Portafolio
                    </Option>

                    <Option value= "Entrevista de Trabajo">
                    Entrevista de Trabajo  
                    </Option>

                    <Option value= "Otro">
                    Otro   
                    </Option>



                    </Select>
                </Form.Item>

               {user.role==="mentee" && <Form.Item name= "role" label="Quiero ser Mentor" valuePropName="checked">
                <Checkbox/>
          
               </Form.Item>}


        

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Editar
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    </Content>
    )
}