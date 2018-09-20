import React from 'react'
import PaginationLink from '../pagination-link'

export default props => {
  console.log(
    'The CarouselArrow component has been moved to the more reusable PaginationLink component. Support for importing from `constructicon/carousel-arrow` will be removed in version 2'
  )
  return <PaginationLink {...props} />
}
