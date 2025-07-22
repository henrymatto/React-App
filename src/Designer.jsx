import React from 'react'
import gallery1 from "../src/assets/img/gallery/Anna Carin.jpg"
import gallery2 from "../src/assets/img/gallery/Adam Kane.jpg"
import gallery3 from "../src/assets/img/gallery/Christopher Eliott.jpeg"
import gallery4 from "../src/assets/img/gallery/Cassandra Walker.jpeg"

const Designer = () => {
   
    return (
      <>
      <div className="container-fluid">
  <div className="row">
    <div className="col-lg-12 mt-5">
      <h1 className="heading">Designer's Gallery</h1>
    </div>
  </div>
</div>
<div className="container mt-3">
  <div className="row m-3">
    <div className="col-lg-8 p-5">
      <div className="desc">
        <h2 className="mb-5">Adam Kane</h2>
        <p>Founded in 2015, Adam Kane Architects is a Melbourne based architecture and interior design practice that focuses primarily on single residential projects. Regardless of scale, setting or budget, the team works to design spaces that are specifically tailored to each client, integrating a holistic approach to ensure a considered coherence between the architecture, interiors and landscape.</p>
      </div>
      <div className="desg mt-lg-5">
        <h5>Contact:</h5>
        <a href="#"><p>adamkane@gmail.com</p></a>
      </div>
    </div>
    <div className="col-lg-4">
      <img src={gallery2}  height="400px" width="100%" />
    </div> 
  </div>
  <div className="row m-3">
    <div className="col-lg-4">
      <img src={gallery1}  height="400px" width="100%" />
    </div> 
    <div className="col-lg-8 p-5">
      <div className="desc">
        <h2 className="mb-5">Anna Carin</h2>
        <p>Interior Design Rushcutters Bay, NSW, Australia Anna Carin Design Anna Carin Design is an interior architecture and design firm based in the exclusive Eastern suburbs of Sydney. Studio founder and current principal designer, Anna-Carin McNamara, was educated in London and has worked in some of Scandinavia’s most prestigious design houses. Anna draws on local and international influences, in particular her Swedish roots, for all of her design work and creative undertakings. Originally founded in 1996.</p>
      </div>
      <div className="desg mt-lg-5">
        <h5>Contact:</h5>
        <a href="#"><p>annacarin@gmail.com</p></a>
      </div>
    </div>
  </div>
  <div className="row m-3">
    <div className="col-lg-8 p-5">
      <div className="desc">
        <h2 className="mb-5">Christopher Eliott</h2>
        <p>Christopher Elliott Design approach their interior architecture projects with optimism and a clean slate, seeing it as an opportunity to break the mould and do something unique. Their multi-disciplined and talented team share a passion for design and like to think a little differently. The client can be certain they are striving to give you the best result. Christopher Elliott Design offer a wide variety of design services from interior to lighting design.</p>
      </div>
      <div className="desg mt-lg-5">
        <h5>Contact:</h5>
        <a href="#"><p>christophereliott@gmail.com</p></a>
      </div>
    </div>
    <div className="col-lg-4">
      <img src={gallery3}   height="400px" width="100%" />
    </div> 
  </div>
  <div className="row m-3">
    <div className="col-lg-4">
      <img src={gallery4}  height="400px" width="100%" />
    </div> 
    <div className="col-lg-8 p-5">
      <div className="desc">
        <h2 className="mb-5">Cassandra Walker</h2>
        <p>Interior Design Cassandra Walker Design Established in 2015, Cassandra Walker Design (CWD) is a Melbourne based interior design practice built upon the pillars of function, form and timelessness. Guided by Cassandra’s fluency in construction, spatial planning and visual impact, CWD creates spaces that combine enduring aesthetics with quality craftsmanship to cultivate meticulously tailored environments.</p>
      </div>
      <div className="desg mt-lg-5">
        <h5>Contact:</h5>
        <a href="#"><p>CassWalker@gmail.com</p></a>
      </div>
    </div>
  </div>
</div>

      </>

    );
}

export default Designer;