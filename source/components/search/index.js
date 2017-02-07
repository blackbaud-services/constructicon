import React, { PropTypes } from 'react'
import Icon from '../icon'
import Filter from '../filter'
import Result from '../result'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Search = ({
  tag: Tag,
  classNames,
  results,
  status,
  onChange
}) => (
  <Tag className={classNames.wrapper}>
    <Filter onChange={onChange} />
    { !status && results.length ? (
      <ul>
        { results.map((result, i) => (
          <Result
            {...result}
            key={i}
          />
        )) }
      </ul>
    ) : null }

    { status === 'loading' && (
      <div className={classNames.loading}>
        <Icon name='loading' spin aria-label='Loading results' />
      </div>
    ) }

    { status === 'noResult' && (
      <p className={classNames.status}>No results found.</p>
    ) }

    { status === 'error' && (
      <p className={classNames.status}>Something went wrong!</p>
    ) }
  </Tag>
)

Search.propTypes = {
  /**
  * The tag to be used for the containing element
  */
  tag: PropTypes.string,

  /**
  * Custom styles to be added to the element
  */
  styles: PropTypes.object,

  /**
  * Results to be listed
  */
  results: PropTypes.array,

  /**
  * Status of the search.
  */
  status: PropTypes.oneOf([
    'loading',
    'noResult',
    'error'
  ]),

  /**
  * The onChange event handler to be fired
  */
  onChange: PropTypes.func.isRequired
}

Search.defaultProps = {
  tag: 'div',
  styles: {},
  results: []
}

export default withStyles(styles)(Search)
