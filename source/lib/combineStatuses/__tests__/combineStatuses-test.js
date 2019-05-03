import combineStatuses from '..'

describe('combineStatuses', () => {
  it('returns null if no statuses are supplied', () => {
    expect(combineStatuses()).to.be.null
  })
  it('returns failed if a status has failed', () => {
    expect(combineStatuses('fetching', 'failed')).to.equal('failed')
  })
  it('returns fetching if a status is fetching, and none have failed', () => {
    expect(combineStatuses('fetched', 'fetching')).to.equal('fetching')
  })
  it('returns fetched if no statuses are fetching or have failed', () => {
    expect(combineStatuses('fetched')).to.equal('fetched')
  })
})
