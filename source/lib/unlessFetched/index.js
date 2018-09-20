const isFetched = ({ status } = {}) => status === 'fetched'

export default (resource = {}, fetcher, alwaysFetch) =>
  !alwaysFetch && isFetched(resource) ? Promise.resolve(resource) : fetcher()
