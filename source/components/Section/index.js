import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

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
  * The background color of the section -
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
  * The radius of the section -
  */
  radius: PropTypes.oneOf(options.radiuses),

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
