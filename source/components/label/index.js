import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const Label = ({ children, classNames, id, inputId, required }) => (
  <label className={`c11n-label ${classNames.root}`} id={id} htmlFor={inputId}>
    {children}
    {required && (
      <span className={classNames.required} title='Required field'>
        *
      </span>
    )}
  </label>
)

Label.propTypes = {
  /**
   * The label
   */
  children: PropTypes.any,

  /**
   * The id of the label
   */
  id: PropTypes.string,

  /**
   * The id of the related input
   */
  inputId: PropTypes.string,

  /**
   * Whether the field is required
   */
  required: PropTypes.bool
}

Label.defaultProps = {}

export default withStyles(styles)(Label)
