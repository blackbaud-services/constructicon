import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const MetricGroup = ({ children, classNames }) => (
  <div className={`c11n-metric-group ${classNames.root}`}>{children}</div>
)

MetricGroup.propTypes = {
  /**
   * The metrics to be displayed
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,

  /**
   * The color to be used
   */
  foreground: PropTypes.string,

  /**
   * The background color to be used
   */
  background: PropTypes.string,

  /**
   * Custom styles to be applied
   */
  styles: PropTypes.object
}

MetricGroup.defaultProps = {
  styles: {}
}

export default withStyles(styles)(MetricGroup)
