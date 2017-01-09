import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

const Button = ({
  children,
  tag: Tag,
  classNames,
  ...props
}) => (
  <Tag className={classNames.root} {...props}>
    {children}
  </Tag>
)

Button.propTypes = {
  /**
  * The text for the button
  */
  children: PropTypes.any.isRequired,

  /**
  * The tag or component to be used e.g. button, a, Link
  */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),

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
  * The spacing to be applied
  */
  spacing: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),

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
  * Custom styles to be applied to the button
  */
  styles: PropTypes.object
}

Button.defaultProps = {
  tag: 'button',
  background: 'primary',
  foreground: 'light',
  borderColor: 'shade',
  borderWidth: 2,
  font: 'button',
  size: 0,
  spacing: {x: 1, y: 0.5},
  radius: 'small',
  effect: 'tint',
  styles: {}
}

export default withStyles(styles)(Button)
