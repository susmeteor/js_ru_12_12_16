import React from 'react'
import Comment from './Comment'

export default function CommentList(props) {
    const {comments} = props
    let commentElements = [];
    if (comments != undefined) {
        commentElements = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    }

    return (
        <div>
            <h4>Comments ({commentElements.length})</h4>
            <ul>
                {commentElements}
            </ul>
        </div>
    )
}