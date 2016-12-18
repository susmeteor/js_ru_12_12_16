import React, { Component } from 'react'

export default class CommentToggleButton extends Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <button type="button" onClick={this.toggleButton}>{this.props.caption}</button>
        )
    }

    toggleButton = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        })
    }
}