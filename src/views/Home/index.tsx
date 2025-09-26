import IllustrationGraph from "../../assets/illustration-graph.png"
import Blob from "../../assets/blob-2.svg"
import Circles from "../../assets/circles.svg"
import './Home.scss'

const Home = () => {
  return (
    <div id='home' className="home-container">
      <div className='description-container'>
        <p>
          Kelola inventaris dan keuntungan bisnis Anda dengan mudah,<br/>dari pencatatan barang masuk dan keluar hingga analisis penjualan mendalam.
        </p>
      </div>
      <div className='illustration-container'>
        <p className="slogan">
          <i>Satu sistem, kendali penuh, untung maksimal.</i>
        </p>
        <img
          src={IllustrationGraph}
          alt="graph"
        />
      </div>
      <img
        src={Blob}
        alt="blob"
        className="blob"
      />
      <img
        src={Circles}
        alt="circles"
        className="circles"
      />
    </div>
  );
}

export default Home