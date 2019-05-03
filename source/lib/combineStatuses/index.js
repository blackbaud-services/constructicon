const combineStatuses = (...statuses) => {
  if (statuses.length < 1) return null
  if (statuses.indexOf('failed') > -1) return 'failed'
  if (statuses.indexOf('fetching') > -1) return 'fetching'
  return 'fetched'
}

export default combineStatuses
