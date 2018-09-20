import Typekit from '..'

describe('Typekit', () => {
  const getMountedElement = el => utils.getMountedElement(el, 'script')

  it('should render a Typekit script', () => {
    const typekit = getMountedElement(<Typekit id='abc123' />)
    expect(typekit.text()).to.contain('abc123')
  })
})
