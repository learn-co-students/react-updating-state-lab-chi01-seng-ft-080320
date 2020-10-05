import React from 'react'


class DigitalClicker extends React.Component {
    constructor() {
        this.state = {
            timesClicked: 0
        };
    }

    handleClick = () => {
        this.setState( previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>Clicker</button>
        )
    }
}

export default DigitalClicker;