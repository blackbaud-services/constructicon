import React, { Component, PropTypes } from 'react'
import Icon from '../Icon'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

class Filter extends Component {
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

  render () {
    const {
      onChange,
      placeholder,
      classNames,
      styles
    } = this.props

    return (
      <form className={classNames.root}>
        <Icon
          name='search'
          size={1.25}
          styles={styles.icon}
        />
        <input
          ref='field'
          type='text'
          placeholder={placeholder}
          onChange={onChange && this.debounce(onChange)}
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
  * The placeholder for the input
  */
  placeholder: PropTypes.string,

  /**
  * The background color for the leaderboard
  */
  background: PropTypes.oneOf(options.colors),

  /**
  * The foreground color for the leaderboard
  */
  foreground: PropTypes.oneOf(options.colors),

  /**
  * Custom styles for the component
  */
  styles: PropTypes.object
}

Filter.defaultProps = {
  placeholder: 'Filter results',
  styles: {}
}

export default withStyles(styles)(Filter)
