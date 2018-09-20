import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const ButtonGroup = ({ children, classNames }) => (
  <div className={`c11n-button-group ${classNames.root}`}>{children}</div>
)

ButtonGroup.propTypes = {
  /**
   * The buttons to appear within the group
   */
  children: PropTypes.any,

  /**
   * The spacing to be applied
   */
  spacing: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

  /**
   * The alignment of the buttons in the group
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * Custom styles to be applied to the button
   */
  styles: PropTypes.object
}

ButtonGroup.defaultProps = {
  spacing: 0.25,
  styles: {}
}

export default withStyles(styles)(ButtonGroup)
