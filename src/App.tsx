
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup';

import { Layout, Menu } from 'antd';
import Login from './components/Login';

const { Header, Content, Footer } = Layout;
//layout yaptiktan sonra utils register kayitlari icin api ts dosya yaptik
function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <div
            style={{
              float: 'left',
              width: 120,
              height: 31,
              margin: '16px 24px 16px 0',
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          />
        </Header>
        <Content className="site-layout" style={{ padding: '50px' }}>
          <Routes>
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login/>} />
          </Routes>


        </Content>
        <Footer style={{ textAlign: 'center' }}>REACT TRACKER @ 2022</Footer>
      </Layout>





    </Router>

  )




}

export default App;
