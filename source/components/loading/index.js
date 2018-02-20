import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles, { keyframes } from './styles'

const Loading = ({ classNames }) => (
  <div className={`c11n-loading ${classNames.root}`}>
    <span className={classNames.dot} />
    <span className={classNames.dot} />
    <span className={classNames.dot} />
  </div>
)

Loading.propTypes = {
  /**
   * The color of the dots
   */
  color: PropTypes.string,

  /**
   * The duration of the animation
   */
  duration: PropTypes.number,

  /**
   * The size of the dots
   */
  size: PropTypes.number,

  /**
   * Custom styles to be applied to the loading dots
   */
  styles: PropTypes.object
}

Loading.defaultProps = {
  color: 'grey',
  duration: 550,
  size: 1,
  styles: {}
}

export default withStyles(styles, keyframes)(Loading)
