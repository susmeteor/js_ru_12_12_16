import React, { Component, PropTypes } from 'react'

class AddCommentForm extends Component {
    static propTypes = {

    };

    state = {
        //ок, но я просил текст и юзера
        textComment: ''
    }

    render() {
        return (
            <div>
                <br/>
                Input your comment:
                <br/>
                <textarea type="text" value={this.state.textComment} onChange={this.handleChange}/>
                <br/>
                <a href="#" onClick = {this.sendComment}>
                    send comment
                </a>
                <br/>
            </div>
        )
    }

    sendComment = ev => {
        console.log("comment sent:", this.state.textComment)
    }

    handleChange = ev => {
        this.setState({
            textComment: ev.target.value
        })
    }
}

export default AddCommentForm
