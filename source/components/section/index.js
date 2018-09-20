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
  foreground,
  margin,
  spacing,
  styles,
  tag: Tag,
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
   * The custom styles to be applied to the section
   */
  styles: PropTypes.object
}

Section.defaultProps = {
  tag: 'section',
  borderColor: 'shade',
  spacing: { x: 1, y: 1 },
  margin: 0,
  styles: {}
}

export default withStyles(styles)(Section)
