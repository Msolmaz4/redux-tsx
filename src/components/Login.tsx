import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import api from '../utils/api';
import { useLocation, useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navi = useNavigate()
  const location = useLocation()
  
  console.log('location', {location})

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try {
      await api.post('/users/login', values)
      navi('/')
    } catch (error) {
      console.log(error)

    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);

  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <h2 style={{textAlign:'center' , marginBottom: 40}}>
          Login for an account

      </h2>
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
  );
};

export default Login;