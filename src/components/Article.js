import React, { Component } from 'react'
import CommentToggleButton from './CommentToggleButton'
import CommentList from './CommentList'

export default class Article extends Component {
    showComments = "Show Comments"
    hideComments = "Hide Comments"

    state = {
        isArticleOpen: false,
        isCommentsOpen : false,
        buttonCommentsCaption: this.showComments
    }

/*
    constructor() {
        super()
        this.state = {
            isArticleOpen: false
        }
    }
*/

    render() {
        const { article } = this.props

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {this.getBody(article)}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isArticleOpen: !this.state.isArticleOpen
        })
    }

    toggleComments = () => {
        this.setState ({isCommentsOpen: !this.state.isCommentsOpen})
        this.setState({buttonCommentsCaption: this.getButtonCommentsCaption()})
    }

    getBody(article) {
        if (!this.state.isArticleOpen) return null
        /*const commentToggleButton = <CommentToggleButton {this.toggleComments} caption="show" >ShowComments</CommentToggleButton>*/

        const commentList = this.getComments(article.comments)

        return (
            <div>
                <section>
                    {this.props.article.text}
                </section>
                <button onClick={this.toggleComments}>{this.state.buttonCommentsCaption}</button>
                {/*{commentToggleButton}*/}
                {commentList}
            </div>

        )
    }

    getComments (comments) {
        if (!this.state.isCommentsOpen) return null;

        return (
            <CommentList comments={comments}/>
        )
    }

    getButtonCommentsCaption() {
        if (this.state.isCommentsOpen === true)  {
            return this.showComments
        } else {
            return this.hideComments
        }
    }
}