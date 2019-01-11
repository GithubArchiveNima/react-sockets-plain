import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.socket = new WebSocket('ws://localhost:8080');

    this.onMessage = this.onMessage.bind(this)

    this.socket.onmessage = this.onMessage

    this.state = {
      word: ''
    }
  }

  onMessage(payload) {
    console.log(payload.data)
    this.setState({
      word: payload.data
    })
  }
 
  render() {
    return (
      <h1>{this.state.word}</h1>
    );
  }
}
export default App;
