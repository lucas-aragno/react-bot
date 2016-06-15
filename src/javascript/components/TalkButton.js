import React, { PropTypes } from 'react'

import talk from '../actions/talk'

import getMessages from '../utils/messages'

import { connect } from 'react-redux'

export const TalkButton = ({
  dispatchTalk
}) => (
  <button onClick={() => dispatchTalk()}>
    Talk!
  </button>
)

TalkButton.propTypes = {
  dispatchTalk: PropTypes.func.isRequired
}

export const mapDispatchToProps = (dispatch) => ({
  dispatchTalk: () => {
    dispatch(talk(getMessages()))
  }
})

export default connect(null, mapDispatchToProps)(TalkButton)
