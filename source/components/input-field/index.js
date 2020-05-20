import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import withStyles from '../with-styles'
import styles from './styles'
import { isBoolean } from '../../lib/form'
import sanitizeHtml from '../../lib/sanitizeHtml'

import ContentEditable from 'react-contenteditable'
import Icon from '../icon'
import InputValidations from '../input-validations'
import Label from '../label'

class InputField extends React.Component {
  constructor (props) {
    super(props)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handlePaste = this.handlePaste.bind(this)
    this.state = { value: props.value }
  }

  getTag () {
    switch (this.props.type) {
      case 'textarea':
        return 'textarea'
      case 'contenteditable':
        return ContentEditable
      default:
        return 'input'
    }
  }

  handleChange (event) {
    const { onChange, type } = this.props
    const value = isBoolean(type) ? event.target.checked : event.target.value

    this.setState({ value })

    return onChange && onChange(value)
  }

  handleBlur () {
    const { onBlur } = this.props

    return onBlur && onBlur(sanitizeHtml(this.state.value))
  }

  handleKeyDown (event) {
    const { onKeyDown, type } = this.props

    onKeyDown && onKeyDown(event)

    if (type === 'contenteditable' && event.metaKey) {
      switch (event.key) {
        case 'u':
          return document.execCommand('underline', false)
        case 's':
          event.preventDefault()
          return document.execCommand('strikeThrough', false)
        default:
      }
    }
  }

  handlePaste (event) {
    const { onChange, type } = this.props

    if (type === 'contenteditable') {
      return setTimeout(() => {
        const value = sanitizeHtml(this.state.value)

        this.setState({ value })
        onChange && onChange(value)
      })
    }
  }

  render () {
    const {
      classNames,
      error,
      id,
      label,
      name,
      required,
      type = 'text',
      onBlur,
      onChange,
      onKeyDown,
      setRef,
      styles = {},
      status,
      validations,
      value,
      ...props
    } = this.props

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
    const Tag = this.getTag()
    const inputId = id || name
    const labelId = `label-${inputId}`
    const isContentEditable = type === 'contenteditable'

    const renderField = () => (
      <Tag
        ref={setRef}
        className={classNames.field}
        type={type}
        name={name}
        id={inputId}
        value={value}
        html={isContentEditable ? value : undefined}
        checked={isBoolean(type) && value}
        contentEditable={isContentEditable}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        onPaste={this.handlePaste}
        required={required}
        aria-labelledby={labelId}
        {...allowedProps}
      />
    )

    const renderStatus = () => {
      switch (status) {
        case 'fetching':
          return (
            <Icon styles={styles.status} name='loading' spin color='grey' />
          )
        case 'fetched':
          return <Icon styles={styles.status} name='check' color='success' />
        case 'failed':
          return <Icon styles={styles.status} name='warning' color='danger' />
        default:
          return null
      }
    }

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

        {status && renderStatus()}

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

InputField.propTypes = {
  /**
   * The label for the field
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Whether to display validation errors
   */
  error: PropTypes.bool,

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
  type: PropTypes.oneOf([
    'checkbox',
    'color',
    'contenteditable',
    'date',
    'email',
    'hidden',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'search',
    'tel',
    'text',
    'textarea',
    'time',
    'url',
    'week'
  ]),

  /**
   * The placeholder for the field
   */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The ID for the field
   */
  id: PropTypes.string,

  /**
   * Mark the field as required and displays an asterisk next to the label
   */
  required: PropTypes.bool,

  /**
   * Validation errors
   */
  validations: PropTypes.array,

  styles: PropTypes.object
}

InputField.defaultProps = {
  type: 'text'
}

export default withStyles(styles)(InputField)
