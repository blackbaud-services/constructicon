import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const Flippy = ({ front, back, color, classNames }) => (
  <div className={`c11n-flippy ${classNames.root}`}>
    <div className={`${classNames.wrapper} ${classNames.front}`}>{front}</div>
    <div className={`${classNames.wrapper} ${classNames.back}`}>{back}</div>
  </div>
)

Flippy.propTypes = {
  /**
   * Content to appear by default
   */
  front: PropTypes.node.isRequired,

  /**
   * Content to appear on hover
   */
  back: PropTypes.node.isRequired,

  /**
   * The background color
   */
  background: PropTypes.string,

  /**
   * The color of the text
   */
  foreground: PropTypes.string,

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
   * Custom styles to be applied
   */
  styles: PropTypes.object
}

Flippy.defaultProps = {
  background: 'primary',
  foreground: 'light',
  font: 'body',
  size: 2,
  spacing: { x: 1, y: 1 },
  styles: {}
}

export default withStyles(styles)(Flippy)
