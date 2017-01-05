import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

/**
* Section of content, used to contain and pad sections of content.
*/
const Section = ({
  children,
  tag: Tag,
  classNames
}) => (
  <Tag className={classNames.root}>
    {children}
  </Tag>
)

Section.propTypes = {
  /**
  * The content
  */
  children: PropTypes.any.isRequired,

  /**
  * The tag or component to be used e.g. div, section
  */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),

  /**
  * The background color of the button -
  */
  background: PropTypes.oneOf(options.colors),

  /**
  * The color of the text -
  */
  foreground: PropTypes.oneOf(options.colors),

  /**
  * The color of the border
  */
  borderColor: PropTypes.oneOf(options.colors),

  /**
  * The width of the border
  */
  borderWidth: PropTypes.number,

  /**
  * The radius of the button -
  */
  radius: PropTypes.oneOf(options.radiuses),

  /**
  * The padding to be applied between buttons (rhythm)
  */
  padding: PropTypes.object,

  /**
  * The custom styles to be applied to the container
  */
  styles: PropTypes.object
}

Section.defaultProps = {
  tag: 'section',
  background: 'light',
  foreground: 'dark',
  borderColor: 'shade',
  padding: {x: 1, y: 1},
  styles: {}
}

export default withStyles(styles)(Section)
