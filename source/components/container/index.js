import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const Container = ({ children, tag: Tag, classNames }) => {
  if (!children) {
    return null
  }

  return (
    <div className={`c11n-container-wrapper ${classNames.outer}`}>
      <Tag className={`c11n-container ${classNames.root}`}>{children}</Tag>
    </div>
  )
}

Container.propTypes = {
  /**
   * The content
   */
  children: PropTypes.any,

  /**
   * The tag or component to be used e.g. div, section
   */
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The max width of the container to be passed into our rhythm
   */
  width: PropTypes.number,

  /**
   * The internal padding to be applied
   */
  spacing: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

  /**
   * Sets the min-height to the height of the viewport
   */
  fullHeight: PropTypes.bool,

  /**
   * The shadow to be applies to the container
   */
  shadow: PropTypes.string,

  /**
   * The background color of the container
   */
  background: PropTypes.string,

  /**
   * The foreground color of the area
   */
  foreground: PropTypes.string,

  /**
   * The color of the area outside the container
   */
  outerColor: PropTypes.string,

  /**
   * The custom styles to be applied to the container
   */
  styles: PropTypes.object
}

Container.defaultProps = {
  tag: 'article',
  spacing: 0,
  styles: {}
}

export default withStyles(styles)(Container)
