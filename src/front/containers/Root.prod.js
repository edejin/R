import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'

const Root = ({store}) => (
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
)

export default Root