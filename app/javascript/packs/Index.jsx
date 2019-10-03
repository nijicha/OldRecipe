import React from 'react'
import { render } from 'react-dom'

import './Index.css'
import './Index.js'

import App from '../components/App'

document.addEventListener('turbolinks:load', function() {
  render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
