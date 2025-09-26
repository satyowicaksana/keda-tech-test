import React from "react"
import { Card, List, Row, Col, Button } from "antd"
import { CheckOutlined } from "@ant-design/icons"
import './TierCard.scss'

interface TierCardProps {
  title: string
  price: string
  items: string[]
}

const TierCard: React.FC<TierCardProps> = ({ title, price, items }) => {
  return (
    <Card className="tier-card" title={title}>
      <div>
        <h1>{price}</h1>
        <h3 className="mb-4">/bulan</h3>
      </div>
      <Button type='primary' className="mb-4">
        Langganan
      </Button>
      <List
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Row gutter={8} wrap={false} align="middle">
              <Col>
                <CheckOutlined/>
              </Col>
              <Col>{item}</Col>
            </Row>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default TierCard
