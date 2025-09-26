import { useState } from 'react'
import { Row, Col, Button, Drawer, Menu, Grid } from 'antd'
import Blob from "../../assets/blob.svg"
import { MenuOutlined } from '@ant-design/icons'
import './Navbar.scss'

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { useBreakpoint } = Grid

  const screens = useBreakpoint()

  const menuItems = (
    <Menu mode='vertical' style={{ border: 'none' }}>
      <Menu.Item key='about'>About</Menu.Item>
      <Menu.Item key='pricing'>Pricing</Menu.Item>
      <Menu.Item key='contact'>Contact</Menu.Item>
      <Button className='mt-2' type='primary' block>
        Login
      </Button>
    </Menu>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <Row
        justify='space-between'
        align='middle'
        className='navbar-container'
      >
        <Col className='logo-container'>
          <Button type='link' onClick={() => scrollToSection('home')}>HOME</Button>
          <img
            src={Blob}
            alt="blob"
          />
        </Col>
        {screens.lg && (
          <Col>
            <Row className='menu-container' gutter={24} align='middle'>
              <Col>
                <Row>
                  <Col>
                    <Button type='link' onClick={() => scrollToSection('about')}>
                      About
                    </Button>
                  </Col>
                  <Col>
                    <Button type='link' onClick={() => scrollToSection('pricing')}>
                      Pricing
                    </Button>
                  </Col>
                  <Col>
                    <Button type='link' onClick={() => scrollToSection('contact')}>
                      Contact
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Button className='login-button' color='primary' variant='outlined'>LOGIN</Button>
              </Col>
            </Row>
          </Col>
        )}

        <Col xs={2} lg={0}>
          <Button
            type='text'
            icon={<MenuOutlined />}
            onClick={() => setIsMenuOpen(true)}
          />
        </Col>
      </Row>

      <Drawer
        title='Menu'
        placement='right'
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
      >
        {menuItems}
      </Drawer>
    </>
  );
}

export default Navbar