import './Navbar.scss'
import { Row, Col, Button } from 'antd'

const Navbar = () => {
  return (
    <>
      <Row justify="space-between">
        <Col>
        Home
        </Col>
        <Col>
          <Row>
            <Col>
              About
            </Col>
            <Col>
              Pricing
            </Col>
            <Col>
              Contact
            </Col>
            <Col>
              <Button>
                LOGIN
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Navbar
