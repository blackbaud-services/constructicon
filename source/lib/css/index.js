import css from 'cxsync'
import rawWithStyles, { stylesToClasses } from '../../components/with-styles'

export { css, stylesToClasses }

export const withStyles = styles => {
  console.log(
    'Development warning: withStyles should now be imported the same way as other higher order components i.e. import withStyles from `construction/with-styles`. Support for importing from `constructicon/lib/css` will be removed in version 2'
  )
  return rawWithStyles(styles)
}
