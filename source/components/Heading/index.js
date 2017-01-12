import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Heading = ({
  children,
  tag: Tag,
  classNames
}) => (
  <Tag className={classNames.root}>
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
  * Custom styles to be added to the element
  */
  styles: PropTypes.object
}

Heading.defaultProps = {
  tag: 'h2',
  styles: {}
}

export default withStyles(styles)(Heading)
