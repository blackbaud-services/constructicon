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
  * The padding to be applied between buttons (rhythm)
  */
  padding: PropTypes.object,

  /**
  * Custom styles to be applied to the button
  */
  styles: PropTypes.object
}

ButtonGroup.defaultProps = {
  padding: {x: 0.25, y: 0.25},
  styles: {}
}

export default withStyles(styles)(ButtonGroup)
