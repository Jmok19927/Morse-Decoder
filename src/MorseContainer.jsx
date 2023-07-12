import React from 'react';
import MorseArea from './MorseArea.jsx';

class MorseContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    };
  }

  handleTyping(e) {
    let newString = e.target.value;
    this.setState({input: newString})
  }

  handleOnMouseDown() {
    console.log('handleOnMouseDown');
  }

  handleOnMouseUp() {
    console.log('handleOnMouseUp');
  }

  handleOnTouchStart() {
    console.log('handleOnTouchStart');
  }

  handleOnTouchEnd() {
    console.log('handleOnTouchEnd');
  }

  render() {
    return (
      <div>
        Main Container Component
        <form>
          <input className='form' placeholder='Your morse input here.' type='text' onChange={this.handleTyping.bind(this)} value={this.state.input}/>
        </form>
        <MorseArea
        handleOnMouseDown={this.handleOnMouseDown.bind(this)}
        handleOnMouseUp={this.handleOnMouseUp.bind(this)}
        handleOnTouchStart={this.handleOnTouchStart.bind(this)}
        handleOnTouchEnd={this.handleOnTouchEnd.bind(this)}
        />
      </div>
    )
  }
}

export default MorseContainer;