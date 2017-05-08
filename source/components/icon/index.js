import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import styles from './styles'
import * as icons from './icons'

const Icon = ({
  name,
  paths,
  viewBox,
  classNames
}) => {
  const iconPaths = name ? icons[name] : paths

  return (
    <svg className={classNames.root} viewBox={`0 0 ${viewBox} ${viewBox}`}>
      {iconPaths && iconPaths.map((pathProps, i) => (
        <path {...pathProps} key={i} />
      ))}
    </svg>
  )
}

Icon.propTypes = {
  /**
  * The name of the icon e.g. chevron, facebook etc.
  */
  name: PropTypes.string,

  /**
  * The color of the icon
  */
  color: PropTypes.string,

  /**
  * The size of the icon in ems
  */
  size: PropTypes.number,

  /**
  * The paths of a custom icon
  */
  paths: PropTypes.array,

  /**
  * Rotate the icon a certain number of degrees
  */
  rotate: PropTypes.number,

  /**
  * Make the icon spin
  */
  spin: PropTypes.bool,

  /**
  * Custom viewbox sizing
  */
  viewBox: PropTypes.number,

  /**
  * Add custom styles to the icon
  */
  styles: PropTypes.object
}

Icon.defaultProps = {
  color: 'currentColor',
  paths: [],
  rotate: 0,
  size: 1,
  spin: false,
  styles: {},
  viewBox: 32
}

export default withStyles(styles)(Icon)
