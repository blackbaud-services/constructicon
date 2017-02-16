import React, { PropTypes } from 'react'
import Slider from 'react-slick'
import compose from '../../lib/compose'
import { withStyles } from '../../lib/css'
import styles from './styles'

import Icon from '../icon'

const Carousel = ({
  children,
  classNames,
  ...props
}) => {
  return (
    <div className={classNames.carousel}>
      <Slider
        nextArrow={<div><Icon name='chevron' /></div>}
        prevArrow={<div><Icon name='chevron' rotate={180} /></div>}
        {...props}>
        {children}
      </Slider>
    </div>
  )
}

Carousel.propTypes = {
  /**
  * The content of the Carousel
  */
  children: PropTypes.any.isRequired,

  /**
  * Display prev/next navigation
  */
  arrows: PropTypes.bool,

  /**
  * Display pagination navigation
  */
  dots: PropTypes.bool,

  /**
  * Toggle autoplay
  */
  autoplay: PropTypes.bool,

  /**
  * Custom styles be applied { carousel }
  */
  styles: PropTypes.object
}

Carousel.defaultProps = {
  arrows: true,
  dots: false,
  autoplay: false,
  styles: {}
}

export default compose(
  withStyles(styles)
)(Carousel)
