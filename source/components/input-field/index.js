import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'

const InputField = ({
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
  required,
  classNames,
  ...props
}) => (
  <div className={classNames.root}>
    <label className={classNames.label}>
      {label}
      <span className={classNames.required}>*</span>
    </label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={classNames.field}
      required
      {...props}
    />
  </div>
)

InputField.propTypes = {
  /**
  * The label for the field
  */
  label: PropTypes.string.isRequired,

  /**
  * The name of the field
  */
  name: PropTypes.string.isRequired,

  /**
  * The current value
  */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  /**
  * The change handler that will receive the updated value as it's only param
  */
  onChange: PropTypes.func.isRequired,

  /**
  * The type of field
  */
  type: PropTypes.string,

  /**
  * The placeholder for the field
  */
  placeholder: PropTypes.string,

  /**
  * Mark the field as required and displays an asterisk next to the label
  */
  required: PropTypes.bool
}

InputField.defaultProps = {
  type: 'text'
}

export default withStyles(styles)(InputField)
