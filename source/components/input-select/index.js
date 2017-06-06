import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import { withStyles } from '../../lib/css'
import styles from './styles'

const InputSelect = ({
  label,
  name,
  value,
  options = [],
  placeholder,
  onChange,
  onBlur,
  required,
  error,
  validations,
  classNames,
  ...props
}) => {
  const propsBlacklist = ['children', 'dirty', 'initial', 'invalid', 'styles', 'touched', 'validators']
  const allowedProps = omit(props, propsBlacklist)

  return (
    <div className={classNames.root}>
      <label className={classNames.label}>
        {label}
        <span className={classNames.required}>*</span>
      </label>
      <select
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        onBlur={(e) => onBlur && onBlur(e.target.value)}
        className={classNames.field}
        required
        {...allowedProps}>
        {placeholder && <option>{placeholder}</option>}
        {options.map(({ value, label }, index) => (
          <option value={value} key={index}>{label}</option>
        ))}
      </select>

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

InputSelect.propTypes = {
  /**
  * The label for the field
  */
  label: PropTypes.string.isRequired,

  /**
  * The name of the field
  */
  name: PropTypes.string.isRequired,

  /**
  * The ID of the field
  */
  id: PropTypes.string,

  /**
  * The current value
  */
  value: PropTypes.string,

  /**
  * The available options i.e. [{ value, label}, { value, label }]
  */
  options: PropTypes.array.isRequired,

  /**
  * The change handler that will receive the updated value as it's only param
  */
  onChange: PropTypes.func.isRequired,

  /**
  * The blur handler that will receive the updated value as it's only param
  */
  onBlur: PropTypes.func,

  /**
  * The placeholder for the field
  */
  placeholder: PropTypes.string,

  /**
  * Mark the field as required and displays an asterisk next to the label
  */
  required: PropTypes.bool
}

export default withStyles(styles)(InputSelect)
