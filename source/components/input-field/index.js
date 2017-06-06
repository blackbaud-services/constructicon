import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import { withStyles } from '../../lib/css'
import styles from './styles'

const isBoolean = (type) => {
  return ['radio', 'checkbox'].indexOf(type) > -1
}

const InputField = ({
  type = 'text',
  required,
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  classNames,
  error,
  validations,
  ...props
}) => {
  const propsBlacklist = ['children', 'dirty', 'initial', 'invalid', 'styles', 'touched', 'validators']
  const allowedProps = omit(props, propsBlacklist)

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            className={classNames.field}
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            onBlur={(e) => onBlur && onBlur(e.target.value)}
            required={required}
            {...allowedProps}
          />
        )
      default:
        return (
          <input
            className={classNames.field}
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={(e) => onChange && onChange(isBoolean(type) ? e.target.checked : e.target.value)}
            onBlur={(e) => onBlur && onBlur(isBoolean(type) ? e.target.checked : e.target.value)}
            required={required}
            {...allowedProps}
          />
        )
    }
  }

  return (
    <div className={classNames.root}>
      {label && (
        <label className={classNames.label}>
          {label}
          {required && <span className={classNames.required}>*</span>}
        </label>
      )}

      {renderField()}

      {error && (
        <div className={classNames.errors}>
          {validations.map((error, i) => (
            <div className={classNames.error} key={i}>
              {error}
            </div>
          ))}
        </div>
      )}
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
  * The blur handler that will receive the updated value as it's only param
  */
  onBlur: PropTypes.func,

  /**
  * The type of field
  */
  type: PropTypes.oneOf(['color', 'date', 'email', 'hidden', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week']),

  /**
  * The placeholder for the field
  */
  placeholder: PropTypes.string,

  /**
  * The ID for the field
  */
  id: PropTypes.string,

  /**
  * Mark the field as required and displays an asterisk next to the label
  */
  required: PropTypes.bool
}

InputField.defaultProps = {
  type: 'text'
}

export default withStyles(styles)(InputField)
