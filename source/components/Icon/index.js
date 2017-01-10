import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'
import * as icons from './icons'

const Icon = ({
  name,
  classNames
}) => (
  <svg className={classNames.root} viewBox='0 0 32 32'>
    {icons[name] && icons[name].map((pathProps, i) => (
      <path {...pathProps} key={i} />
    ))}
  </svg>
)

Icon.propTypes = {
  /**
  * The name of the icon e.g. chevron, facebook etc.
  */
  name: PropTypes.string.isRequired,

  /**
  * The size of the icon in ems
  */
  size: PropTypes.number,

  /**
  * The color of the icon
  */
  color: PropTypes.string,

  /**
  * Make the icon spin
  */
  spin: PropTypes.bool,

  /**
  * Rotate the icon a certain number of degrees
  */
  rotate: PropTypes.number,

  /**
  * Add custom styles to the icon
  */
  styles: PropTypes.object
}

Icon.defaultProps = {
  size: 1,
  color: 'currentColor',
  spin: false,
  rotate: 0,
  styles: {}
}

export default withStyles(styles)(Icon)
