import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import withStyles from '../with-styles'
import withToggle from '../with-toggle'
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
    const { debounce, onChange } = this.props

    return debounce
      ? this.debounce(onChange)
      : () => onChange(this.refs.field.value)
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
      expanded,
      toggled,
      classNames,
      autofocus
    } = this.props

    return (
      <div className={`c11n-search-form ${classNames.root}`}>
        <div className={classNames.form} onKeyDown={this.handleKeyDown}>
          <label className={classNames.field} id='label-search-form'>
            <span className={classNames.label}>{title}</span>
            <input
              ref='field'
              type='search'
              aria-labelledby='label-search-form'
              placeholder={placeholder}
              autoFocus={autofocus}
              onFocus={this.showForm}
              onChange={this.onChange()}
              className={classNames.input}
            />
          </label>
          <div className={classNames.cta}>
            <Button
              onClick={
                expanded
                  ? this.onChange()
                  : toggled
                    ? this.closeForm
                    : this.showForm
              }
              children={expanded ? buttonText : toggled ? 'Close' : buttonText}
              aria-label={
                expanded ? buttonText : toggled ? 'Close' : buttonText
              }
              {...button}
            />
          </div>
        </div>
        {children && <div className={classNames.results}>{children}</div>}
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
   * The button text
   */
  buttonText: PropTypes.string,

  /**
   * Autofocus the search input on form load (best for modals)
   */
  autofocus: PropTypes.bool,

  /**
   * Disable toggle functionality (best for modals)
   */
  expanded: PropTypes.bool,

  /**
   * Whether or note to debounce the onChange callback
   */
  debounce: PropTypes.bool,

  /**
   * Custom styles for the component
   */
  styles: PropTypes.object,

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
  buttonText: 'Search',
  autofocus: false,
  expanded: false,
  debounce: true,
  onChange: () => {}
}

export default compose(
  withToggle,
  withStyles(styles)
)(SearchForm)
