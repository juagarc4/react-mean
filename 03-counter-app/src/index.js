import React from 'react'
import ReactDOM from 'react-dom'
// import FirstApp from './components/FirstApp'
import CounterApp from './components/CounterApp'

import './index.css'

const divRoot = document.querySelector('#root')

// ReactDOM.render(<FirstApp greeting={'Hello World'} />, divRoot)
ReactDOM.render(<CounterApp value={10} />, divRoot)
