import React from 'react'
import img1 from "../src/assets/img/contact.jpg"
import face1 from "../src/assets/img/face(1).jpg"
import face2 from "../src/assets/img/face(2).jpg"

const About = () => {
   
    return (
      <>
    <div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 mt-5">
        <h1 className="heading">About Us</h1>
      </div>
    </div>
  </div>
  <div className="container mt-5">
    <div className="row mb-3">
      <div className="col-lg-6 p-3">
        <p>Welcome to HomeStyler your ultimate destination for all things interior design! We believe that every space has the potential to tell a story, and we’re here to help you craft yours.</p>
        <p> At HomeStyler, we showcase a stunning collection of interior designs that inspire creativity and elevate your home. Explore a diverse range of styles, from modern minimalism to cozy bohemian vibes, all curated to spark your imagination. Whether you're looking for a quick refresh or a complete overhaul, our design gallery offers endless possibilities to transform your living spaces.</p>
        <p> In addition to our inspiring designs, we offer a carefully selected range of home decor products that bring your vision to life. From statement furniture to unique accessories, our shop features high-quality items that blend aesthetics and functionality, ensuring your home reflects your personal style.</p>
        <p>Looking for professional guidance? Our Interior Designer Gallery connects you with talented designers who are ready to collaborate with you on your next project. Browse through their portfolios, read their bios, and find the perfect match to help you create the home of your dreams.</p>
        <p>At HomeStyler, we are passionate about helping you find beauty and comfort in every corner of your home. Join us on this journey of inspiration, creativity, and transformation!</p>
        <p>Thank you for visiting us!</p>
      </div>
      <div className="col-lg-6 p-3"> 
        <div className="box">
          <div className="background-image"><img src={img1} alt width="100%" /></div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="sub-heading">Our Team</h1>
      </div>
      <div className="row team">
        {/* Team Member 1 */}
        <div className="col-lg-6 mb-4">
          <div className="team_member">
            <div className="team_img">
              <img src={face1} alt />
            </div>
            <h3>Samuel Henry</h3>
            <p className="role" />
            <p> "As a front-end developer, I specialize in creating captivating user interfaces and seamless web experiences through innovative design and meticulous coding expertise."</p>
          </div>
        </div>
        {/* Team Member 2 */}
        <div className="col-lg-6 mb-4">
          <div className="team_member">
            <div className="team_img">
              <img src={face1} alt />
            </div>
            <h3>Noor Alam</h3>
            <p className="role" />
            <p> "As a front-end developer, I specialize in creating captivating user interfaces and seamless web experiences through innovative design and meticulous coding expertise."</p>
          </div>
        </div>
        {/* Team Member 3 */}
        <div className="col-lg-6 mb-4">
          <div className="team_member">
            <div className="team_img">
              <img src={face2} alt />
            </div>
            <h3>Huda</h3>
            <p className="role" />
            <p> "As a front-end developer, I specialize in creating captivating user interfaces and seamless web experiences through innovative design and meticulous coding expertise."</p>
          </div>
        </div>
        {/* Team Member 4 */}
        <div className="col-lg-6 mb-4">
          <div className="team_member">
            <div className="team_img">
              <img src={face2} alt />
            </div>
            <h3>Amna Nihal</h3>
            <p className="role" />
            <p> "As a front-end developer, I specialize in creating captivating user interfaces and seamless web experiences through innovative design and meticulous coding expertise."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </>
    );
}

export default About;