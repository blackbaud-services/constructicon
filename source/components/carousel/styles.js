import merge from 'lodash/merge'

export default ({ styles }, { rhythm }) => ({
  root: merge(
    {
      // Base
      '& .slick-slider': {
        position: 'relative',
        display: 'block',
        height: '100%',
        boxSizing: 'border-box',
        userSelect: 'none',
        touchAction: 'pan-y',
        paddingTop: rhythm(2),
        paddingBottom: rhythm(2)
      },
      '& .slick-list': {
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        height: '100%',
        margin: 0,
        padding: 0,
        transform: 'translate3d(0, 0, 0)'
      },
      '& .slick-list :focus': {
        outline: 'none'
      },
      '& .slick-list .dragging': {
        cursor: 'grab'
      },
      '& .slick-track': {
        display: 'block',
        position: 'relative',
        top: 0,
        left: 0,
        height: '100%',
        transform: 'translate3d(0, 0, 0)'
      },
      '& .slick-track:after': {
        content: '""',
        display: 'table',
        clear: 'both'
      },
      '& .slick-loading .slick-track': {
        visibility: 'hidden'
      },
      '& .slick-slide': {
        display: 'none',
        float: 'left',
        height: '100%',
        minHeight: '1px',
        textAlign: 'center'
      },
      '& .slick-slide img': {
        display: 'block'
      },
      '&[dir="rtl"] .slick-slide': {
        float: 'right'
      },
      '& .slick-slide.slick-loading img': {
        display: 'none'
      },
      '& .slick-slide.dragging img': {
        pointerEvents: 'none'
      },
      '& .slick-initialized .slick-slide': {
        display: 'block'
      },
      '& .slick-loading .slick-slide': {
        visibility: 'hidden'
      },
      '& .slick-vertical .slick-slide': {
        display: 'block',
        height: 'auto',
        border: '1px solid transparent'
      },
      '& .slick-arrow.slick-hidden': {
        display: 'none'
      },

      // Arrows
      '& .slick-arrow': {
        position: 'absolute',
        top: '50%',
        padding: 0,
        width: '20px',
        height: '20px',
        lineHeight: '1rem',
        fontSize: rhythm(0.6667),
        textAlign: 'center',
        marginTop: '-10px',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        cursor: 'pointer',
        opacity: 0.5,
        zIndex: 2
      },
      '& .slick-arrow:hover': {
        outline: 'none',
        opacity: 1
      },
      '& .slick-arrow:focus': {
        outline: 'none',
        opacity: 1
      },
      '& .slick-prev': {
        left: '1rem'
      },
      '& .slick-next': {
        right: '1rem'
      },

      // Dots
      '& .slick-dots': {
        display: 'block',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        margin: 0,
        padding: 0,
        listStyle: 'none',
        textAlign: 'center'
      },

      '& .slick-dots li': {
        position: 'relative',
        display: 'inline-block',
        width: '20px',
        height: '20px',
        padding: 0,
        cursor: 'pointer'
      },

      '& .slick-dots button': {
        display: 'block',
        width: '20px',
        height: '20px',
        cursor: 'pointer',
        color: 'transparent',
        border: 0,
        outline: 'none',
        background: 'transparent'
      },

      '& .slick-dots button:before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '8px',
        height: '8px',
        margin: '-4px',
        opacity: 0.25,
        borderRadius: '50%',
        background: 'black'
      },

      '& .slick-dots button:hover': {
        outline: 'none'
      },

      '& .slick-dots button:hover:before': {
        opacity: 1
      },

      '& .slick-dots button:focus': {
        outline: 'none'
      },

      '& .slick-dots button:focus:before': {
        opacity: 1
      },

      '& .slick-dots li.slick-active button:before': {
        opacity: 0.75,
        color: 'black'
      }
    },
    styles
  )
})
