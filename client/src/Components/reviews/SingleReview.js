import React from 'react'
import "./reviews.css";

function SingleReview(props) {
    return (
        <blockquote class="quote-card">
        <p>
          {props.userReview}
        </p>
  
        <cite>
          {props.userFirstName}
        </cite>
      </blockquote>
    )
}

export default SingleReview