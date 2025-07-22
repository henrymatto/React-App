import React, { useState } from 'react';

const data = [
  {
    category: "bathroom",
    img: "assets/img/designes/B1.jpg",
    priceRange: "$400 - $1,800",
    designs: {
        name: "Contemporary Style Bathroom",
        productlist: [
            "Floating Vanity: Sleek, wall-mounted vanities for a modern look",
            "Rainfall Showerhead: Luxurious shower experience with a stylish design",
            "Large Format Tiles: Minimal grout lines for a clean, seamless look",
            "Frameless Glass Shower: Open and airy feel with unobstructed views",
            "Backlit Mirrors: Mirrors with integrated lighting for added ambiance",
            "Matte Black Fixtures: Trendy plumbing fixtures that add a bold contrast"
        ],
        detail: "This trend focuses on minimalist design, emphasizing open spaces, natural light, and high-quality materials. It blends functionality with elegance, creating a serene and modern atmosphere."
    }
},
{
    category: "bathroom",
    img: "assets/img/designes/B2.jpg",
    priceRange: "$600 - $2,500",
    designs: {
        name: "Spa-Inspired Bathroom",
        productlist: [
            "Soaking Tub: Freestanding tubs for relaxation and luxury",
            "Natural Stone Accents: Use of marble or granite for a high-end finish",
            "Warm Lighting: Soft, adjustable lighting to create a calming environment",
            "Wood Elements: Incorporating natural wood for warmth and texture",
            "Greenery: Indoor plants to enhance relaxation and improve air quality",
            "Steam Shower: Enclosed shower with steam function for spa-like experience"
        ],
        detail: "This trend incorporates elements of tranquility and nature, creating a relaxing retreat at home. Soft colors, natural materials, and a focus on wellness contribute to a soothing environment."
    }
},
{
    category: "bathroom",
    img: "assets/img/designes/B3.jpg",
    priceRange: "$500 - $1,900",
    designs: {
        name: "Industrial Chic Bathroom",
        productlist: [
            "Exposed Pipes: Decorative plumbing for an authentic industrial look",
            "Concrete Sink: Durable and modern sink options",
            "Metal Accents: Use of steel and iron fixtures for a raw aesthetic",
            "Reclaimed Wood Shelving: Eco-friendly storage solutions with character",
            "Brick Walls: Exposed brick for a rustic touch",
            "Vintage Lighting: Edison bulbs for an industrial feel"
        ],
        detail: "This design trend blends raw materials with a modern edge, focusing on a functional yet stylish aesthetic. It often features a mix of textures, creating a unique and inviting atmosphere."
    }
},
{
    category: "bathroom",
    img: "assets/img/designes/B4.jpg",
    priceRange: "$300 - $1,500",
    designs: {
        name: "Minimalist Bathroom",
        productlist: [
            "Simple Vanity: Clean-lined furniture with minimal hardware",
            "Neutral Color Palette: Soft whites and grays for a calm environment",
            "Open Shelving: Functional storage that maintains an airy feel",
            "Large Mirrors: Expanding visual space with reflective surfaces",
            "Hidden Storage: Clever design that maximizes space without clutter",
            "Low-Flow Fixtures: Eco-friendly options that reduce water usage"
        ],
        detail: "Emphasizing simplicity and functionality, this trend removes unnecessary elements to create a serene and clutter-free space. Clean lines and a subdued palette evoke a sense of peace."
    }
},
{
    category: "bathroom",
    img: "assets/img/designes/B5.jpg",
    priceRange: "$500 - $2,200",
    designs: {
        name: "Retro-Modern Bathroom",
        productlist: [
            "Colorful Tiles: Bold, patterned tiles that make a statement",
            "Vintage Fixtures: Retro faucets and showerheads with modern efficiency",
            "Round Mirrors: Soft shapes that add a vintage touch",
            "Freestanding Bathtub: Classic design with a modern twist",
            "Graphic Wallpaper: Fun patterns to create an accent wall",
            "Sconces: Decorative wall lighting with a nostalgic vibe"
        ],
        detail: "This trend combines classic retro elements with modern amenities, creating a playful yet functional space. Bright colors and nostalgic designs bring character and warmth."
    }
},
{
    category: "bathroom",
    img: "assets/img/designes/B6.jpg",
    priceRange: "$400 - $1,700",
    designs: {
        name: "Coastal Inspired Bathroom",
        productlist: [
            "Light Wood Finishes: Beachy vibes with soft wood tones",
            "Aqua Accents: Use of blues and greens reminiscent of the sea",
            "Natural Fiber Textiles: Towels and rugs made from organic materials",
            "Ocean-Themed Decor: Accessories that reflect a coastal lifestyle",
            "Large Windows: Maximizing natural light for an open feel",
            "Pebble Tile Flooring: Textured surfaces that mimic the beach"
    ],
    detail:"This trend embraces light, airy designs inspired by seaside living. Soft colors, natural textures, and beach-themed elements create a refreshing and relaxing atmosphere"
}
}
];

const DesignsBathroom = () => {
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
            <h1 className="heading">Bathroom Styles</h1>
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

export default DesignsBathroom;