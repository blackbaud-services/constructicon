import merge from 'lodash/merge'

export default ({ styles }, { rhythm, scale, justifyContent }) => {
  const defaultStyles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      ...justifyContent('space-between'),

      '& > div': {
        padding: rhythm(0.5)
      },

      '& > div + div': {
        paddingLeft: rhythm(0.1)
      }
    },

    avatar: {
      height: rhythm(1.65),
      width: rhythm(1.65),
      borderRadius: '50%'
    },

    titles: {
      flex: 1
    },

    title: {
      fontWeight: 'bold'
    },

    subtitle: {
      fontSize: scale(-1),
      lineHeight: '1.45em',
      paddingTop: rhythm(0.25)
    }
  }

  return merge(defaultStyles, styles)
}
