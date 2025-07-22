import React, { useState } from 'react';

const data = [
  {
    category: "kitchen",
    img:"assets/img/designes/K1.jpg",
    priceRange: "$500 - $2,000",
    designs: {
        name: "Contemporary Style Kitchen",
        productlist: [
            "Sleek Cabinets: Streamlined cabinetry with a smooth finish",
            "Quartz Countertops: Durable and stylish surfaces with minimal seams",
            "Stainless Steel Appliances: Modern, high-efficiency appliances that blend seamlessly",
            "Glass Backsplash: Reflective and easy-to-clean surface that adds visual interest",
            "Modern Bar Stools: Stylish seating that complements the overall design",
            "Under-Cabinet Lighting: Discreet lighting that enhances functionality and ambiance"
        ],
        detail:"This trend emphasizes clean lines, neutral colors, and functional layouts. It often incorporates a mix of textures and materials, focusing on sleek surfaces and modern appliances to create an inviting and efficient space."
    }
},
{
    category: "kitchen",
    img:"assets/img/designes/K2.jpg",
    priceRange: "$500 - $2,000",
    designs: {
        name: "Minimalist Aesthetic Kitchen",
        productlist: [
            "Flat-Panel Cabinets: Smooth, handle-less cabinets for a streamlined look",
            "Concrete Countertops: Sleek and modern surfaces that are highly durable",
            "Integrated Appliances: Built-in appliances that create a seamless appearance",
            "Simple Subway Tile Backsplash: Classic tiles that add texture without distraction",
            "Simple Dining Table: Clean-lined tables that serve as functional focal points",
            "Minimalist Lighting Fixtures: Simple and elegant fixtures that provide effective illumination"
        ],
        detail:"This style emphasizes simplicity and a clutter-free environment. With a monochromatic color palette and functional design, the minimalist kitchen prioritizes practicality and clean lines."
    }
},
{
    category: "kitchen",
    img:"assets/img/designes/K3.jpg",
    priceRange: "$500 - $2,000",
    designs: {
        name: "Scandinavian Design Kitchen",
        productlist: [
            "Light Wood Cabinets: Natural finishes that bring warmth and brightness",
            "Butcher Block Countertops: Classic, practical surfaces for cooking and prep",
            "Open Shelving: Functional storage that showcases dishware and decor",
            "Ceramic Backsplash: Neutral-colored tiles that add subtle charm",
            "Scandinavian Dining Chairs: Simple yet stylish seating that complements the decor",
            "Pendant Lighting in Natural Materials: Warm lighting that enhances the cozy feel"
        ],
        detail:"This style combines functionality with a cozy atmosphere. Featuring light colors and natural materials, the Scandinavian kitchen is bright, airy, and inviting."
    }
},
{
    category: "kitchen",
    img:"assets/img/designes/K4.jpg",
    priceRange: "$500 - $2,000",
    designs: {
        name: "Industrial Chic Kitchen",
        productlist: [
            "Reclaimed Wood Cabinets: Rustic cabinetry that adds character and history",
            "Granite or Concrete Countertops: Sturdy surfaces that blend style and functionality",
            "Vintage-Style Appliances: Appliances with a retro flair that enhance the industrial vibe",
            "Metal Backsplash: Bold, durable surfaces that reflect the industrial aesthetic",
            "Bar Stools with Metal Accents: Sturdy seating that complements the design theme",
            "Edison Bulb Lighting Fixtures: Statement lighting that adds warmth and a vintage touch"
        ],
        detail:"This style emphasizes raw materials and an urban feel. The industrial kitchen often features exposed elements, metal accents, and reclaimed wood to create a bold statement."
    }
},
{
    category: "kitchen",
    img:"assets/img/designes/K5.jpg",
    priceRange: "$500 - $2,000",
    designs: {
        name: "Bohemian Vibes Kitchen",
        productlist: [
            "Colorful Painted Cabinets: Bold hues that bring energy to the space",
            "Natural Stone Countertops: Unique surfaces that showcase natural beauty",
            "Vintage-Style Appliances: Retro appliances that enhance the eclectic vibe",
            "Mosaic Backsplash: Artistic tile designs that add visual interest",
            "Eclectic Dining Table: A mix-and-match table that serves as a focal point",
            "Unique Light Fixtures: Statement pieces that reflect a global aesthetic"
        ],
        detail:"This trend features rich colors, eclectic decor, and a relaxed atmosphere. The bohemian kitchen mixes patterns and textures to create a vibrant and inviting space."
    }
},
{
    category: "kitchen",
    img:"assets/img/designes/K6.jpg",
    priceRange: "$500 - $2,000",
    designs: {
        name: "Farmhouse Rustic Kitchen",
        productlist: [
            "Shaker-Style Cabinets: Simple, functional cabinetry with a classic look",
            "Farmhouse Sink: Deep, spacious sink that adds character and utility",
            "Wooden Countertops: Warm surfaces that enhance the rustic feel",
            "Subway Tile Backsplash: Classic tiles that provide a clean and timeless look",
            "Wooden Dining Table: Large, sturdy table that serves as a gathering place",
            "Chandelier Lighting: Rustic fixtures that create a warm and inviting atmosphere"
        ],
        detail:"This style combines comfort with rustic charm, using natural materials and a warm color palette. The farmhouse kitchen is inviting and practical, perfect for family gatherings."
    }
}
];

const DesignsKitchen = () => {
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
            <h1 className="heading">Kitchen Styles</h1>
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

export default DesignsKitchen;
