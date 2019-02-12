import React from 'react'
import "./nocontent.css";

function NoContent(props) {
    return (
        <blockquote class="quote-card red-card">
        <p>
          {props.noContentMessage}
        </p>
  
        <cite>
          {props.noContentTeam}
        </cite>
      </blockquote>
    )
}

export default NoContent