import Filter from '..'

describe('Filter', () => {
  it('should render a simple filter field', () => {
    const wrapper = mount(<Filter onChange={() => console.log('test')} />)
    const input = wrapper.find('input')
    expect(input.length).to.eql(1)
  })

  it('should set the placeholder', () => {
    const wrapper = mount(
      <Filter
        placeholder='My test placeholder'
        onChange={() => console.log('test')}
      />
    )
    const input = wrapper.find('input')
    expect(input.prop('placeholder')).to.eql('My test placeholder')
  })

  it('should fire the onChange handler', done => {
    let called
    const wrapper = mount(<Filter onChange={() => (called = true)} />)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'test' } })

    // need to wait for callback to debounce
    setTimeout(() => {
      expect(called).to.eql(true)
      done()
    }, 500)
  })
})
