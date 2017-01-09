import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'

/**
 * Used for grouping buttons
 */
const ButtonGroup = ({
  children,
  classNames
}) => (
  <div className={classNames.root}>
    {children}
  </div>
)

ButtonGroup.propTypes = {
  /**
  * The text for the button
  */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),

  /**
  * The spacing to be applied
  */
  spacing: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),

  /**
  * Custom styles to be applied to the button
  */
  styles: PropTypes.object
}

ButtonGroup.defaultProps = {
  spacing: {x: 0.25, y: 0.25},
  styles: {}
}

export default withStyles(styles)(ButtonGroup)
