import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import withStyles from '../with-styles'
import styles from './styles'

import Label from '../label'

const isBoolean = (type) => {
  return ['radio', 'checkbox'].indexOf(type) > -1
}

const InputField = ({
  classNames,
  error,
  id,
  label,
  name,
  required,
  type = 'text',
  onBlur,
  onChange,
  styles = {},
  validations,
  value,
  ...props
}) => {
  const propsBlacklist = ['children', 'dirty', 'initial', 'invalid', 'styles', 'touched', 'validators']
  const allowedProps = omit(props, propsBlacklist)
  const Tag = type === 'textarea' ? 'textarea' : 'input'
  const inputId = id || name
  const labelId = `label-${inputId}`

  const renderField = () => (
    <Tag
      className={classNames.field}
      type={type}
      name={name}
      id={inputId}
      value={value}
      onChange={(e) => onChange && onChange(isBoolean(type) ? e.target.checked : e.target.value)}
      onBlur={(e) => onBlur && onBlur(isBoolean(type) ? e.target.checked : e.target.value)}
      required={required}
      aria-labelledby={labelId}
      {...allowedProps}
    />
  )

  return (
    <div className={`c11n-input-field ${classNames.root}`}>
      {label && (
        <Label
          id={labelId}
          inputId={inputId}
          required={required}
          styles={{
            root: styles.label,
            required: styles.required
          }}>
          {label}
        </Label>
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
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
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
  type: PropTypes.oneOf(['checkbox', 'color', 'date', 'email', 'hidden', 'month', 'number', 'password', 'radio', 'range', 'search', 'tel', 'text', 'textarea', 'time', 'url', 'week']),

  /**
  * The placeholder for the field
  */
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

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
