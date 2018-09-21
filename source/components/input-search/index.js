import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from '../../lib/compose'
import onClickOutside from 'react-onclickoutside'
import debounce from 'lodash/debounce'
import withStyles from '../with-styles'
import styles from './styles'

import Icon from '../icon'
import InputValidations from '../input-validations'
import Label from '../label'
import Results from './results'

class InputSearch extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.showMore = this.showMore.bind(this)
    this.clearSelection = this.clearSelection.bind(this)
    this.setActiveItem = this.setActiveItem.bind(this)

    if (props.debounce) {
      this.handleChange = debounce(this.handleChange, props.debounce)
    }

    this.state = {
      query: '',
      active: -1,
      toShow: props.limit
    }
  }

  handleChange (e) {
    const query = e.target.value
    if (this.refs.results) this.refs.results.scrollTop = 0
    this.setState({ query }, this.sendQuery)
  }

  handleKeyDown (e) {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        return this.setActiveItem(this.state.active - 1)
      case 'ArrowDown':
        e.preventDefault()
        return this.setActiveItem(this.state.active + 1)
      case 'Enter':
        e.preventDefault()
        return this.confirmSelection()
      case 'Escape':
        e.preventDefault()
        if (this.props.value) {
          return this.clearSelection()
        } else {
          return this.clearActive()
        }
      case 'Backspace':
        if (this.props.value) {
          e.preventDefault()
          return this.clearSelection()
        } else if (this.state.active !== -1) {
          e.preventDefault()
          return this.clearActive()
        } else {
          return null
        }
      default:
        return null
    }
  }

  handleClickOutside () {
    this.props.closeOnClickOutside && this.clearActive()
  }

  sendQuery (query) {
    this.props.onSearch(this.state.query)
  }

  setActiveItem (newIndex, selectItem) {
    const { results } = this.props

    if (results.length) {
      const isLast = newIndex < 0
      const isFirst = newIndex >= results.length
      const active = isLast ? results.length - 1 : isFirst ? 0 : newIndex

      const resultsEl = this.refs.results
      const selectedEl = resultsEl.querySelector(`[data-selected="${active}"]`)

      resultsEl.scrollTop = selectedEl && selectedEl.offsetTop
      this.setState({ active }, selectItem && this.confirmSelection)
    }
  }

  confirmSelection () {
    const { active } = this.state
    const { onChange, results } = this.props
    const selectedResult = results[active]

    onChange(selectedResult)
    this.clearActive()
  }

  clearActive () {
    this.setState({
      query: '',
      active: -1,
      toShow: this.props.limit
    })
  }

  clearSelection () {
    this.props.onChange()
    this.refs.input.focus()
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
      autoComplete,
      autoFocus,
      classNames,
      emptyMessage,
      error,
      errorMessage,
      icon,
      id,
      label,
      name,
      onBlur,
      placeholder,
      readOnly,
      required,
      ResultComponent,
      results,
      showMore,
      status,
      styles,
      type,
      validations,
      value,
      valueFormatter
    } = this.props

    const { active, query, toShow } = this.state

    const inputId = id || name
    const labelId = `label-${inputId}`

    return (
      <div
        className={`c11n-input-search ${classNames.root}`}
        onKeyDown={this.handleKeyDown}
      >
        {label && (
          <Label
            id={labelId}
            inputId={inputId}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            styles={{
              root: styles.label,
              required: styles.required
            }}
          >
            {label}
          </Label>
        )}
        <div className={classNames.fieldWrapper}>
          <input
            aria-labelledby={labelId}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            className={classNames.field}
            type={type}
            id={inputId}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly || !!value}
            ref='input'
            required={required}
            onChange={e => {
              e.persist && e.persist()
              this.handleChange(e)
            }}
            onBlur={e => onBlur && onBlur(e.target.value)}
          />
          {value ? (
            <div onClick={this.clearSelection}>
              <div className={classNames.selected}>{valueFormatter(value)}</div>
              <div className={classNames.icon}>
                <Icon name='close' />
              </div>
            </div>
          ) : (
            icon && (
              <div className={classNames.icon}>
                <Icon name={icon} />
              </div>
            )
          )}
          {query && (
            <div className={classNames.results} ref='results'>
              <Results
                active={active}
                classNames={classNames}
                emptyMessage={emptyMessage}
                errorMessage={errorMessage}
                ResultComponent={ResultComponent}
                results={results}
                selectItem={this.setActiveItem}
                status={status}
                toShow={toShow}
              >
                {showMore &&
                  results.length > toShow && (
                  <button
                    type='button'
                    className={classNames.showMore}
                    onClick={this.showMore}
                  >
                    <span>Load More</span>{' '}
                    <Icon name='chevron' rotate={90} size={0.75} />
                  </button>
                )}
              </Results>
            </div>
          )}
        </div>
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

InputSearch.propTypes = {
  /**
   * The length of time to debounce (false to disable debounce)
   */
  debounce: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  /**
   * The message to display when no results are found
   */
  emptyMessage: PropTypes.string,

  /**
   * The message to display when there is an error
   */
  errorMessage: PropTypes.string,

  /**
   * If the field is in an error state
   */
  error: PropTypes.bool,

  /**
   * The icon to display on the right of the field (false to hide)
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /**
   * The ID of the input field
   */
  id: PropTypes.string,

  /**
   * The label of the input field
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The number of results to show
   */
  limit: PropTypes.number,

  /**
   * The name of the input
   */
  name: PropTypes.string,

  /**
   * The function to call when a user selects an item
   */
  onChange: PropTypes.func,

  /**
   * The function to call when a user blurs the input
   */
  onBlur: PropTypes.func,

  /**
   * The function to call when the search is altered
   */
  onSearch: PropTypes.func.isRequired,

  /**
   * A component that is used to render each individual result
   */
  ResultComponent: PropTypes.func,

  /**
   * The array of currently applicable results
   */
  results: PropTypes.array,

  /**
   * Whether the field is required or not
   */
  required: PropTypes.bool,

  /**
   * The currently selected value (useful if your values are objects with various keys e.g. id, label)
   */
  value: PropTypes.any,

  /**
   * A function to format the value to display on the label
   */
  valueFormatter: PropTypes.func,

  /**
   * Enables a Show More button
   */
  showMore: PropTypes.bool,

  /**
   * The status of the searching
   */
  status: PropTypes.oneOf(['fetching', 'fetched', 'failed']),

  /**
   * The type of the search input field
   */
  type: PropTypes.string,

  /**
   * An array of validation messages to display
   */
  validations: PropTypes.array,

  /**
   * The autocomplete value for the field
   */
  autoComplete: PropTypes.string,

  /**
   * The autofocus value for the field
   */
  autoFocus: PropTypes.bool,

  /**
   * The autofocus value for the field
   */
  closeOnClickOutside: PropTypes.bool
}

InputSearch.defaultProps = {
  autoComplete: 'off',
  closeOnClickOutside: true,
  debounce: 500,
  emptyMessage: 'No results found',
  errorMessage: 'There was an unexpected error',
  icon: 'search',
  limit: 5,
  name: 'search',
  results: [],
  status: 'fetched',
  type: 'search',
  valueFormatter: value => value
}

export default compose(
  withStyles(styles),
  onClickOutside
)(InputSearch)
