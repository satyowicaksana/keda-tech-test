import { Row, Col } from 'antd'
import Client from "../../assets/clients.png"
import Team from "../../assets/team.jpg"
import './About.scss'

const About = () => {
  return (
    <div id='about' className="about-container">
      <Row gutter={[48, 48]}>
        <Col xs={24} lg={12}>
          <img src={Team} alt='team'/>
        </Col>
        <Col xs={24} lg={12}>
          <h1>Siapa Kami</h1>
          <p>Kami adalah startup yang berdedikasi untuk memudahkan pengusaha dalam mengelola bisnis mereka. Dengan platform terpadu kami, setiap pengusaha dapat mencatat barang masuk dan keluar, memantau keuntungan harian, dan menganalisis penjualan dengan mudah. Dari pelaku usaha kecil hingga entrepreneur yang ingin mengoptimalkan pertumbuhan bisnis, kami menyediakan berbagai TIER yang sesuai dengan kebutuhan — mulai dari pencatatan sederhana hingga fitur AI prediksi penghasilan. Misi kami adalah memberdayakan setiap bisnis agar lebih efisien, terkontrol, dan menguntungkan.</p>
          <img src={Client} alt='client'/>
        </Col>
      </Row>
      <div className='clients-container'>
      </div>
    </div>
  );
}

export default About