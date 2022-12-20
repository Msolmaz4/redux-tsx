import React from 'react'
import { Button, Form, Input, message } from 'antd';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom'


const Signup = () => {
   
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };


  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };


  const navi = useNavigate()

  const onFinish = async (values: any) => {
    try {
      await api.post('/users/register', values)
      console.log('baglantiyok 111')
      //burada login giderken yeni bir deger verip bu nun yeni olup olladigin abakarixz bir uyari verriz logine gitmeden biye bu react local gelecek login gidereriz
      navi('/login')
      console.log('baglantiyok ')

    } catch (error) {
      console.log(error)


    }

  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name='username' label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name='email' label="Email" rules={[{ type: "email", required: true }]} >
        <Input />
      </Form.Item>
      <Form.Item name='full_name' label="FullName">
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!', min: 6 }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Signup