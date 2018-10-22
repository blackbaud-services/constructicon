import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const Heading = ({ children, tag: Tag, id, classNames }) => {
  if (!children) {
    return null
  }

  return (
    <Tag id={id} className={`c11n-heading ${classNames.root}`}>
      {children}
    </Tag>
  )
}

Heading.propTypes = {
  /**
   * The html to be structured
   */
  children: PropTypes.any,

  /**
   * The tag to be used for the containing element
   */
  tag: PropTypes.string,

  /**
   * The ID attribute be added to the element (useful for navigation)
   */
  id: PropTypes.string,

  /**
   * The theme color to be used for the heading
   */
  color: PropTypes.string,

  /**
   * The size of the heading (using the font scale)
   */
  size: PropTypes.number,

  /**
   * Disable the bottom margin of the heading
   */
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

  /**
   * Custom styles to be added to the element
   */
  styles: PropTypes.object
}

Heading.defaultProps = {
  tag: 'h2',
  size: 3,
  spacing: { b: 0.5 },
  styles: {}
}

export default withStyles(styles)(Heading)
