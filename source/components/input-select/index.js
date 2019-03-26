import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import mapKeys from 'lodash/mapKeys'
import groupBy from 'lodash/groupBy'
import withStyles from '../with-styles'
import styles from './styles'

import Icon from '../icon'
import InputValidations from '../input-validations'
import Label from '../label'

const InputSelect = ({
  classNames,
  error,
  groupOptions,
  id,
  label,
  name,
  options = [],
  onBlur,
  onChange,
  placeholder,
  required,
  styles = {},
  validations,
  value,
  ...props
}) => {
  const propsBlacklist = [
    'children',
    'dirty',
    'initial',
    'invalid',
    'styles',
    'touched',
    'validators'
  ]
  const allowedProps = omit(props, propsBlacklist)
  const inputId = id || name
  const labelId = `label-${inputId}`

  const renderOptions = () => {
    if (groupOptions) {
      const groupedOptions = groupBy(options, 'group')
      const resultOptions = []

      mapKeys(groupedOptions, (opts, groupLabel) => {
        if (groupLabel !== 'undefined') {
          resultOptions.push(
            <optgroup key={groupLabel} label={groupLabel}>
              {opts.map(({ value, label, disabled }, index) => (
                <option value={value} key={index} disabled={disabled}>
                  {label}
                </option>
              ))}
            </optgroup>
          )
        } else {
          resultOptions.push(
            opts.map(({ value, label, disabled }, index) => (
              <option value={value} key={index} disabled={disabled}>
                {label}
              </option>
            ))
          )
        }
      })

      return resultOptions
    } else {
      return options.map(({ value, label, disabled }, index) => (
        <option value={value} key={index} disabled={disabled}>
          {label}
        </option>
      ))
    }
  }

  return (
    <div className={`c11n-input-select ${classNames.root}`}>
      {label && (
        <Label
          id={labelId}
          inputId={inputId}
          required={required}
          styles={{
            root: styles.label,
            required: styles.required
          }}
        >
          {label}
        </Label>
      )}

      <div className={classNames.wrapper}>
        <select
          name={name}
          id={inputId}
          value={value}
          placeholder={placeholder}
          onChange={e => onChange && onChange(e.target.value)}
          onBlur={e => onBlur && onBlur(e.target.value)}
          className={classNames.input}
          required
          aria-labelledby={labelId}
          {...allowedProps}
        >
          {placeholder && (
            <option disabled value=''>
              {placeholder}
            </option>
          )}
          {renderOptions()}
        </select>

        <span className={classNames.field} aria-hidden />

        <Icon name='dropdown' size={0.75} styles={styles.icon} />
      </div>

      {error && (
        <InputValidations
          styles={{ root: styles.error }}
          validations={validations}
        />
      )}
    </div>
  )
}

InputSelect.propTypes = {
  /**
   * The label for the field
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

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
   * The available options i.e. [{ value, label }, { value, label }]
   */
  options: PropTypes.array.isRequired,

  /**
   * Group options by `group` param
   */
  groupOptions: PropTypes.bool,

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
