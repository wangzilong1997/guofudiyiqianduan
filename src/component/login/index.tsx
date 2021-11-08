import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import qs from 'qs';
import './index.css'
import auth from '../../auth/auth'

const Login = (props) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    axios.post('/users/api/user/login',qs.stringify({ name: values.username,password:values.password}))
            .then((res:any)=>{
                console.log('ressss',res)
                if(res.data.success){
                  console.log(props)
                  auth.login(()=>{
                    console.log('登陆成功进行跳转')
                    props.history.push('/')
                  })
                }
            })

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return(<div className="login">
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
        </div>)

}

export default Login