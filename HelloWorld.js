import React from 'react';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props)
    this.state = { who: 'world' };
  }

  handleWorldButtonClick = () => {
    this.setState({ who: this.state.who = 'world!' })
  }

  handleFriendButtonClick = () => {
    this.setState({ who: this.state.who = 'friend!' })
  }

  handleReactButtonClick = () => {
    this.setState({ who: this.state.who = 'React!' })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button
          onClick={this.handleWorldButtonClick}
        >
          World
            </button>
        <button
          onClick={this.handleFriendButtonClick}
        >
          Friend
            </button>
        <button
          onClick={this.handleReactButtonClick}
        >
          React
            </button>

      </div>
    )
  }
}

export default HelloWorld
