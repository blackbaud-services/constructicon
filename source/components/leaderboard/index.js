import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Icon from '../icon'
import withStyles from '../with-styles'
import styles from './styles'

class Leaderboard extends Component {
  render () {
    const { classNames } = this.props

    return (
      <div className={`c11n-leaderboard ${classNames.root}`}>
        {this.renderLeaderboard()}
      </div>
    )
  }

  renderLeaderboard () {
    const { children, loading, error } = this.props

    if (loading) {
      return this.renderLoading()
    }

    if (error) {
      return this.renderError()
    }

    if (isEmpty(children)) {
      return this.renderEmpty()
    }

    return this.renderLeaders()
  }

  renderLoading () {
    return (
      <div className={this.props.classNames.state}>
        <Icon name='loading' size={2} spin />
      </div>
    )
  }

  renderError () {
    return (
      <div className={this.props.classNames.state}>
        <Icon name='warning' />
        {this.props.errorLabel}
      </div>
    )
  }

  renderEmpty () {
    return (
      <div className={this.props.classNames.state}>
        <Icon name='warning' />
        {this.props.emptyLabel}
      </div>
    )
  }

  renderLeaders () {
    const { children, classNames } = this.props

    return <ol className={classNames.leaders}>{children}</ol>
  }
}

Leaderboard.propTypes = {
  /**
   * An an array of leaderboard items for each leader
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),

  /**
   * If the results are currently loading
   */
  loading: PropTypes.bool,

  /**
   * Set the error message or set to true to show default message
   */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * Set the message to display if there are no results
   */
  emptyLabel: PropTypes.string,

  /**
   * Set the message to display if there is an error
   */
  errorLabel: PropTypes.string,

  /**
   * An object to specify how many columns to use at which breakpoints (e.g. { xs: 1, sm: 2, md: 3 })
   */
  columns: PropTypes.object,

  /**
   * The background color for the leaderboard
   */
  background: PropTypes.string,

  /**
   * The foreground color for the leaderboard
   */
  foreground: PropTypes.string,

  /**
   * Custom styles to be applied to root, leaders
   */
  styles: PropTypes.object
}

Leaderboard.defaultProps = {
  columns: {},
  styles: {},
  emptyLabel: 'No results found',
  errorLabel: 'There was an error loading the results'
}

export default withStyles(styles)(Leaderboard)
