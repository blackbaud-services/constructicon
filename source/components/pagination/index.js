import React, { Component } from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'

export default class Pagination extends Component {
  constructor () {
    super(...arguments)

    this.state = {
      pageNumber: 0,
      allPages: this.paginate(this.props.toPaginate)
    }

    this.paginate = this.paginate.bind(this)
    this.handlePagintionClick = this.handlePaginationClick.bind(this)
  }

  componentWillReceiveProps ({ toPaginate }) {
    if (this.props.persistPage) {
      this.setState({
        allPages: this.paginate(toPaginate)
      })
    } else {
      this.setState({
        pageNumber: 0,
        allPages: this.paginate(toPaginate)
      })
    }
  }

  paginate (toPaginate) {
    const { max = 10 } = this.props
    return chunk(toPaginate, max)
  }

  handlePaginationClick (val) {
    const { allPages, pageNumber } = this.state
    const canNext = pageNumber + 1 < allPages.length
    const canPrev = pageNumber > 0

    const changePage = () =>
      this.setState({
        pageNumber: pageNumber + val
      })

    if (val > 0) {
      return canNext ? changePage : null
    } else {
      return canPrev ? changePage : null
    }
  }

  render () {
    const { allPages, pageNumber } = this.state

    if (allPages.length) {
      return (
        <div>
          {this.props.children({
            allPages,
            currentPage: allPages[pageNumber],
            numberOfPages: allPages.length,
            pageIndex: this.state.pageNumber,
            pageNumber: this.state.pageNumber + 1,
            pageOf: `Page ${this.state.pageNumber + 1} of ${allPages.length}`,
            isPaginated: allPages.length > 1,
            canNext: pageNumber + 1 < allPages.length,
            canPrev: pageNumber > 0,
            next: this.handlePaginationClick(+1),
            prev: this.handlePaginationClick(-1)
          })}
        </div>
      )
    } else return null
  }
}

Pagination.defaultProps = {
  max: 10
}

Pagination.propTypes = {
  /**
   * The array to be paginated
   */
  toPaginate: PropTypes.array.isRequired,

  /**
   * The max amount of items per page
   */
  max: PropTypes.number,

  /**
   * A render prop that gets called with the paginated data and methods to control it.
   */
  children: PropTypes.func.isRequired,

  /**
   * Prevents the page number being reset when toPaginate changes
   */
  persistPage: PropTypes.bool
}
