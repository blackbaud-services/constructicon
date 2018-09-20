import React, { Component } from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import withStyles from '../with-styles'
import styles from './styles'

import Button from '../button'
import Icon from '../icon'
import InputValidations from '../input-validations'
import Label from '../label'

class InputFile extends Component {
  constructor (props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)

    this.state = {
      files: []
    }
  }

  handleUpdate ({ target }, method) {
    const files = target.files
    this.setState({ files })

    if (files.length) {
      return method && method(files.length > 1 ? files : files[0])
    }
  }

  render () {
    const {
      classNames,
      button,
      error,
      icon,
      id,
      label,
      name,
      required,
      placeholder,
      onBlur,
      onChange,
      styles = {},
      value,
      validations,
      ...props
    } = this.props

    const { files } = this.state
    const filesCount = files.length

    const propsBlacklist = [
      'children',
      'dirty',
      'initial',
      'invalid',
      'styles',
      'touched',
      'validators',
      'value'
    ]
    const allowedProps = omit(props, propsBlacklist)
    const inputId = id || name
    const labelId = `label-${inputId}`

    const renderField = () => (
      <div className={classNames.wrapper}>
        <input
          className={classNames.input}
          type='file'
          name={name}
          id={inputId}
          onChange={e => this.handleUpdate(e, onChange)}
          onBlur={e => this.handleUpdate(e, onBlur)}
          required={required}
          aria-labelledby={labelId}
          {...allowedProps}
        />
        <Button styles={styles.field} {...button}>
          {icon && <Icon name={icon} />}
          {filesCount ? (
            filesCount > 1 ? (
              <span>{filesCount} files selected</span>
            ) : (
              <span>{files[0].name}</span>
            )
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </div>
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
            }}
          >
            {label}
          </Label>
        )}

        {renderField()}

        {error && (
          <InputValidations
            styles={{ root: styles.error }}
            validations={validations}
          />
        )}
      </div>
    )
  }
}

InputFile.propTypes = {
  /**
   * Props to be passed to the Button component
   */
  button: PropTypes.object,

  /**
   * The label for the field
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The name of the field
   */
  name: PropTypes.string.isRequired,

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
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The ID for the field
   */
  id: PropTypes.string,

  /**
   * The name of the icon. No icon is displayed if set to false
   */
  icon: PropTypes.string,

  /**
   * Mark the field as required and displays an asterisk next to the label
   */
  required: PropTypes.bool
}

InputFile.defaultProps = {
  button: { background: 'grey' },
  placeholder: 'Choose a file...',
  icon: 'upload'
}

export default withStyles(styles)(InputFile)
