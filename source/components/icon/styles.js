export default (props, traits, keyframes) => {
  const { color, rotate, size, spin, styles } = props

  return {
    root: {
      fill: traits.colors[color] || color,
      display: 'inline-block',
      width: `${size}em`,
      height: `${size}em`,
      transform: `rotate(${rotate}deg)`,
      animation: spin && `${keyframes.spin} 1s linear infinite`,
      ...styles
    }
  }
}

export const keyframes = {
  spin: {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
}
