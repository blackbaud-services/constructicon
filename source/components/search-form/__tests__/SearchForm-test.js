import SearchForm from '..'

describe('SearchForm', () => {
  it('should render a simple search form', () => {
    const wrapper = mount(<SearchForm onChange={() => console.log('test')} />)
    const input = wrapper.find('input')
    expect(input.length).to.eql(1)
  })

  it('should set the placeholder', () => {
    const wrapper = mount(<SearchForm placeholder='My test placeholder' onChange={() => console.log('test')} />)
    const input = wrapper.find('input')
    expect(input.prop('placeholder')).to.eql('My test placeholder')
  })

  it('should fire the onChange handler', (done) => {
    let called
    const wrapper = mount(<SearchForm onChange={() => called = true} />)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'test' } })

    // need to wait for callback to debounce
    setTimeout(() => {
      expect(called).to.eql(true)
      done()
    }, 500)
  })
})
