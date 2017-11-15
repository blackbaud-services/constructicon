import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../icon'

const labels = {
  prev: 'Previous',
  next: 'Next'
}

const Arrow = ({
  currentSlide,
  slideCount,
  direction,
  ...props
}) => (
  <button aria-label={labels[direction]} {...props}>
    <Icon name='chevron' rotate={direction === 'prev' ? 180 : 0} />
  </button>
)

Arrow.propTypes = {
  /**
  * The direction of the arrow
  */
  direction: PropTypes.oneOf([
    'prev',
    'next'
  ]).isRequired
}

Arrow.defaultProps = {
  direction: 'next'
}

export default Arrow
