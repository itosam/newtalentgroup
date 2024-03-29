import hero_img from "./assets/hero_image.png";

function Home() {
  return (
    <div className="home">
      <div className='row'>
      <div className='column'>
      <div className="container">
        <p className="heading">
          How Founders recruit the&nbsp;<em>brightest talent.</em>
        </p>
       
        <p className="heading2">
          New Talent Group specializes in placing non-technical leaders in
          venture, growth, and PE backed companies.
        </p>
        <button className="button1">Hire Talent</button> 
      </div></div>
      <div className='column'>
    
      <img className="hero" src={hero_img} alt="hero" />
      </div>
      </div>
    </div>
  );
}

export default Home;
