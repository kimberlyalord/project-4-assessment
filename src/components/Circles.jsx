import React from 'react';
import './Circles.css';

const circles = [1, 2, 3, 4];

function Circles(props) {
  return (
    <div className='Circles'>
      {props.circles.map((circle, idx) =>
        <div className={props.selectedCircleIdx === circles[idx] - 1 ? 'selected' : ''}>
        {circles[idx]}
        </div>
      )}
    </div>
  );
}

export default Circles;