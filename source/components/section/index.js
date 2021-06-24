import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const Section = ({
  background,
  borderColor,
  borderWidth,
  children,
  classNames,
  font,
  foreground,
  margin,
  size,
  spacing,
  styles,
  tag: Tag,
  textAlign,
  ...props
}) => {
  if (!children) {
    return null
  }

  return (
    <Tag className={`c11n-section ${classNames.root}`} {...props}>
      {children}
    </Tag>
  )
}

Section.propTypes = {
  /**
   * The content
   */
  children: PropTypes.any,

  /**
   * The tag or component to be used e.g. div, section
   */
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The background color of the section
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
   * The section font
   */
  font: PropTypes.string,

  /**
   * The radius of the section
   */
  radius: PropTypes.string,

  /**
   * The spacing to be applied
   */
  spacing: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

  /**
   * The margin to be applied
   */
  margin: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

  /**
   * The font size
   */
  size: PropTypes.number,

  /**
   * The text alignment
   */
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify', 'inherit']),

  /**
   * The custom styles to be applied to the section
   */
  styles: PropTypes.object
}

Section.defaultProps = {
  borderColor: 'shade',
  margin: 0,
  size: 0,
  spacing: { x: 1, y: 1 },
  styles: {},
  tag: 'section',
  textAlign: 'inherit'
}

export default withStyles(styles)(Section)
