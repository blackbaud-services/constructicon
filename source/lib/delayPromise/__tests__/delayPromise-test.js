import delayPromise from '..'

describe('delayPromise', () => {
  it('resolves with the optional second argument', () => {
    Promise.resolve()
      .then(() => delayPromise(100, 'foo'))
      .then(foo => {
        expect(foo).to.equal('foo')
      })
  })
})
