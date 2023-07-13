import React from 'react';
import MorseArea from './MorseArea.jsx';
import {useState, useRef} from 'react';
import dict from './MorseDictionary.js';
function MorseContainer() {
const [morseText, setMorseText] = useState('');
const [longPress, setLongPress]  = useState(false);
const [delay, setDelay] = useState(300);
const timerRef = useRef();
const [translated, setTranslated] = useState([]);

  //Be able to type text in manually to the box
  function handleTextChange(e) {
    let newString = e.target.value;
    setMorseText(newString)
  }

  //Detect pressing space anywhere to add a space between words for the input
  function handleKeyPress(e) {
    if (e.key === ' ') {
      console.log('space pressed');
      let newString = morseText + ' ';
      setMorseText(newString);
    }
  }

  function handleTranslate() {
    let morseCopy = morseText.slice().split(' ');
    morseCopy.forEach((group, i) => {
        morseCopy[i] = dict[group] || '?';
    });
    setTranslated(morseCopy);
  }

  //Clear text box
  function clearInput() {
    setMorseText('')
  }

  //Setting a ref to have a timer to add a dash as the input if release isnt found within <delay> miliseconds
  function clickDuration() {
    timerRef.current = setTimeout(() => {
      setLongPress(true);
      let newString = morseText + '-';
      setMorseText(newString);
    }, delay)
  }

  //event handlers for click down/up or touch start/end
  function handleOnMouseDown() {
    console.log('handleOnMouseDown');
    clickDuration();
  }

  function handleOnMouseUp() {
    console.log('handleOnMouseUp');
    // clearing the timeout for the long press, adding a dot if longpress threshold to add dash was not reached
    clearTimeout(timerRef.current);
    if (!longPress) {
      let newString = morseText + '.';
      setMorseText(newString);
    }
    setLongPress(false)
  }

  function handleOnTouchStart() {
    console.log('handleOnTouchStart');
    clickDuration();
  }

  function handleOnTouchEnd() {
    console.log('handleOnTouchEnd');
    clearTimeout(timerRef.current);
  }

  return (
    <div onKeyDown ={(event) => {
      handleKeyPress(event)
    }}
    tabIndex='0'>
    Main Container Component
    <form>
      <input className='form' placeholder='Your morse input here.' type='text' onChange={(e)=>{handleTextChange(e)}} value={morseText}/>
    </form>
    <MorseArea
    handleOnMouseDown={handleOnMouseDown}
    handleOnMouseUp={handleOnMouseUp}
    handleOnTouchStart={handleOnTouchStart}
    handleOnTouchEnd={handleOnTouchEnd}
    clearInput={clearInput}
    handleTranslate={handleTranslate}
    translated={translated}

    />
  </div>
  )
}

// class MorseContainer extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       input: ''
//     };
//   }

  // handleTyping(e) {
  //   let newString = e.target.value;
  //   this.setState({input: newString})
  // }

  // handleOnMouseDown() {
  //   console.log('handleOnMouseDown');
  // }

  // handleOnMouseUp() {
  //   console.log('handleOnMouseUp');
  // }

  // handleOnTouchStart() {
  //   console.log('handleOnTouchStart');
  // }

  // handleOnTouchEnd() {
  //   console.log('handleOnTouchEnd');
  // }



//   render() {
//     return (
      // <div>
      //   Main Container Component
      //   <form>
      //     <input className='form' placeholder='Your morse input here.' type='text' onChange={this.handleTyping.bind(this)} value={this.state.input}/>
      //   </form>
      //   <MorseArea
      //   handleOnMouseDown={this.handleOnMouseDown.bind(this)}
      //   handleOnMouseUp={this.handleOnMouseUp.bind(this)}
      //   handleOnTouchStart={this.handleOnTouchStart.bind(this)}
      //   handleOnTouchEnd={this.handleOnTouchEnd.bind(this)}
      //   />
      // </div>
//     )
//   }
// }

export default MorseContainer;