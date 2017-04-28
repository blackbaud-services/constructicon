import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import styles from './styles'

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
  ]).isRequired,

  /**
  * The spacing to be applied
  */
  spacing: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),

  /**
  * The alignment of the buttons in the group
  */
  align: PropTypes.oneOf([ 'left', 'center', 'right' ]),

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
