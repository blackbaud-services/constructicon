import merge from 'lodash/merge'

export default ({ styles }, { measures, rhythm, scale, treatments }) => {
  const headingStyle = size => ({
    ...treatments.head,
    fontSize: scale(size),
    paddingBottom: rhythm(1)
  })

  const defaultStyles = {
    ...treatments.body,

    '& p': {
      paddingBottom: rhythm(1),
      lineHeight: measures.medium
    },

    '& ul': {
      listStyleType: 'disc',
      listStylePosition: 'outside',
      paddingBottom: rhythm(1),
      lineHeight: measures.medium
    },

    '& ol': {
      listStyleType: 'decimal',
      listStylePosition: 'outside',
      paddingBottom: rhythm(1),
      lineHeight: measures.medium
    },

    '& li': {
      marginLeft: rhythm(1)
    },

    '& blockquote': {
      maxWidth: rhythm(25),
      paddingBottom: rhythm(1),
      margin: '0 auto',
      textAlign: 'center',
      lineHeight: measures.medium,
      fontWeight: 700,
      fontSize: scale(1),
      ':before': {
        content: 'open-quote'
      },
      ':after': {
        content: 'close-quote'
      }
    },

    '& img': {
      display: 'block',
      margin: '0 auto',
      width: 'auto',
      maxWidth: '100%'
    },

    '& iframe': {
      paddingBottom: rhythm(2)
    },

    '& strong': {
      fontWeight: 700
    },

    '& em': {
      fontStyle: 'italic'
    },

    '& h1': {
      ...headingStyle(4)
    },
    '& h2': {
      ...headingStyle(3)
    },
    '& h3': {
      ...headingStyle(2)
    },
    '& h4': {
      ...headingStyle(1)
    },
    '& h5': {
      ...headingStyle(0)
    },
    '& h6': {
      ...headingStyle(-1)
    }
  }

  return {
    root: merge(defaultStyles, styles)
  }
}
