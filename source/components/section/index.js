import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Section = ({
  children,
  tag: Tag,
  classNames
}) => {
  if (!children) {
    return null
  }

  return (
    <Tag className={classNames.root}>
      {children}
    </Tag>
  )
}

Section.propTypes = {
  /**
  * The content
  */
  children: PropTypes.any,

  /**
  * The tag or component to be used e.g. div, section
  */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),

  /**
  * The background color of the section -
  */
  background: PropTypes.string,

  /**
  * The color of the text -
  */
  foreground: PropTypes.string,

  /**
  * The color of the border
  */
  borderColor: PropTypes.string,

  /**
  * The width of the border
  */
  borderWidth: PropTypes.number,

  /**
  * The radius of the section -
  */
  radius: PropTypes.string,

  /**
  * The spacing to be applied
  */
  spacing: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),

  /**
  * The custom styles to be applied to the section
  */
  styles: PropTypes.object
}

Section.defaultProps = {
  tag: 'section',
  borderColor: 'shade',
  spacing: {x: 1, y: 1},
  styles: {}
}

export default withStyles(styles)(Section)
