import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import Icon from '../icon'
import openShareDialog from './openShareDialog'

/**
 * Uses the Button component to create a share button with an icon. Renamed from `ButtonSocial` in v2.1
 *
 * Will accept any props that the Button accepts
 */
const ButtonShare = ({
  share,
  type,
  url,
  title,
  hashtags,
  image,
  ...props
}) => (
  <Button
    background={type}
    tag={share ? 'button' : 'a'}
    onClick={share && openShareDialog({ type, url, title, hashtags, image })}
    aria-label={type}
    {...props}
  >
    <Icon name={type} />
  </Button>
)

ButtonShare.propTypes = {
  /**
   * The social network / share target
   */
  type: PropTypes.oneOf([
    'facebook',
    'fitbit',
    'google',
    'instagram',
    'linkedin',
    'mail',
    'mapmyfitness',
    'messenger',
    'pinterest',
    'reddit',
    'slack',
    'sms',
    'strava',
    'twitter',
    'vimeo',
    'whatsapp',
    'youtube'
  ]).isRequired,

  /**
   * Makes the button a share button (only available for twitter, facebook, linkedin, pinterest & mail)
   */
  share: PropTypes.bool,

  /**
   * Hashtags to be added to a twitter share
   */
  hashtags: PropTypes.string,

  /**
   * The text for a twitter, linkedin or pinterest share. Also the email subject for mail share
   */
  title: PropTypes.string
}

ButtonShare.defaultProps = {
  spacing: 0.5,
  effect: 'grow',
  radius: 'large',
  target: '_blank'
}

export default ButtonShare
