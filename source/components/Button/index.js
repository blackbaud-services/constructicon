import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

/**
 * Button
 */
const Button = ({
  children,
  classNames
}) => (
  <a href='http://google.com' className={classNames.root}>
    {children}
  </a>
)

Button.propTypes = {
  /**
  * The text for the button
  */
  children: PropTypes.string.isRequired,

  /**
  * The background color of the button -
  */
  background: PropTypes.oneOf(options.colors),

  /**
  * The color of the text -
  */
  foreground: PropTypes.oneOf(options.colors),

  /**
  * The color of the border
  */
  borderColor: PropTypes.oneOf(options.colors),

  /**
  * The width of the border
  */
  borderWidth: PropTypes.number,

  /**
  * The font for the text -
  */
  font: PropTypes.oneOf(options.treatments),

  /**
  * The scale to be used for the font size
  */
  size: PropTypes.number,

  /**
  * The padding to be passed through rhythm in ems (x and y axis)
  */
  padding: PropTypes.object,

  /**
  * The radius of the button -
  */
  radius: PropTypes.oneOf(options.radiuses),

  /**
  * The shadow to be placed on the button
  */
  shadow: PropTypes.oneOf(options.shadows),

  /**
  * The effect to be used on the button
  */
  effect: PropTypes.oneOf(options.effects),

  /**
  * The transition to be used on the button
  */
  transition: PropTypes.oneOf(options.transitions),

  /**
  * Custom styles to be applied to the button
  */
  styles: PropTypes.object
}

Button.defaultProps = {
  background: 'primary',
  foreground: 'light',
  borderColor: 'shade',
  borderWidth: 2,
  font: 'button',
  size: 0,
  padding: {x: 0.5, y: 1},
  radius: 'small',
  shadow: 'none',
  effect: 'none',
  transition: 'easeOut',
  styles: {}
}

export default withStyles(styles)(Button)
