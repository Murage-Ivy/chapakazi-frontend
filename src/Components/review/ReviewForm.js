import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Review.css";
import { addReview } from "./ReviewSlice";

function ReviewForm({ setTrigger, profileId }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("customer");
  const [review, setReview] = useState({
    comment: "",
    handyman_id: `${profileId}`,
    votes: 0,
  });
  const errors = useSelector((state) => state.reviews.errors);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setReview({ ...review, [name]: value });
  }

  console.log(review);
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addReview(review, token, setTrigger));
    setReview({
      comment: "",
      handyman_id: `${profileId}`,
      votes: 0,
    });
  }

  return (
    <div id="review-form-container">
      <form className="review-form" onSubmit={handleSubmit}>
        <h3>Add a Review</h3>
        <hr />
        <br />
        <textarea
          cols="50"
          rows="10"
          value={review.comment}
          onChange={handleChange}
          name="comment"
        />

        {errors.length > 0
          ? errors.map((error) => (
              <span className="review-errors">{error}</span>
            ))
          : null}

        <div className="review-form-btn">
          <button
            className="btn-review"
            onClick={() => setTrigger((prev) => !prev)}
          >
            Cancel
          </button>
          <button
            className="btn-review"
            onSubmit={() => setTrigger((prev) => !prev)}
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
