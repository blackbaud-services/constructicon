import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import withStyles from '../with-styles'
import styles from './styles'

class Filter extends Component {
  onChange () {
    const { onChange, debounce } = this.props

    if (onChange) {
      if (debounce) {
        return this.debounce(onChange)
      } else {
        return this.noDebounce(onChange)
      }
    }
  }

  debounce (callback, delay = 500) {
    let timeout
    return () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        const val = this.refs.field.value
        callback(val)
      }, delay)
    }
  }

  noDebounce (callback) {
    return () => {
      const val = this.refs.field.value
      callback(val)
    }
  }

  render () {
    const { placeholder, classNames, onSubmit, styles } = this.props

    return (
      <form
        action='/'
        onSubmit={onSubmit}
        className={`c11n-filter ${classNames.root}`}
      >
        <Icon name='search' size={1.25} styles={styles.icon} />
        <input
          ref='field'
          type='search'
          aria-label={placeholder}
          placeholder={placeholder}
          onChange={this.onChange()}
          autoComplete='off'
          className={classNames.input}
        />
      </form>
    )
  }
}

Filter.propTypes = {
  /**
   * The onChange event handler to be fired
   */
  onChange: PropTypes.func.isRequired,

  /**
   * The onSubmit event handler
   */
  onSubmit: PropTypes.func,

  /**
   * The placeholder for the input
   */
  placeholder: PropTypes.string,

  /**
   * The background color for the leaderboard
   */
  background: PropTypes.string,

  /**
   * The foreground color for the leaderboard
   */
  foreground: PropTypes.string,

  /**
   * Custom styles for the component
   */
  styles: PropTypes.object,

  /**
   * Whether or not to debounce the onChange callback
   */
  debounce: PropTypes.bool
}

Filter.defaultProps = {
  placeholder: 'Filter results',
  styles: {},
  debounce: true,
  onSubmit: e => e.preventDefault()
}

export default withStyles(styles)(Filter)
