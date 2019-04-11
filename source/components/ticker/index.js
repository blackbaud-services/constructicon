import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles, { keyframes } from './styles'

const Ticker = ({ classNames, label, items = [] }) => (
  <div className={`c11n-ticker ${classNames.root}`}>
    <ul className={classNames.items}>
      {items.map((item, index) => (
        <li className={classNames.item} key={index}>
          {item}
        </li>
      ))}
    </ul>
    {label && <div className={classNames.label}>{label}</div>}
  </div>
)

Ticker.propTypes = {
  /**
   * The background color
   */
  background: PropTypes.string,

  /**
   * The color of the text
   */
  foreground: PropTypes.string,

  /**
   * Items to display in animated scroll
   */
  items: PropTypes.array.isRequired,

  /**
   * The label text
   */
  label: PropTypes.string,

  /**
   * The label background color
   */
  labelBackground: PropTypes.string,

  /**
   * The color of the label text
   */
  labelForeground: PropTypes.string,

  /**
   * Animation speed
   */
  speed: PropTypes.oneOf(['snail', 'slow', 'medium', 'fast']),

  /**
   * Custom styles to be applied
   */
  styles: PropTypes.object
}

Ticker.defaultProps = {
  background: 'shade',
  foreground: 'dark',
  labelBackground: 'primary',
  labelForeground: 'light',
  speed: 'medium',
  styles: {}
}

export default withStyles(styles, keyframes)(Ticker)
