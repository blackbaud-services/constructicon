import React from 'react'
import isEmpty from 'lodash/isEmpty'

import Icon from '../../icon'
import InputSearchResult from '../../input-search-result'

const Results = ({
  active,
  children,
  classNames,
  emptyMessage,
  errorMessage,
  ResultComponent = DefaultResultComponent,
  results,
  selectItem,
  status,
  toShow
}) => {
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
    <ol className={classNames.list}>
      {results.slice(0, toShow).map((result, index) => (
        <li key={index} onClick={() => selectItem(index, true)}>
          <ResultComponent isActive={index === active} result={result} />
        </li>
      ))}
      {children}
    </ol>
  )
}

const DefaultResultComponent = ({ isActive, result }) => (
  <InputSearchResult isActive={isActive}>{result.label}</InputSearchResult>
)

export default Results
