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

  render() {
    return (
      <div>
        Main Container Component
        <form>
          <input className='form' placeholder='Your morse input here.' type='text' onChange={this.handleTyping.bind(this)} value={this.state.input}/>
        </form>
        <MorseArea/>
      </div>
    )
  }
}

export default MorseContainer;