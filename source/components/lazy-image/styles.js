import merge from 'lodash/merge'

export default ({ styles, theme, transition, color }, { colors }) => {
  const backgroundColor = colors[color]

  return {
    root: merge(
      {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor,
        height: '20em',
        width: '20em'
      },
      styles
    ),

    overlay: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition,
      backgroundColor
    }
  }
}
