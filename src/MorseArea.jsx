import React from 'react';

var MorseArea = (props) => {
  return (
    <div>
    <button
    onClick={props.handleOnClick}
    onMouseDown={props.handleOnMouseDown}
    onMouseUp={props.handleOnMouseUp}
    onTouchStart={props.handleOnTouchStart}
    onTouchEnd={props.handleOnTouchEnd}
    tabIndex="0"
    >Click here to input Morse</button>
    <div>      placeholder for area</div>

    </div>
  )
}

export default MorseArea;