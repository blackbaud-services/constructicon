import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from '../../lib/compose'
import onClickOutside from 'react-onclickoutside'
import isEmpty from 'lodash/isEmpty'
import withStyles from '../with-styles'
import styles from './styles'

import Filter from '../filter'
import Icon from '../icon'

class InputSearch extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.showMore = this.showMore.bind(this)

    this.state = {
      query: '',
      selected: -1,
      toShow: props.limit
    }
  }

  handleChange (query) {
    if (this.refs.results) this.refs.results.scrollTop = 0
    this.setState({ query }, this.sendQuery)
  }

  handleKeyDown (e) {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        return this.setSelectedItem(this.state.selected - 1)
      case 'ArrowDown':
        e.preventDefault()
        return this.setSelectedItem(this.state.selected + 1)
      case 'Enter':
        e.preventDefault()
        return this.confirmSelection()
      case 'Escape':
        e.preventDefault()
        return this.clearSelection()
      case 'Backspace':
        if (this.state.selected !== -1) {
          e.preventDefault()
          return this.clearSelection()
        } else {
          return null
        }
      default:
        return null
    }
  }

  handleClickOutside () {
    this.clearSelection()
  }

  sendQuery (query) {
    this.props.onSearch(this.state.query)
  }

  setSelectedItem (selected) {
    const { results } = this.props

    if (results.length) {
      const newSelectedIndex = selected < 0
        ? results.length - 1
        : selected >= results.length
          ? 0
          : selected

      this.setState({
        selected: newSelectedIndex
      })
    }
  }

  confirmSelection () {
    const { selected } = this.state
    const { onSelect, results } = this.props
    const selectedResult = results[selected]
    onSelect(selectedResult)
  }

  clearSelection () {
    this.setState({
      query: '',
      selected: -1,
      toShow: this.props.limit
    })
  }

  showMore () {
    const { toShow } = this.state
    const { limit } = this.props
    this.setState({
      toShow: toShow + limit
    })
  }

  render () {
    const {
      classNames,
      filter
    } = this.props

    const {
      query
    } = this.state

    return (
      <div className={classNames.root} onKeyDown={this.handleKeyDown}>
        <Filter onChange={this.handleChange} {...filter} />
        {query && (
          <div className={classNames.results} ref='results'>
            {this.renderResults()}
          </div>
        )}
      </div>
    )
  }

  renderResults () {
    const { toShow } = this.state

    const {
      classNames,
      emptyMessage,
      errorMessage,
      ResultComponent,
      results,
      showMore,
      status
    } = this.props

    if (status === 'fetching') {
      return (
        <div className={classNames.status}>
          <Icon name='loading' spin />
        </div>
      )
    }

    if (status === 'failed') {
      return (
        <div className={classNames.status}>
          <Icon name='warning' /> {errorMessage}
        </div>
      )
    }

    if (isEmpty(results)) {
      return (
        <div className={classNames.status}>
          <Icon name='warning' /> {emptyMessage}
        </div>
      )
    }

    return (
      <div>
        {results.slice(0, toShow).map((result, index) => (
          <ResultComponent {...result}
            key={index}
            isSelected={index === this.state.selected}
          />
        ))}
        {showMore && this.renderShowMore()}
      </div>
    )
  }

  renderShowMore () {
    const { classNames, results = [] } = this.props
    const { toShow } = this.state

    return results.length > toShow && (
      <div
        className={classNames.showMore}
        onClick={this.showMore}>
        Load More <Icon name='chevron' size={0.75} rotate={90} />
      </div>
    )
  }
}

InputSearch.propTypes = {
  /**
  * The message to display when no results are found
  */
  emptyMessage: PropTypes.string,

  /**
  * The message to display when there is an error
  */
  errorMessage: PropTypes.string,

  /**
  * The props to be passed onto the Filter component
  */
  filter: PropTypes.object,

  /**
  * The number of results to show
  */
  limit: PropTypes.number,

  /**
  * The function to call when the search is altered
  */
  onSearch: PropTypes.func.isRequired,

  /**
  * The function to call when a user selects an item
  */
  onSelect: PropTypes.func,

  /**
  * A component that is used to render each individual result
  */
  ResultComponent: PropTypes.func.isRequired,

  /**
  * The array of currently applicable results
  */
  results: PropTypes.array,

  /**
  * Enables a Show More button
  */
  showMore: PropTypes.bool,

  /**
  * The status of the searching
  */
  status: PropTypes.oneOf([ 'fetching', 'fetched', 'failed' ])
}

InputSearch.defaultProps = {
  emptyMessage: 'No results found',
  errorMessage: 'There was an unexpected error',
  limit: 5,
  onSelect: () => {},
  results: []
}

export default compose(
  withStyles(styles),
  onClickOutside
)(InputSearch)
