import React, { Component, PropTypes } from 'react'
import Leader from './Leader'
import Icon from '../Icon'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

class Leaderboard extends Component {
  render () {
    const { classNames } = this.props

    return (
      <div className={classNames.root}>
        {this.renderLeaderboard()}
      </div>
    )
  }

  renderLeaderboard () {
    const {
      leaders,
      loading,
      error
    } = this.props

    if (loading) {
      return this.renderLoading()
    }

    if (error) {
      return this.renderError()
    }

    if (!leaders.length) {
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
        There was an error loading the results
      </div>
    )
  }

  renderEmpty () {
    return (
      <div className={this.props.classNames.state}>
        <Icon name='warning' />
        No results found
      </div>
    )
  }

  renderLeaders () {
    const {
      leaders,
      classNames
    } = this.props

    return (
      <ol className={classNames.leaders}>
        {leaders.map((leader, i) => (
          <Leader
            leader={leader}
            key={i}
          />
        ))}
      </ol>
    )
  }
}

Leaderboard.propTypes = {
  /**
  * The leaders to display on the leaderboard
  */
  leaders: PropTypes.array,

  /**
  * If the results are currently loading
  */
  loading: PropTypes.bool,

  /**
  * If there was an error loading the results
  */
  error: PropTypes.bool,

  /**
  * An object to specify how many columns to use at which breakpoints (e.g. { xs: 1, sm: 2, md: 3 })
  */
  columns: PropTypes.object,

  /**
  * The background color for the leaderboard
  */
  background: PropTypes.oneOf(options.colors),

  /**
  * The foreground color for the leaderboard
  */
  foreground: PropTypes.oneOf(options.colors),

  /**
  * Custom styles to be applied to root, leaders
  */
  styles: PropTypes.styles
}

Leaderboard.defaultProps = {
  leaders: [],
  columns: {},
  styles: {}
}

export default withStyles(styles)(Leaderboard)
