import React, { PropTypes } from 'react'
import Filter from '../filter'
import Result from '../Result'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Search = ({
  tag: Tag,
  classNames,
  results
}) => (
  <Tag className={classNames.root}>
    <Filter />
    { results && results.map((result, i) => (
      <Result
        {...result}
        key={i}
      />
    )) }
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
  results: PropTypes.array
}

Search.defaultProps = {
  tag: 'div',
  styles: {},
  results: []
}

export default withStyles(styles)(Search)
