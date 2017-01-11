import React, { PropTypes } from 'react'
import Button from '../Button'
import Icon from '../Icon'

/**
* Uses the Button component to create a social icon
*
* Will accept any props that the Button accepts
*/
const ButtonSocial = ({
  type,
  ...props
}) => (
  <Button
    background={type}
    tag='a'
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
  ]).isRequired
}

ButtonSocial.defaultProps = {
  spacing: 0.5,
  effect: 'grow',
  radius: 'large'
}

export default ButtonSocial
