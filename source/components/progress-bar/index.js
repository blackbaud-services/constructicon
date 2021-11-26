import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const ProgressBar = ({ classNames, alt, progress = 0 }) => (
  <div className={`c11n-progress-bar ${classNames.root}`}>
    <div className={classNames.fill} aria-hidden />
    <div className={classNames.alt}>{alt}</div>
  </div>
)

ProgressBar.propTypes = {
  /**
   * The alt text for the progress bar.
   */
  alt: PropTypes.string.isRequired,

  /**
   * The progress amount (percentage)
   */
  progress: PropTypes.number.isRequired,

  /**
   * The fill color of the progress bar -
   */
  fill: PropTypes.string,

  /**
   * The background color of the progress bar -
   */
  background: PropTypes.string,

  /**
   * The border radius of the progress bar -
   */
  radius: PropTypes.string,

  /**
   * Custom styles to be applied to the progress bar
   */
  styles: PropTypes.object
}

ProgressBar.defaultProps = {
  fill: 'primary',
  background: 'shade',
  radius: 'small',
  styles: {}
}

export default withStyles(styles)(ProgressBar)
