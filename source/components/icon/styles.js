import merge from 'lodash/merge'

export default ({ color, rotate, size, spin, styles }, { colors }) => {
  const spinStyles = spin
    ? {
      animation: 'spin 1s linear infinite',
      '@keyframes spin': {
        '0%': {
          transform: 'rotate(0deg)'
        },
        '100%': {
          transform: 'rotate(360deg)'
        }
      }
    }
    : {}

  return {
    root: merge(
      {
        fill: colors[color] || color,
        display: 'inline-block',
        width: `${size}em`,
        height: `${size}em`,
        transform: `rotate(${rotate}deg)`,
        ...spinStyles
      },
      styles
    )
  }
}
