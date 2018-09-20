import InputField from '..'

describe('InputField', () => {
  it('should render a simple input field', () => {
    const wrapper = mount(
      <InputField label='Test Field' name='test-name' onChange={() => {}} />
    )
    const input = wrapper.find('input')
    const label = wrapper.find('label')
    expect(input.length).to.eql(1)
    expect(label.length).to.eql(1)
  })

  it('should render a textarea when appropriate', () => {
    const wrapper = mount(
      <InputField
        type='textarea'
        label='Test Field'
        name='test-name'
        onChange={() => {}}
      />
    )
    const textarea = wrapper.find('textarea')
    expect(textarea.length).to.eql(1)
  })

  it('should set the placeholder', () => {
    const wrapper = mount(
      <InputField
        label='Test Field'
        name='test-name'
        onChange={() => {}}
        placeholder='My test placeholder'
      />
    )
    const input = wrapper.find('input')
    expect(input.prop('placeholder')).to.eql('My test placeholder')
  })

  it('should set the name', () => {
    const wrapper = mount(
      <InputField label='Test Field' name='test-name' onChange={() => {}} />
    )
    const input = wrapper.find('input')
    expect(input.prop('name')).to.eql('test-name')
  })

  it('should set the set custom attributes on the input', () => {
    const wrapper = mount(
      <InputField
        label='Test Field'
        name='test-name'
        onChange={() => {}}
        disabled
      />
    )
    const input = wrapper.find('input')
    expect(input.prop('disabled')).to.eql(true)
  })

  it('should fire the onChange handler', done => {
    let called
    const wrapper = mount(
      <InputField
        label='Test Field'
        name='test-name'
        onChange={() => (called = true)}
      />
    )
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'test' } })

    // need to wait for callback to debounce
    setTimeout(() => {
      expect(called).to.eql(true)
      done()
    }, 500)
  })
})
