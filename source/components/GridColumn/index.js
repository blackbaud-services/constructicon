import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'

const GridColumn = ({
  children,
  classNames
}) => (
  <div className={classNames.root}>
    {children}
  </div>
)

GridColumn.propTypes = {
  /**
  * The default size of the column in a 12 column grid
  */
  xs: PropTypes.number,

  /**
  * The size of the column in a 12 column grid at the `sm` breakpoint
  */
  sm: PropTypes.number,

  /**
  * The size of the column in a 12 column grid at the `md` breakpoint
  */
  md: PropTypes.number,

  /**
  * The size of the column in a 12 column grid at the `lg` breakpoint
  */
  lg: PropTypes.number,

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
  * The custom styles to be applied
  */
  styles: PropTypes.object
}

GridColumn.defaultProps = {
  xs: 12,
  borderColor: 'shade',
  styles: {}
}

export default withStyles(styles)(GridColumn)
