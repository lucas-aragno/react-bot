import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export const MessageBox = ({
  message
}) => (
  <div className='message-box'>
    {message}
  </div>
)

MessageBox.propTypes = {
  message: PropTypes.string
}

export const mapStateToProps = (state) => ({
  message: state.message
})

export default connect(mapStateToProps)(MessageBox)
