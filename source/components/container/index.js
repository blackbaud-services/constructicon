import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

const Container = ({
  children,
  tag: Tag,
  classNames
}) => (
  <div className={classNames.outer}>
    <Tag className={classNames.root}>
      {children}
    </Tag>
  </div>
)

Container.propTypes = {
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
  * The max width of the container to be passed into our rhythm
  */
  width: PropTypes.number,

  /**
  * The internal padding to be applied
  */
  spacing: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),

  /**
  * Sets the min-height to the height of the viewport
  */
  fullHeight: PropTypes.bool,

  /**
  * The shadow to be applies to the container
  */
  shadow: PropTypes.oneOf(options.shadows),

  /**
  * The background color of the container
  */
  background: PropTypes.oneOf(options.colors),

  /**
  * The foreground color of the area
  */
  foreground: PropTypes.oneOf(options.colors),

  /**
  * The color of the area outside the container
  */
  outerColor: PropTypes.oneOf(options.colors),

  /**
  * The custom styles to be applied to the container
  */
  styles: PropTypes.object
}

Container.defaultProps = {
  tag: 'article',
  width: 40,
  spacing: 0,
  styles: {}
}

export default withStyles(styles)(Container)
