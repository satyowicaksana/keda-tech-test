import IllustrationGraph from "../../assets/illustration-graph.png"
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
        <p>
          Satu sistem, kendali penuh, untung maksimal.
        </p>
        <img
          src={IllustrationGraph}
          alt="graph"
        />
      </div>
    </div>
  );
}

export default Home