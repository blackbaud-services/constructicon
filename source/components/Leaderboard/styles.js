import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    background,
    foreground,
    columns,
    styles
  } = props

  const {
    colors,
    mediaQuery,
    scale,
    rhythm
  } = traits

  const createColumns = () => {
    return Object.keys(columns).reduce((styles, breakpoint) => ({
      ...styles,
      [mediaQuery(breakpoint)]: {
        columnCount: columns[breakpoint]
      }
    }), {})
  }

  const defaultStyles = {
    root: {
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground]
    },

    leaders: {
      counterReset: 'board',
      ...createColumns()
    },

    state: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: rhythm(2),
      fontSize: scale(-1),

      '> *': {
        margin: `0 ${rhythm(0.25)}`
      }
    }
  }

  return merge(defaultStyles, styles)
}
