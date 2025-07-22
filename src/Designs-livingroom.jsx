import React, { useState } from 'react';

const data = [
  {
    category: "living room",
    img: "assets/img/designes/L1.jpg",
    priceRange: "$500 - $2,000",
    designs: {
        name: "Contemporary Minimalist Living Room",
        productlist: [
            "Low-Profile Sofa: Sleek and simple designs that maximize space",
            "Neutral Color Palette: Soft whites, grays, and beiges for a calming effect",
            "Geometric Coffee Table: Modern shapes that add interest",
            "Open Shelving: Streamlined storage solutions",
            "Textured Throw Pillows: Subtle patterns that add warmth",
            "Floor-to-Ceiling Windows: Natural light to enhance openness"
        ],
        detail: "This trend focuses on simplicity and functionality, emphasizing clean lines and uncluttered spaces. It creates a serene environment, perfect for relaxation and conversation."
    }
},{
    category: "living room",
    img: "assets/img/designes/L2.jpg",
    priceRange: "$600 - $2,500",
    designs: {
        name: "Eclectic Bohemian Living Room",
        productlist: [
            "Layered Rugs: Mixing patterns and textures for a cozy feel",
            "Vintage Furniture: Unique pieces that tell a story",
            "Bright Color Accents: Pops of color for vibrancy",
            "Indoor Plants: Lush greenery to enhance livability",
            "Wall Art Gallery: A mix of prints and paintings for personalization",
            "Macramé Decor: Textiles that add a boho touch"
        ],
        detail: "Embracing a mix of styles, this trend celebrates individuality and creativity. It’s a space filled with personality, inviting comfort and relaxation."
    }
},
{
    category: "living room",
    img: "assets/img/designes/L3.jpg",
    priceRange: "$700 - $2,300",
    designs: {
        name: "Industrial Urban Living Room",
        productlist: [
            "Exposed Brick Walls: Raw and authentic textures",
            "Metal Furniture: Steel coffee tables and iron accents",
            "Reclaimed Wood Shelves: Eco-friendly and stylish storage",
            "Large Windows: Maximizing light with a warehouse feel",
            "Edison Bulb Lighting: Vintage fixtures for warmth",
            "Leather Sofas: Durable and stylish seating"
        ],
        detail: "This trend blends rugged materials with modern comforts. It creates an edgy yet inviting atmosphere, perfect for urban living."
    }
},

{
    category: "living room",
    img: "assets/img/designes/L4.jpg",
    priceRange: "$500 - $1,800",
    designs: {
        name: "Cozy Farmhouse Living Room",
        productlist: [
            "Comfortable Sectional: Soft and inviting seating",
            "Shiplap Walls: Classic farmhouse touch",
            "Warm Color Palette: Creams, browns, and soft greens",
            "Rustic Coffee Table: Vintage wood pieces for character",
            "Knitted Throws: Cozy textiles for added warmth",
            "Antique Accents: Unique decor that adds charm"
        ],
        detail: "This trend emphasizes comfort and warmth, combining rustic elements with modern conveniences. It’s a perfect blend for creating a welcoming home."
    }
},
{
    category: "living room",
    img: "assets/img/designes/L5.jpg",
    priceRange: "$600 - $2,000",
    designs: {
        name: "Scandinavian Inspired Living Room",
        productlist: [
            "Light Wood Furniture: Natural finishes for a fresh look",
            "Simple Lines: Clean designs that prioritize functionality",
            "Soft Textiles: Cozy blankets and pillows for comfort",
            "Neutral Color Scheme: Whites and soft pastels for a serene vibe",
            "Functional Decor: Multi-purpose furniture that saves space",
            "Large Windows: Emphasizing natural light and openness"
        ],
        detail: "This trend embodies simplicity and practicality, focusing on comfort and minimalism. It creates a bright and airy atmosphere, perfect for everyday living."
    }
},
{
    category: "living room",
    img: "assets/img/designes/L6.jpg",
    priceRange: "$800 - $3,000",
    designs: {
        name: "Luxe Modern Living Room",
        productlist: [
            "Velvet Sofa: Plush seating that exudes elegance",
            "Statement Lighting: Bold chandeliers or unique fixtures",
            "Marble Accents: Luxurious tabletops or decorative elements",
            "Gold or Brass Details: Metallic touches that add sophistication",
            "Artistic Decor: Unique sculptures and art pieces for impact",
            "Rich Color Palette: Deep hues that create drama"
        ],
        detail: "This trend highlights sophistication and glamour, using high-quality materials and bold designs to create an opulent yet inviting space."
    }
  }
];

const DesignsLivingRoom = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const handleViewDetails = (index) => {
    setSelectedDesign(data[index]);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 mt-5">
            <h1 className="heading">Living Room Styles</h1>
          </div>
        </div>
      </div>
      <div className="container product">
        <div className="row">
          {data.map((design, index) => (
            <div className="col-lg-6 p-4" key={index}>
              <div className="design-style">
                <img src={design.img} className="card-img-top" alt="Design Image" />
                <div className="card-body">
                  <h6 className="card-title">{design.designs.name}</h6>
                  <p className="card-text"> {design.designs.detail}</p>
                  <button className="view_details" onClick={() => handleViewDetails(index)}>Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && selectedDesign && (
        <section id="section" className="modal-center">
          <div id="close" onClick={handleClose}><i className="fa-solid fa-xmark" /></div>
          <div className="row">
            <div className="images col-lg-12">
              <div className="mainimg" style={{ backgroundImage: `url(${selectedDesign.img})` }}></div>
            </div>
            <div className="detail col-lg-12">
              <h3>{selectedDesign.designs.name}</h3>
              <h5>Details: {selectedDesign.designs.detail}</h5>
              <ul>
                {selectedDesign.designs.productlist.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h4>Total Estimated Cost Range: {selectedDesign.priceRange}</h4>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DesignsLivingRoom;
