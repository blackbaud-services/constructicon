export default (props, traits) => {
  const {
    colors
  } = traits

  const {
    color,
    rotate,
    size,
    spin,
    styles
  } = props

  const spinStyles = spin ? {
    animation: 'spin 1s linear infinite',
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    }
  } : {}

  return {
    root: {
      fill: colors[color] || color,
      display: 'inline-block',
      width: `${size}em`,
      height: `${size}em`,
      transform: `rotate(${rotate}deg)`,
      ...spinStyles,
      ...styles
    }
  }
}
