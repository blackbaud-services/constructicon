import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

const Flippy = ({
  front,
  back,
  color,
  classNames
}) => (
  <div className={classNames.root}>
    <div className={classNames.container}>
      <div className={`${classNames.wrapper} ${classNames.front}`}>
        {front}
      </div>
      <div className={`${classNames.wrapper} ${classNames.back}`}>
        {back}
      </div>
    </div>
  </div>
)

Flippy.propTypes = {
  /**
  * Content to appear by default
  */
  front: PropTypes.node.isRequired,

  /**
  * Content to appear on hover
  */
  back: PropTypes.node.isRequired,

  /**
  * The background color
  */
  background: PropTypes.oneOf(options.colors),

  /**
  * The color of the text
  */
  foreground: PropTypes.oneOf(options.colors),

  /**
  * The font for the text
  */
  font: PropTypes.oneOf(options.treatments),

  /**
  * The scale to be used for the font size
  */
  size: PropTypes.number,

  /**
  * The spacing to be applied
  */
  spacing: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),

  /**
  * Custom styles to be applied
  */
  styles: PropTypes.object
}

Flippy.defaultProps = {
  background: 'primary',
  foreground: 'light',
  font: 'body',
  size: 2,
  spacing: { x: 1, y: 1 },
  styles: {}
}

export default withStyles(styles)(Flippy)
