import InputFile from '..'

describe('InputFile', () => {
  it('should render a simple input field', () => {
    const wrapper = mount(
      <InputFile label='Test Field' name='test-name' onChange={() => {}} />
    )
    const label = wrapper.find('label')
    const input = wrapper.find('input')
    const button = wrapper.find('button')
    expect(label.length).to.eql(1)
    expect(input.length).to.eql(1)
    expect(button.length).to.eql(1)
  })

  it('should set the placeholder', () => {
    const wrapper = mount(
      <InputFile
        label='Test Field'
        name='test-name'
        onChange={() => {}}
        placeholder='My test placeholder'
      />
    )
    const button = wrapper.find('button')
    expect(button.text()).to.eql('My test placeholder')
  })

  it('should set the name', () => {
    const wrapper = mount(
      <InputFile label='Test Field' name='test-name' onChange={() => {}} />
    )
    const input = wrapper.find('input')
    expect(input.prop('name')).to.eql('test-name')
  })

  it('should set the set custom attributes on the input', () => {
    const wrapper = mount(
      <InputFile
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
      <InputFile
        label='Test Field'
        name='test-name'
        onChange={() => (called = true)}
      />
    )
    const input = wrapper.find('input')
    const testFile = new window.File([], 'test.txt')

    input.simulate('change', { target: { files: [testFile] } })

    setTimeout(() => {
      expect(called).to.eql(true)
      done()
    }, 100)
  })
})
