import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
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
}) => {
  const propsBlacklist = ['label', 'styles']
  const allowedProps = omit(props, propsBlacklist)

  return (
    <div className={classNames.root}>
      {label && (
        <label className={classNames.label}>
          {label}
          {required && <span className={classNames.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={classNames.field}
        required
        {...allowedProps}
      />
    </div>
  )
}

InputField.propTypes = {
  /**
  * The label for the field
  */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),

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
  type: PropTypes.oneOf(['color', 'date', 'email', 'hidden', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week']),

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
