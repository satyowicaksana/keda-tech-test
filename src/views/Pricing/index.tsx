import { Row, Col } from 'antd'
import TierCard from '../../components/TierCard'
import './Pricing.scss'

const basicItems = [
  'Mencatat barang masuk',
  'Mencatat barang keluar',
  'Mencatat hasil keuntungan'
];

const businessItems = [
  'Mencatat barang masuk dan keluar',
  'Mencatat hasil keuntungan',
  'Analisis hasil penjualan dengan grafik/CHART',
  'Dukungan pelanggan 7x24 jam'
];

const entrepreneurItems = [
  "Mencatat barang masuk dan keluar",
  "Mencatat hasil keuntungan",
  "Dapat menganalisa hasil penjualan dengan CHART",
  "Support 7x24 Jam",
  "Export data ke Excel",
  "AI Prediksi penghasilan",
];

const Pricing = () => {
  return (
    <div className='pricing-container'>
      <h1>Choose Your Pricing Plan</h1>
      <h3 className='mb-6'>All Plans FREE for the first 30 Days</h3>
      <Row className='cards-container' gutter={[24,24]}>
        <Col xs={24} lg={8}>
          <TierCard
            title="Basic"
            price="IDR 500.000"
            items={basicItems}
          />
        </Col>
        <Col xs={24} lg={8}>
          <TierCard
            title="Business"
            price="IDR 1.500.000"
            items={businessItems}
          />
        </Col>
        <Col xs={24} lg={8}>
          <TierCard
            title="Entrepreneur"
            price="IDR 3.000.000"
            items={entrepreneurItems}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Pricing