import React, { PropTypes } from 'react'
import Icon from '../icon'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Loading = ({
  classNames
}) => (
  <div className={classNames.state}>
    <Icon name='loading' size={2} spin />
  </div>
)

const Error = ({
  classNames,
  errorLabel
}) => (
  <div className={classNames.state}>
    <Icon name='warning' />
    {errorLabel}
  </div>
)

const Empty = ({
  classNames,
  emptyLabel
}) => (
  <div className={classNames.state}>
    <Icon name='warning' />
    {emptyLabel}
  </div>
)

const SearchResults = ({
  loading,
  error,
  empty,
  classNames,
  children,
  ...props
}) => (
  <div className={classNames.wrapper}>
    { !loading && !error && !empty ? (
      <ul className={classNames.results} >
        { children }
      </ul>
    ) : null }

    { loading && (
      <Loading
        classNames={classNames}
      />
    ) }

    { error && (
      <Error
        classNames={classNames}
        errorLabel={props.errorLabel}
      />
    ) }

    { !loading && !error && empty && (
      <Empty
        classNames={classNames}
        emptyLabel={props.emptyLabel}
      />
    ) }
  </div>
)

SearchResults.propTypes = {
  /**
  * Custom styles to be added to the element
  */
  styles: PropTypes.object,

  /**
  * If the results are currently loading
  */
  loading: PropTypes.bool,

  /**
  * If the results return an empty set
  */
  empty: PropTypes.bool,

  /**
  * Set the error message or set to true to show default message
  */
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),

  /**
  * Set the message to display if there are no results
  */
  emptyLabel: PropTypes.string,

  /**
  * Set the message to display if there is an error
  */
  errorLabel: PropTypes.string
}

SearchResults.defaultProps = {
  styles: {},
  emptyLabel: 'No results found',
  errorLabel: 'There was an error loading the results'
}

export default withStyles(styles)(SearchResults)
