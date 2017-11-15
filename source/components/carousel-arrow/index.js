import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'

const labels = {
  prev: 'Previous',
  next: 'Next'
}

const CarouselArrow = ({
  currentSlide,
  slideCount,
  direction,
  ...props
}) => (
  <button aria-label={labels[direction]} {...props}>
    <Icon name='chevron' rotate={direction === 'prev' ? 180 : 0} />
  </button>
)

CarouselArrow.propTypes = {
  /**
  * The direction of the arrow
  */
  direction: PropTypes.oneOf([
    'prev',
    'next'
  ]).isRequired
}

CarouselArrow.defaultProps = {
  direction: 'next'
}

export default CarouselArrow
