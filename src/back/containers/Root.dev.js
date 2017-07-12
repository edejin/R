import React from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import App from './App'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
)

export default Root