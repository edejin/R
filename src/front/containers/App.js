import React, {Component} from 'react'
import {connect} from 'react-redux'
import {resetErrorMessage, loadInitData} from '../actions'

import Chat from '../components/Chat'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  componentDidMount() {
    this.props.loadInitData()
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  renderErrorMessage() {
    const {errorMessage} = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{backgroundColor: '#e99', padding: 10}}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
        Dismiss
      </a>)
      </p>
    )
  }

  render() {
    const {children} = this.props
    return (
      <div>
        <Chat/>
        <hr />
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = {
  resetErrorMessage,
  loadInitData
}

export default connect(mapStateToProps, mapDispatchToProps)(App)