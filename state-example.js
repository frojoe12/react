import React, {Component} from 'react'

export default class Clock extends Component {

    constructor(props) {
        super (props)
        this.state = {date:new Date(), count:0}
        this.counter = 0;
    }

    componentDidMount() {
        this.timerId = setInterval( () => this.tick(), 1000 )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.counter++
        this.setState( (state) => {date: new Date(), count: this.counter })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>My Clock</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()} </h2>
                    <h3>{this.state.count}</h3>
                </div>
            </React.Fragment>
        )
    }
}
