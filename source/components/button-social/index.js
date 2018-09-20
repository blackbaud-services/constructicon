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
const ButtonSocial = ({ share, type, url, title, hashtags, ...props }) => (
  <Button
    background={type}
    tag={share ? 'button' : 'a'}
    onClick={share && openShareDialog({ type, url, title, hashtags })}
    aria-label={type}
    {...props}
  >
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
    'linkedin',
    'youtube',
    'google',
    'vimeo',
    'strava',
    'mapmyfitness',
    'fitbit'
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
   * The text for a Twitter or Linkedin share
   */
  text: PropTypes.string
}

ButtonSocial.defaultProps = {
  spacing: 0.5,
  effect: 'grow',
  radius: 'large',
  target: '_blank'
}

export default ButtonSocial
