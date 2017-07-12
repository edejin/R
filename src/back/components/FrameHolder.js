import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newMessage, setNick} from '../actions'
import * as postMessagesTypes from '../constants/PostMessageTypes'

class FrameHolder extends React.Component {

  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage({data, source}) {
    try {
      const {nick, time, message, type, oldNick, newNick} = JSON.parse(data);
      switch (type) {
        case postMessagesTypes.MESSAGE:
          return this.props.newMessage({
            nick,
            time,
            message: message
          })
        case postMessagesTypes.NICK:
          return this.props.setNick(oldNick, newNick)
        case postMessagesTypes.LOADED:
          return source.postMessage(JSON.stringify({type: postMessageTypes.DATA, data: this.props.messages}), '*')
      }
    } catch (e) {
    }
  }

  componentDidMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  render() {
    return (
      <div>
        <iframe src="./front.html" frameBorder="0"></iframe>
        <iframe src="./front.html" frameBorder="0"></iframe>
      </div>
    )
  }
}

export default connect((state)=>({
  messages: state.messages
}), {
  newMessage,
  setNick
})(FrameHolder)