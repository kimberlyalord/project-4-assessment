import React from 'react';
import './CircleSelector.css';

const circles = [1, 2, 3, 4];

function CircleSelector(props) {
  console.log(props);
  return (
    <div className='CircleSelector'>
      {props.circles.map((circle, idx) =>
        <button 
          className={props.selectedCircleIdx === circles[idx] - 1 ? 'selected' : ''}
          onClick={() => props.handleCircleSelection(idx)}>
          SELECT CIRCLE {circles[idx]}
        </button>
      )}
    </div>
  );
}

export default CircleSelector;