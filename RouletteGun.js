import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        };
        console.log('constructor')
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
        console.log('clearTimeout')
      }

    handleTriggerPull = () => {
        console.log('triggerPull')
        this.setState({
            spinningTheChamber: this.state.spinningTheChamber = true
            
        })

        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props

        if (spinningTheChamber) {
            return (  
                    "spinning the chamber and pulling the trigger"            
            )
        } else if (chamber === bulletInChamber) {
            this.componentWillUnmount()
            return (
                    "BANG!!!!"
            )
        } else {
            return ("you're safe!")
        }        
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button
                    onClick={this.handleTriggerPull}
                >
                Pull the trigger!
                </button>
            </div>
    )  
    }

}
export default RouletteGun;
