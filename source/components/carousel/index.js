import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash/pick'
import Slider from 'react-slick'
import compose from '../../lib/compose'
import withStyles from '../with-styles'
import styles from './styles'

import Arrow from '../pagination-link'

const Carousel = ({ children, classNames, ...props }) => {
  const propsWhitelist = [
    'children',
    'styles',
    'accessibility',
    'adaptiveHeight',
    'afterChange',
    'arrows',
    'autoplay',
    'autoplaySpeed',
    'beforeChange',
    'centerMode',
    'dots',
    'dotsClass',
    'draggable',
    'easing',
    'fade',
    'focusOnSelect',
    'infinite',
    'initialSlide',
    'lazyLoad',
    'nextArrow',
    'pauseOnHover',
    'prevArrow',
    'responsive',
    'rtl',
    'slickGoTo',
    'slide',
    'slidesToScroll',
    'slidesToShow',
    'speed',
    'swipe',
    'swipeToSlide',
    'touchMove',
    'touchThreshold',
    'useCSS',
    'variableWidth',
    'vertical'
  ]

  const allowedProps = pick(props, propsWhitelist)

  return (
    <div className={`c11n-carousel ${classNames.root}`}>
      <Slider
        prevArrow={<Arrow direction='prev' />}
        nextArrow={<Arrow direction='next' />}
        {...allowedProps}
      >
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
   * Custom styles be applied { carousel }
   */
  styles: PropTypes.object,

  /**
   * Slick slider settings
   */
  accessibility: PropTypes.bool,
  adaptiveHeight: PropTypes.bool,
  afterChange: PropTypes.func,
  arrows: PropTypes.bool,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  beforeChange: PropTypes.func,
  centerMode: PropTypes.bool,
  dots: PropTypes.bool,
  dotsClass: PropTypes.string,
  draggable: PropTypes.bool,
  easing: PropTypes.string,
  fade: PropTypes.bool,
  focusOnSelect: PropTypes.bool,
  infinite: PropTypes.bool,
  initialSlide: PropTypes.number,
  lazyLoad: PropTypes.bool,
  nextArrow: PropTypes.element,
  pauseOnHover: PropTypes.bool,
  prevArrow: PropTypes.element,
  responsive: PropTypes.array,
  rtl: PropTypes.bool,
  slickGoTo: PropTypes.func,
  slide: PropTypes.string,
  slidesToScroll: PropTypes.number,
  slidesToShow: PropTypes.number,
  speed: PropTypes.number,
  swipe: PropTypes.bool,
  swipeToSlide: PropTypes.bool,
  touchMove: PropTypes.bool,
  touchThreshold: PropTypes.number,
  useCSS: PropTypes.bool,
  variableWidth: PropTypes.bool,
  vertical: PropTypes.bool
}

Carousel.defaultProps = {
  arrows: true,
  dots: false,
  autoplay: false,
  styles: {}
}

export default compose(withStyles(styles))(Carousel)
