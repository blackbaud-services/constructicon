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

  const {
    root,
    leaders
  } = styles

  const createColumns = () => {
    return Object.keys(columns).reduce((styles, breakpoint) => ({
      ...styles,
      [mediaQuery(breakpoint)]: {
        columnCount: columns[breakpoint]
      }
    }), {})
  }

  console.log(background)

  return {
    root: {
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground],
      ...root
    },

    leaders: {
      counterReset: 'board',
      ...createColumns(),
      ...leaders
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
}
