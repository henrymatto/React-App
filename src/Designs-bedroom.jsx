import React, { useState } from 'react';

const data = [
  {
    category: "bedroom",
    img: "assets/img/designes/Bed1.jpg",
    priceRange: "$300 - $1,200",
    designs: {
      name: "Contemporary Style Bedroom",
      productlist: [
        "Sleek platform bed",
        "Geometric bedside tables",
        "Minimalist dresser",
        "Abstract artwork",
        "Area rug with subtle patterns",
        "Modern lighting fixtures (like pendant lights)",
      ],
      detail: "This trend emphasizes clean lines, neutral colors, and functional furniture. It often incorporates a mix of textures and materials."
    }
  },
  {
    category: "bedroom",
    img: "assets/img/designes/Bed2.jpg",
    priceRange: "$300 - $1,200",
    designs: {
      name: "Minimalist Aesthetic Bedroom",
      productlist: [
        "Low-profile bed frame",
        "Simple nightstands",
        "Decluttered workspace (small desk)",
        "White or soft-colored bedding",
        "Hidden storage solutions (under-bed storage)",
        "Simple, linear wall art"
      ],
      detail: "Focuses on simplicity and functionality, using a limited color palette and minimal decor to create a calm, uncluttered space."
    }
  },
  {
    category: "bedroom",
    img: "assets/img/designes/Bed3.jpg",
    priceRange: "$300 - $1,200",
    designs: {
      name: "Scandinavian Design Bedroom",
      productlist: [
        "Wooden bed frame (often light wood)",
        "Soft textiles (like knit throws)",
        "Functional storage solutions (like a chest of drawers)",
        "Simple pendant lights or floor lamps",
        "Nature-inspired decor (like potted plants)",
        "Wool or cotton area rugs"
      ],
      detail: "This style combines functionality with a cozy atmosphere, using light colors, natural materials, and a focus on craftsmanship."
    }
  },
  {
    category: "bedroom",
    img: "assets/img/designes/Bed4.jpg",
    priceRange: "$300 - $1,200",
    designs: {
      name: "Industrial Chic Bedroom",
      productlist: [
        "Metal bed frame or wooden bed with metal accents",
        "Vintage-style bedside lamps",
        "Industrial shelving units",
        "Textured blankets and pillows",
        "Metal or reclaimed wood furniture",
        "Edison bulb lighting"
      ],
      detail: "A raw and edgy aesthetic that incorporates elements like exposed brick, metal fixtures, and reclaimed wood."
    }
  },
  {
    category: "bedroom",
    img: "assets/img/designes/Bed5.jpg",
    priceRange: "$300 - $1,200",
    designs: {
      name: "Bohemian Vibes Bedroom",
      productlist: [
        "Canopy or four-poster bed",
        "Layered textiles (like quilts and throws)",
        "Colorful throw pillows",
        "Macramé wall hangings",
        "Vintage or mismatched furniture",
        "Unique decorative items (like global finds)"
      ],
      detail: "This trend is all about rich colors, mixed patterns, and an eclectic mix of furniture and decor that creates a relaxed and inviting atmosphere."
    }
  },
  {
    category: "bedroom",
    img: "assets/img/designes/Bed6.jpg",
    priceRange: "$300 - $1,200",
    designs: {
      name: "Farmhouse Rustic Bedroom",
      productlist: [
        "Wooden bed frame (often distressed)",
        "Soft, inviting bedding in muted colors",
        "Antique or vintage-style nightstands",
        "Barn door accents or decor",
        "Cozy armchair or reading nook",
        "Woven baskets for storage"
      ],
      detail: "Combines comfort with a rustic charm, featuring natural materials, vintage pieces, and a warm color palette."
    }
  }
];

const DesignsBedroom = () => {
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
            <h1 className="heading">Bedroom Styles</h1>
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
              <div className="mainimg" style={{ backgroundImage: `url(${selectedDesign.img})` }}>
              </div>
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

export default DesignsBedroom;
