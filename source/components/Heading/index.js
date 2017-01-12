import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Heading = ({
  children,
  tag: Tag,
  id,
  classNames
}) => (
  <Tag id={id} className={classNames.root}>
    {children}
  </Tag>
)

Heading.propTypes = {
  /**
  * The html to be structured
  */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,

  /**
  * The tag to be used for the containing element
  */
  tag: PropTypes.string,

  /**
  * The ID attribute be added to the element (useful for navigation)
  */
  id: PropTypes.string,

  /**
  * Custom styles to be added to the element
  */
  styles: PropTypes.object
}

Heading.defaultProps = {
  tag: 'h2',
  styles: {}
}

export default withStyles(styles)(Heading)
