import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import withStyles from '../with-styles'
import styles from './styles'

const Button = ({ children, tag: Tag, type, target, classNames, ...props }) => {
  const propsBlacklist = [
    'children',
    'background',
    'foreground',
    'borderColor',
    'borderWidth',
    'font',
    'size',
    'spacing',
    'radius',
    'shadow',
    'effect',
    'block',
    'styles'
  ]
  const allowedProps = omit(props, propsBlacklist)

  return (
    <Tag
      className={`c11n-button ${classNames.root}`}
      type={Tag === 'button' ? type : undefined}
      aria-label={typeof children === 'string' ? children : 'button'}
      target={['a', 'form'].indexOf(Tag) > -1 ? target : undefined}
      formTarget={Tag === 'button' ? target : undefined}
      {...allowedProps}
    >
      {children}
    </Tag>
  )
}

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
    PropTypes.element,
    PropTypes.func
  ]),

  /**
   * The target for the button
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),

  /**
   * The type the button
   */
  type: PropTypes.string,

  /**
   * The background color of the button
   */
  background: PropTypes.string,

  /**
   * The color of the text
   */
  foreground: PropTypes.string,

  /**
   * The color of the border
   */
  borderColor: PropTypes.string,

  /**
   * The width of the border
   */
  borderWidth: PropTypes.number,

  /**
   * The font for the text
   */
  font: PropTypes.string,

  /**
   * The scale to be used for the font size
   */
  size: PropTypes.number,

  /**
   * The spacing to be applied
   */
  spacing: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

  /**
   * The radius of the button
   */
  radius: PropTypes.string,

  /**
   * The shadow to be placed on the button
   */
  shadow: PropTypes.string,

  /**
   * The effect to be used on the button
   */
  effect: PropTypes.string,

  /**
   * Makes the button full width
   */
  block: PropTypes.bool,

  /**
   * Custom styles to be applied to the button
   */
  styles: PropTypes.object
}

Button.defaultProps = {
  tag: 'button',
  target: '_top',
  type: 'button',
  background: 'primary',
  foreground: 'light',
  borderColor: 'shade',
  borderWidth: 0,
  font: 'button',
  size: 0,
  spacing: { x: 0.75, y: 0.5 },
  radius: 'small',
  effect: 'tint',
  styles: {}
}

export default withStyles(styles)(Button)
