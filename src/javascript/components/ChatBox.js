import React, { PropTypes } from 'react'

import Avatar from './Avatar'
import MessageBox from './MessageBox'
import TalkButton from './TalkButton'

export const ChatBox = ({
  image
}) => (
  <div className='chat-box'>
    <Avatar image={image} />
    <MessageBox />
    <TalkButton />
  </div>
)

ChatBox.propTypes = {
  image: PropTypes.string.isRequired
}

export default ChatBox
