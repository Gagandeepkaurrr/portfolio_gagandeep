import './Hero.scss';
import me from './image.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="typing-effect">Hi, I'm Gagandeep 👋</h1>
      
      <p className="p1">I'm a passionate 19-year-old front-end developer,</p>
      <p className="p2">currently working towards a Computer Science degree.</p>
      <div className="image">
        <img src={me} alt="Gagandeep" />
      </div>
      <a href="#contact" className="cta-button">Let's Connect!</a>
    </section>
  );
};

export default Hero;
