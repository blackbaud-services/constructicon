export const getForegroundColor = (background, foreground) => {
  const lightVariants = ['transparent', 'white', '#ffffff', '#fff']

  const isBackgroundLight =
    !background || lightVariants.indexOf(background.toLowerCase()) !== -1

  const isForegroundLight =
    !foreground || lightVariants.indexOf(foreground.toLowerCase()) !== -1

  if (isBackgroundLight && isForegroundLight) {
    return '#000000'
  } else {
    return foreground
  }
}
