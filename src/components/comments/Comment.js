import React from 'react'
import ReactMarkdown from 'react-markdown'

const Comment = props => (
  <div className="singleComment">
    <div className="textContent">
      <div className="singleCommentContent">
        <h3>{props.owner}</h3>
        <ReactMarkdown source={props.children} />
      </div>
      <div className="singleCommentButtons">
        <a onClick={() => { props.handleUpdateComment(props._id) }}>update</a>
        <a onClick={() => { props.handleDeleteComment(props._id) }}>delete</a>
      </div>
    </div>
  </div>
)

export default Comment
