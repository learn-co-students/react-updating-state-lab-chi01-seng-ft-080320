import React from 'react'

export default class DigitalClicker extends React.Component{
    
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    addClick = () => {
        let timesClicked = this.state.timesClicked
        timesClicked = timesClicked + 1
        this.setState({timesClicked: timesClicked})
    }
    render(){
        return(
            <div>
            <button onClick={this.addClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
