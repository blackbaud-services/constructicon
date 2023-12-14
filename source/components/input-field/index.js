import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import merge from 'lodash/merge'
import withStyles from '../with-styles'
import styles from './styles'
import { isBoolean } from '../../lib/form'
import { regularExpressions } from '../../lib/validators'
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
    this.state = {
      value: props.value,
      type: props.type
    }
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

    const value =
      isBoolean(type) || type === 'checkbox'
        ? event.target.checked
        : this.props.forceUppercase
        ? event.target.value.toUpperCase()
        : event.target.value

    this.setState({ value })

    return onChange && onChange(value)
  }

  handleBlur (event) {
    const { onBlur, type } = this.props
    const value =
      isBoolean(type) || type === 'checkbox'
        ? event.target.checked
        : event.target.value

    if (type === 'contenteditable') {
      return onBlur && onBlur(sanitizeHtml(this.state.value))
    }

    return onBlur && onBlur(value)
  }

  handlePhoneKeyDown (event) {
    const validKeys = [
      ' ',
      'Alt',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'Backspace',
      'Control',
      'Enter',
      'Escape',
      'Shift',
      'Tab'
    ]
    const isPhoneChar = regularExpressions.phone.test(event.key)
    const isValidKey = isPhoneChar || validKeys.indexOf(event.key) > -1

    if (!event.metaKey && !isValidKey) {
      event.preventDefault()
    }
  }

  handleNumberKeyDown (event) {
    const validKeys = [
      'Alt',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'Backspace',
      'Control',
      'Enter',
      'Escape',
      'Shift',
      'Tab'
    ]

    const isNumberChar = regularExpressions.numeric.test(event.key)
    const isValidKey =
      event.key === '.'
        ? event.target.value.indexOf('.') < 0
        : isNumberChar || validKeys.indexOf(event.key) > -1

    if (!event.metaKey && !isValidKey) {
      event.preventDefault()
    }
  }

  handleKeyDown (event) {
    const { onKeyDown, type } = this.props

    onKeyDown && onKeyDown(event)

    if (type === 'tel') this.handlePhoneKeyDown(event)
    if (type === 'number') this.handleNumberKeyDown(event)
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
    const { onChange, onPaste, type } = this.props

    onPaste && onPaste(event)

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
      maxLength,
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
      'initial',
      'invalid',
      'styles',
      'validators'
    ]
    const allowedProps = merge(
      omit(props, propsBlacklist),
      type === 'contenteditable' ? { html: value } : { value },
      type === 'number' ? { inputMode: 'numeric' } : {}
    )
    const Tag = this.getTag()
    const inputId = (id || name || '').split('.').join('-')
    const labelId = `label-${inputId}`

    const renderField = () => (
      <Tag
        ref={setRef}
        className={classNames.field}
        type={this.state.type}
        name={name}
        id={inputId}
        checked={
          isBoolean(type) || type === 'checkbox' ? Boolean(value) : undefined
        }
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        onPaste={this.handlePaste}
        required={required}
        aria-labelledby={labelId}
        maxLength={maxLength}
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

    const renderVisibilityToggle = () => {
      return (
        <button
          className={classNames.toggle}
          type='button'
          onClick={e => {
            e.preventDefault()
            this.setState({
              type: this.state.type === 'password' ? 'text' : 'password'
            })
          }}
        >
          {this.state.type === 'password' ? 'Show' : 'Hide'}
        </button>
      )
    }

    return (
      <div className={`c11n-input-field ${classNames.root}`}>
        {isBoolean(type) && renderField()}

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

        {!isBoolean(type) && renderField()}

        {['textarea', 'contenteditable'].indexOf(type) > -1 && !!maxLength && (
          <span
            className={classNames.remaining}
            data-hidden={maxLength - value.length > 99}
            data-warning={maxLength - value.length < 10}
          >
            {maxLength - value.length}
          </span>
        )}

        {status && renderStatus()}

        {type === 'password' && renderVisibilityToggle()}

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
