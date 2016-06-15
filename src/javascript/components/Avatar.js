import React, { PropTypes } from 'react'

export const Avatar = ({
  image
}) => (
  <div className='avatar'>
    <img src={image} />
  </div>
)

Avatar.propTypes = {
  image: PropTypes.string.isRequired
}

export default Avatar
