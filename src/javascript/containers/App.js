import React, { Component } from 'react'
import ChatBox from '../components/ChatBox'
import styles from '../../styles/app.css'
class App extends Component {
  render () {
    const image = "http://1u88jj3r4db2x4txp44yqfj1.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/chatbot-930x659.jpg"
    const message = "hello from react-bot"
    return (
      <div>
        <ChatBox image={image} />
      </div>
    )
  }
}

export default App
