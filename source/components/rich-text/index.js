import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import styles from './styles'

const RichText = ({
  children,
  tag: Tag,
  classNames
}) => {
  if (!children) {
    return null
  }

  return (
    <Tag className={classNames.root}>
      {
        typeof children === 'string'
          ? <span dangerouslySetInnerHTML={{ __html: children }} />
          : children
      }
    </Tag>
  )
}

RichText.propTypes = {
  /**
  * The html to be structured
  */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),

  /**
  * The tag to be used for the containing element
  */
  tag: PropTypes.string,

  /**
  * Custom styles to be added to the element
  */
  styles: PropTypes.object
}

RichText.defaultProps = {
  tag: 'div',
  styles: {}
}

export default withStyles(styles)(RichText)
