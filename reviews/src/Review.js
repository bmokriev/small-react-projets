import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ image, job, name, text, goBack, goNext, random }) => {
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => goBack()}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => goNext()}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => random()}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
