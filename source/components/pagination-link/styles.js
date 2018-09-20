import merge from 'lodash/merge'

export default ({ disabled, styles }, { rhythm }) => ({
  root: merge(
    {
      width: rhythm(2),
      textAlign: 'center',
      opacity: disabled ? '0.2 !important' : 1,
      pointerEvents: disabled ? 'none' : 'all'
    },
    styles
  )
})
