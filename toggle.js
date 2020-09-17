import React from 'react'

export default class Toggle extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {isToggleOn: false}
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState((state) => ({isToggleOn: !state.isToggleOn}))
    }
    toggleNoBind = () => {
        this.setState((state,props) => ({isToggleOn: !state.isToggleOn}))   
    }

    render() {
        return(
            <div>
                <button onClick={this.toggle}>{ this.state.isToggleOn ? "ON" : "OFF" }</button>
            </div>
            <div>
                <button onClick = {this.toggleNoBind}>{this.state.isToggleOn ? "Toggle On (no bind)" : "Toggle Off (no bind)}</button>
            </div>
        )
    }
}
