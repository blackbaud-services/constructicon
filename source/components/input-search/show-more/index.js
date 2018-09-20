import React from 'react'
import Icon from '../../icon'

const ShowMore = ({ className, onClick }) => (
  <div className={className.showMore} onClick={onClick}>
    <span>Load More </span>
    <Icon name='chevron' rotate={90} size={0.75} />
  </div>
)

export default ShowMore
