import React from 'react';
import MorseArea from './MorseArea.jsx';
import {useState, useRef} from 'react';
function MorseContainer() {
const [morseText, setMorseText] = useState('');
const [longPress, setLongPress]  = useState(false);
const [delay, setDelay] = useState(300);
const timerRef = useRef();

  function handleTextChange(e) {
    let newString = e.target.value;
    setMorseText(newString)
  }

  function clickDuration() {
    timerRef.current = setTimeout(() => {
      setLongPress(true);
      let newString = morseText + '-';
      setMorseText(newString);
    }, delay)
  }

  function handleOnMouseDown() {
    console.log('handleOnMouseDown');
    clickDuration();
    // let newString = morseText + '.';
    // setMorseText(newString);
  }

  function handleOnMouseUp() {
    console.log('handleOnMouseUp');
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
    <div>
    Main Container Component
    <form>
      <input className='form' placeholder='Your morse input here.' type='text' onChange={(e)=>{handleTextChange(e)}} value={morseText}/>
    </form>
    <MorseArea
    handleOnMouseDown={handleOnMouseDown}
    handleOnMouseUp={handleOnMouseUp}
    handleOnTouchStart={handleOnTouchStart}
    handleOnTouchEnd={handleOnTouchEnd}
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