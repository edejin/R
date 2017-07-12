import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sendMessage, updateNick, dataSuccess, newMessage, setNicks} from '../actions'
import {debounce, once} from '../../utils'
import {prettyMessagesSelector} from '../selectors'
import * as postMessageTypes from '../../back/constants/PostMessageTypes'

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.dataSuccessOnce = once(this.props.dataSuccess);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleNickChange = debounce(this.handleNickChange, 800).bind(this);
  }

  handleMessage(e) {
    try {
      let {type, data} = JSON.parse(e.data);
      switch (type) {
        case postMessageTypes.DATA:
          return this.dataSuccessOnce(data);
        case postMessageTypes.NEW_MESSAGE:
          return this.props.newMessage(data);
        case postMessageTypes.SET_NICKS:
            return this.props.setNicks(data);
      }
    } catch (e) {}
  }

  componentDidMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  handleKeyPress(event) {
    if(event.key == 'Enter'){
      this.handleSend()
    }
  }

  handleSend() {
    let message = this.messageInput.value;
    let time = Date.now();
    let nick = this.nickInput.value;

    this.messageInput.value = '';

    sendMessage({
      message,
      time,
      nick
    })
  }

  handleNickChange() {
    this.props.updateNick(this.nickInput.value)
  }

  render() {
    return (
      <div>
        <label>Nick name: <input type="text" ref={(e)=>{this.nickInput = e}} onChange={this.handleNickChange}/></label>
        <ul className="messageHolder">
          {this.props.messages.map(v=><li key={v.key} children={v.message}></li>)}
        </ul>
        <input type="text" ref={(e)=>{this.messageInput = e}} onKeyPress={this.handleKeyPress}/>
        <button onClick={this.handleSend}>Send</button>
      </div>
    )
  }
}

export default connect((state)=>({
  messages: prettyMessagesSelector(state)
}), {
  updateNick,
  dataSuccess,
  newMessage,
  setNicks
})(Chat)