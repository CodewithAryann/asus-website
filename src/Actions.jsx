import React from 'react'
import "./action.css";

const Action = () => {
  return (
    <div className='action-div'>
      <h1>ROG IN ACTION</h1>
      <div className='action-items'>
        <div className='action-item'>
          <img src="./action-1.webp" alt="" />
          <h3>GAMING</h3>
          <p>ROG teams up with iconic voice actors in cheeky new video</p>
        </div>
        <div className='action-item'>
          <img src="./action-2.webp" alt="" />
          <h3>ROG-ALLY</h3>
          <p>The best games you can finish in one day on the ROG Ally and ROG Ally X</p>
        </div>
        <div className='action-item'>
          <img src="./action-3.webp" alt="" />
          <h3>ROG-ALLY</h3>
          <p>The best AAA games for the ROG Ally and ROG Ally X</p>
        </div>
      </div>
      <button className="btn">
          <span>LEARN MORE</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
    </div>
  )
}

export default Action
