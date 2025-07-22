import React, { useState, useRef } from 'react';

const Feedback = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(2); // Initial total reviews count
  const [totalRating, setTotalRating] = useState(9.6); // Initial total rating count
  const reviewFormRef = useRef(null);
  const nameRef = useRef(null);
  const reviewRef = useRef(null);
  
  const highlightStars = (rating) => {
    const starElements = document.querySelectorAll('.star');
    starElements.forEach(star => {
      star.classList.remove('selected');
      if (star.getAttribute('data-value') <= rating) {
        star.classList.add('selected'); // Color stars when clicked
      }
    });
  };

  const handleStarClick = (value) => {
    setSelectedRating(value);
    highlightStars(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const reviewText = reviewRef.current.value;

    if (selectedRating === 0) {
      alert("Please select a star rating.");
      return;
    }

    // Calculate new total rating and total reviews count
    setTotalRating(prev => prev + Number(selectedRating));
    setTotalReviews(prev => prev + 1);

    // Update average rating
    const averageRating = ((totalRating + Number(selectedRating)) / totalReviews).toFixed(1);
    document.getElementById('average-rating').textContent = averageRating;

    // Display new review
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `
      <div class="review-header">
        <h4>${name} ${'<i class="fas fa-star"></i>'.repeat(selectedRating)}</h4>
        <div class="review-date">Just now</div>
      </div>
      <p>${reviewText}</p>
    `;
    document.getElementById('review-list').appendChild(newReview);

    // Reset form and stars
    reviewFormRef.current.reset();
    setSelectedRating(0);
    highlightStars(0); // Reset stars
  };

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 mt-5">
              <h1 className="heading">Customer Feedback</h1>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Average Rating Section */}
          <div className="rating-summary">
            <div className="rating-stars">
              <i className="fas fa-star" /><span id="average-rating">9.6</span>/10
            </div>
            <div className="rating-count">
              (Based on Reviews)
            </div>
          </div>
          {/* Featured Reviews */}
          <div id="review-list">
            <div className="review" data-rating={5}>
              <div className="review-header">
                <h4>Emily Santhos <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></h4>
                <div className="review-date">Sept 19, 2024</div>
              </div>
              <p>Absolutely loved it! The product exceeded my expectations and the customer service was excellent.</p>
            </div>
            <div className="review" data-rating={4}>
              <div className="review-header">
                <h4>Sarah Lee <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></h4>
                <div className="review-date">Sept 18, 2024</div>
              </div>
              <p>Great product, but I had some issues with the shipping. Overall, I’m satisfied and would buy again.</p>
            </div>
          </div>
          {/* Add Review Form */}
          <h3 className="sub-heading">Add Your Feedback</h3>
          <form id="review-form" className="form" onSubmit={handleSubmit} ref={reviewFormRef}>
            <input type="text" id="name" placeholder="Your Name" className="input-field" ref={nameRef} required />
            {/* Star Rating */}
            <div className="star-rating" id="rating-selection">
              {[1, 2, 3, 4, 5].map(value => (
                <span key={value} className="star" data-value={value} onClick={() => handleStarClick(value)}>
                  <i className="fas fa-star" />
                </span>
              ))}
            </div>
            <textarea id="review" placeholder="Write your review..." className="input-field" ref={reviewRef} required />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;
