import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import styles from './styles'
import * as icons from './icons'

const Icon = ({
  name,
  paths,
  classNames
}) => {
  const iconPaths = name ? icons[name] : paths

  return (
    <svg className={classNames.root} viewBox='0 0 32 32'>
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
  * The paths of a custom icon
  */
  paths: PropTypes.array,

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
  paths: [],
  size: 1,
  color: 'currentColor',
  spin: false,
  rotate: 0,
  styles: {}
}

export default withStyles(styles)(Icon)
