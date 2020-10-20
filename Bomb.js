import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log('componentDidMount')

        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({ count: this.state.count + 1 })
        }, 1000)
    }

    componentWillUnmount() {
        console.log('componentUnmounted')
        clearInterval(this.interval)
    }

    render() {
        
        const {count} = this.state
        if (count >= 8) {
            this.componentWillUnmount()
            return (
                <p>BOOM!!!!</p>
            )
        } else if (count % 2 === 0) {
            return (
                <p>tick</p>
            )
        } else {
            return (
                <p>tock</p>
            )
        }
        
    }
}

export default Bomb

