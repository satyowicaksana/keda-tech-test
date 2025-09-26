import IllustrationGraph from "../../assets/illustration-graph.png"
import './About.scss'

const About = () => {
  return (
    <>
      <div className='description-container'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='illustration-container'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <img
          src={IllustrationGraph}
          alt="graph"
        />
      </div>
    </>
  );
}

export default About