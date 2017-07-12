import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import Icon from '../icon'
import openShareDialog from './openShareDialog'

/**
* Uses the Button component to create a social icon
*
* Will accept any props that the Button accepts
*/
const ButtonSocial = ({
  share,
  type,
  url,
  title,
  hashtags,
  caption,
  ...props
}) => (
  <Button
    background={type}
    tag={share ? 'button' : 'a'}
    onClick={share && openShareDialog({ type, url, title, hashtags, caption })}
    {...props}>
    <Icon name={type} />
  </Button>
)

ButtonSocial.propTypes = {
  /**
  * The social network
  */
  type: PropTypes.oneOf([
    'facebook',
    'twitter',
    'instagram',
    'google',
    'youtube'
  ]).isRequired,

  /**
  * Makes the button a share button (only available for twitter, facebook and google)
  */
  share: PropTypes.bool,

  /**
  * Hashtags to be added to a Twitter share
  */
  hashtags: PropTypes.string,

  /**
  * The caption for the Facebook share
  */
  caption: PropTypes.string
}

ButtonSocial.defaultProps = {
  spacing: 0.5,
  effect: 'grow',
  radius: 'large',
  target: '_blank'
}

export default ButtonSocial
