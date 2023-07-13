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
    <button onClick={props.handleTranslate}> Translate </button>
    <button onClick={props.clearInput}> Clear </button>
    <div>
      Output: {props.translated.join('')}
    </div>
    </div>
  )
}

export default MorseArea;