import React, { Component } from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import isEmpty from 'lodash/isEmpty'
import Icon from '../icon'
import compose from '../../lib/compose'
import withBreakpoints from '../with-breakpoints'
import withStyles from '../with-styles'
import styles from './styles'

class Leaderboard extends Component {
  constructor () {
    super()
    this.state = {}
    this.setMaxHeight = this.setMaxHeight.bind(this)
  }

  componentDidMount () {
    this.setMaxHeight()
  }

  componentDidUpdate (prevProps) {
    if (this.props.breakpoints.current !== prevProps.breakpoints.current) {
      this.setMaxHeight()
    }
  }

  setMaxHeight () {
    const { children } = this.props

    if (children && children.length > 1) {
      const columnSize = Math.ceil(
        children.length / this.getCurrentColumnCount()
      )
      const childHeights = Array.prototype.map.call(
        this.refs.list.children,
        child => child.clientHeight
      )
      const columnHeights = chunk(childHeights, columnSize)
        .map(column => column.reduce((acc, cell) => acc + cell, 0))
        .sort((a, b) => b - a)

      this.setState({
        style: { maxHeight: columnHeights[0] }
      })
    }
  }

  getCurrentColumnCount () {
    const { breakpoints, columns = {} } = this.props
    const fullWidth = columns.xs || 1

    switch (breakpoints.current) {
      case 'xl':
        return columns.xl || columns.lg || columns.md || columns.sm || fullWidth
      case 'lg':
        return columns.lg || columns.md || columns.sm || fullWidth
      case 'md':
        return columns.md || columns.sm || fullWidth
      case 'sm':
        return columns.sm || fullWidth
      default:
        return fullWidth
    }
  }

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
    const { children, classNames, tag: Tag } = this.props

    if (children && children.length > 1) {
      return (
        <ol ref='list' className={classNames.leaders} {...this.state}>
          {children.map((child, key) => (
            <li className={classNames.cell} key={key}>
              {child}
            </li>
          ))}
        </ol>
      )
    }

    return <Tag className={classNames.leaders}>{children}</Tag>
  }
}

Leaderboard.propTypes = {
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
   * The tag or component to be used for the root element
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),

  /**
   * Custom styles to be applied to root, leaders
   */
  styles: PropTypes.object
}

Leaderboard.defaultProps = {
  columns: {},
  styles: {},
  emptyLabel: 'No results found',
  errorLabel: 'There was an error loading the results',
  tag: 'div'
}

export default compose(
  withBreakpoints,
  withStyles(styles)
)(Leaderboard)
