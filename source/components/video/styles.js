import merge from 'lodash/merge'

export default (
  {
    background,
    borderColor,
    borderWidth,
    margin,
    radius,
    spacing,
    embed,
    styles
  },
  { colors, radiuses, rhythm, calculateSpacing }
) => {
  const { width, height } = embed || { width: 480, height: 270 }
  const aspectRatio = height / width

  return {
    root: merge(
      {
        ...calculateSpacing(spacing),
        ...calculateSpacing(margin, 'margin'),
        backgroundColor: background && colors[background],
        border: borderWidth && `${borderWidth}px solid ${colors[borderColor]}`,
        borderRadius: radius && rhythm(radiuses[radius]),
        position: 'relative',
        paddingTop: `${aspectRatio * 100}%`,

        '& iframe': {
          position: 'absolute',
          top: 0,
          left: 0,
          border: 0,
          width: '100%',
          height: '100%'
        }
      },
      styles
    )
  }
}
