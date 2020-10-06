// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitRate = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        }, console.log(this.state));
    }

    handleResolution = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        }, console.log(this.state))
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitRate}>bitrate</button>
                <button className='resolution' onClick={this.handleResolution}>resolution</button>
            </div>
        )
    }

}