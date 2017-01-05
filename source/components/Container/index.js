import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

/**
* Container for containing outer site content. This is used to wrap and contain
* the site's content
*/
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
  * The shadow to be applies to the container
  */
  shadow: PropTypes.oneOf(options.shadows),

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
  outerColor: 'shade',
  styles: {}
}

export default withStyles(styles)(Container)
