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
  * The custom styles to be applied
  */
  styles: PropTypes.object
}

GridColumn.defaultProps = {
  borderColor: 'shade',
  styles: {}
}

export default withStyles(styles)(GridColumn)
