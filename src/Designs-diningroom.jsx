import React, { useState } from 'react';

const data = [
  {
    category: "dining room",
    img: "assets/img/designes/D1.jpg",
    priceRange: "$600 - $2,000",
    designs: {
        name: "Modern Farmhouse Dining Room",
        productlist: [
            "Reclaimed Wood Table: Rustic charm with a modern twist",
            "Woven Chairs: Comfortable seating with a natural feel",
            "Neutral Color Palette: Soft whites, grays, and earthy tones",
            "Pendant Lighting: Stylish fixtures that create a focal point",
            "Textured Table Runner: Adds warmth and character to the table",
            "Vintage Decor: Antique pieces that enhance the farmhouse vibe"
        ],
        detail: "This trend combines rustic elements with modern aesthetics, creating a warm and inviting dining space perfect for gatherings."
    }
},
{
    category: "dining room",
    img: "assets/img/designes/D2.jpg",
    priceRange: "$700 - $2,500",
    designs: {
        name: "Industrial Chic Dining Room",
        productlist: [
            "Metal Dining Table: Sturdy and stylish for an urban feel",
            "Bar Stool Seating: Mix of high stools for a casual dining experience",
            "Exposed Brick Walls: Adds character and texture",
            "Edison Bulb Lighting: Warm and vintage-inspired fixtures",
            "Wire Accent Chairs: Light and airy seating options",
            "Rustic Centerpiece: Incorporating natural elements like wood or plants"
        ],
        detail: "This design trend merges raw materials with sleek lines, resulting in a bold and contemporary dining area that invites conversation."
    }
},{
    category: "dining room",
    img: "assets/img/designes/D3.jpg",
    priceRange: "$500 - $1,800",
    designs: {
        name: "Scandinavian Dining Room",
        productlist: [
            "Light Wood Table: Minimalist design with natural finishes",
            "Colorful Chairs: Bright hues to add personality",
            "Simple Decor: Clean lines with functional elements",
            "Soft Textiles: Cozy table runners and placemats",
            "Large Windows: Maximizing natural light for an open feel",
            "Indoor Plants: Adding greenery for a fresh atmosphere"
        ],
        detail: "Emphasizing simplicity and functionality, this trend creates a bright and inviting dining space, perfect for both family meals and entertaining."
    }
},
{
    category: "dining room",
    img: "assets/img/designes/D4.jpg",
    priceRange: "$800 - $3,000",
    designs: {
        name: "Luxe Contemporary Dining Room",
        productlist: [
            "Glass Dining Table: Sleek and elegant with a modern appeal",
            "Chic Upholstered Chairs: Plush seating for comfort and style",
            "Statement Lighting: Dramatic chandeliers or sculptural fixtures",
            "Rich Color Palette: Deep jewel tones or sophisticated neutrals",
            "Artistic Centerpiece: Unique decor that enhances the table",
            "Mirrored Accents: Reflective surfaces that add glamour"
        ],
        detail: "This trend highlights opulence and sophistication, using high-quality materials and striking designs to create a stunning dining area."
    }
},
{
    category: "dining room",
    img: "assets/img/designes/D5.jpg",
    priceRange: "$600 - $2,200",
    designs: {
        name: "Eclectic Dining Room",
        productlist: [
            "Mismatched Chairs: A mix of styles and colors for a playful look",
            "Bold Wallpaper: Fun patterns that create a statement wall",
            "Art Gallery Display: A collection of artwork to personalize the space",
            "Unique Dining Table: A one-of-a-kind piece that sparks conversation",
            "Layered Textiles: Different fabrics and patterns for added warmth",
            "Decorative Accessories: Personal items that tell a story"
        ],
        detail: "Celebrating individuality and creativity, this trend invites a mix of styles and colors to create a vibrant and dynamic dining experience."
    }
},
{
    category: "dining room",
    img: "assets/img/designes/D6.jpg",
    priceRange: "$400 - $1,700",
    designs: {
        name: "Coastal Inspired Dining Room",
        productlist: [
            "Light Wood Table: Natural finishes reminiscent of beachside living",
            "Nautical Accents: Decor that reflects the seaside, like shells and driftwood",
            "Soft Color Palette: Blues, whites, and sandy tones for a breezy feel",
            "Woven Chairs: Textured seating that adds to the coastal vibe",
            "Large Windows: Bringing in natural light and outdoor views",
            "Beach-Themed Decor: Accessories that evoke a relaxed atmosphere"
        ],
        detail: "This trend creates a fresh and airy dining space inspired by coastal living, emphasizing light colors and natural materials for a relaxed dining experience."
    }
}
];

const DesignsDiningRoom = () => {
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
            <h1 className="heading">Dining Room Styles</h1>
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
                  <p className="card-text">{design.designs.detail}</p>
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

export default DesignsDiningRoom;

