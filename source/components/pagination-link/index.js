import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

import Icon from '../icon'

const labels = {
  prev: 'Previous',
  next: 'Next'
}

const PaginationLink = ({
  classNames,
  currentSlide,
  direction,
  disabled,
  icon,
  onClick,
  size,
  slideCount,
  styles,
  ...props
}) => (
  <button
    aria-label={labels[direction]}
    type='button'
    role='button'
    disabled={disabled}
    onClick={onClick}
    onKeyDown={onClick}
    className={`c11n-pagination-link ${classNames.root}`}
    {...props}
  >
    <Icon name={icon} rotate={direction === 'prev' ? 180 : 0} size={size} />
  </button>
)

PaginationLink.propTypes = {
  /**
   * The current slide if in a Carousel
   */
  currentSlide: PropTypes.number,

  /**
   * The direction of the arrow
   */
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,

  /**
   * Whether or not the link is disabled
   */
  disabled: PropTypes.bool,

  /**
   * The name of the icon e.g. chevron, heart etc.
   */
  icon: PropTypes.string,

  /**
   * onClick handler
   */
  onClick: PropTypes.func,

  /**
   * The icon size
   */
  size: PropTypes.number,

  /**
   * The total number of slides if in a Carousel
   */
  slideCount: PropTypes.number
}

PaginationLink.defaultProps = {
  direction: 'next',
  icon: 'chevron',
  size: 1
}

export default withStyles(styles)(PaginationLink)
