import { Row, Col, Input, Button } from 'antd'
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact-container'>
      <Row gutter={24}>
        <Col className='description-container' span={12}>
          <div>
            <h1>Get In Touch</h1>
            <h3>Contact us if you have any inquiries</h3>
          </div>
          <Row justify='start'>
            <Col>
              <Button type='link'>
                <WhatsAppOutlined/>
              </Button>
            </Col>
            <Col>
              <Button type='link'>
                <MailOutlined/>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={16} className='mb-4'>
            <Col span={12}>
              <p>Nama Depan<span>*</span></p>
              <Input/>
            </Col>
            <Col span={12}>
              <p>Nama Belakang</p>
              <Input/>
            </Col>
          </Row>
          <div className='mb-4'>
            <p>Email<span>*</span></p>
            <Input/>
          </div>
          <div className='mb-4'>
            <p>Message<span>*</span></p>
            <Input.TextArea rows={4}/>
          </div>
          <div className='submit-button-container'>
            <Button type='primary'>Submit</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact