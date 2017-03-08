import React, { Component, PropTypes } from 'react'
import Button from '../button'
import { withStyles } from '../../lib/css'
import toggle from '../../lib/toggle'
import compose from '../../lib/compose'
import styles from './styles'

class SearchForm extends Component {
  constructor () {
    super()
    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  showForm () {
    this.props.onToggleOn()
    this.refs.field.focus()
  }

  closeForm () {
    this.refs.field.value = ''
    this.props.onToggleOff()
    this.props.onChange()
  }

  handleKeyDown (e) {
    if (e.key === 'Escape') {
      this.closeForm()
    }
  }

  onChange () {
    const {
      debounce,
      onChange
    } = this.props

    return debounce ? this.debounce(onChange) : () => onChange(this.refs.field.value)
  }

  debounce (callback, delay = 500) {
    let timeout
    return () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        callback(this.refs.field.value)
      }, delay)
    }
  }

  render () {
    const {
      button,
      buttonText,
      children,
      placeholder,
      title,
      toggled,
      classNames
    } = this.props

    return (
      <div>
        <div className={classNames.form} onKeyDown={this.handleKeyDown}>
          <label className={classNames.field}>
            <div className={classNames.label}>{title}</div>
            <input
              ref='field'
              type='text'
              placeholder={placeholder}
              onFocus={this.showForm}
              onChange={this.onChange()}
              className={classNames.input}
            />
          </label>
          <div className={classNames.cta}>
            <Button
              onClick={toggled ? this.closeForm : this.showForm}
              children={toggled ? 'Close' : buttonText}
              {...button}
            />
          </div>
        </div>
        {children && (
          <div className={classNames.results}>
            {children}
          </div>
        )}
      </div>
    )
  }
}

SearchForm.propTypes = {
  /**
  * The onChange event handler to be fired
  */
  onChange: PropTypes.func.isRequired,

  /**
  * The title for the section
  */
  title: PropTypes.string,

  /**
  * The placeholder for the input
  */
  placeholder: PropTypes.string,

  /**
  * Custom styles for the component
  */
  styles: PropTypes.object,

  /**
  * Whether or note to debounce the onChange callback
  */
  debounce: PropTypes.bool,

  /**
  * The button text
  */
  buttonText: PropTypes.string,

  /**
  * Props to be passed to the Button component
  */
  button: PropTypes.object,

  /**
  * To be displayed under the field, usually SearchResult(s)
  */
  children: PropTypes.any
}

SearchForm.defaultProps = {
  title: 'Looking for someone?',
  placeholder: 'Find a fundraiser',
  onChange: () => {},
  buttonText: 'Search',
  debounce: true
}

export default compose(
  toggle,
  withStyles(styles)
)(SearchForm)
