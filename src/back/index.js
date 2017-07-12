import React from 'react'
import { render } from 'react-dom'

import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()

import './styles/main.less'

render(
  <Root store={store} />,
  document.getElementById('root')
)
