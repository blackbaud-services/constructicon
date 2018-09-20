import InputSelect from '..'

describe('<InputSelect', () => {
  const testOptions = [
    { value: 'val-1', label: 'Value 1' },
    { value: 'val-2', label: 'Value 2' },
    { value: 'val-3', label: 'Value 3' }
  ]

  it('should render a simple select field', () => {
    const wrapper = mount(
      <InputSelect
        label='Test Field'
        name='test-name'
        onChange={() => {}}
        options={testOptions}
      />
    )
    const input = wrapper.find('select')
    const label = wrapper.find('label')
    const options = wrapper.find('option')
    expect(input.length).to.eql(1)
    expect(label.length).to.eql(1)
    expect(options.length).to.eql(3)
  })

  it('should set the placeholder', () => {
    const wrapper = mount(
      <InputSelect
        label='Test Field'
        name='test-name'
        onChange={() => {}}
        options={testOptions}
        placeholder='My test placeholder'
      />
    )
    const options = wrapper.find('option')
    expect(options.length).to.equal(4)
  })

  it('should set the name', () => {
    const wrapper = mount(
      <InputSelect
        label='Test Field'
        name='test-name'
        options={testOptions}
        onChange={() => {}}
      />
    )
    const input = wrapper.find('select')
    expect(input.prop('name')).to.eql('test-name')
  })

  it('should render optgroups', () => {
    const testGroupedOptions = [
      { value: 'all', label: 'All' },
      { value: 'val-1', label: 'Value 1', group: 'Group 1' },
      { value: 'val-2', label: 'Value 2', group: 'Group 1' },
      { value: 'val-3', label: 'Value 3', group: 'Group 2' }
    ]

    const wrapper = mount(
      <InputSelect
        label='Test Field'
        name='test-name'
        onChange={() => {}}
        options={testGroupedOptions}
        groupOptions
      />
    )
    const input = wrapper.find('select')
    const groups = wrapper.find('optgroup')
    const options = wrapper.find('option')

    expect(groups.length).to.eql(2)
    expect(options.length).to.eql(4)
  })

  it('should set the set custom attributes on the input', () => {
    const wrapper = mount(
      <InputSelect
        label='Test Field'
        name='test-name'
        onChange={() => {}}
        options={testOptions}
        disabled
      />
    )
    const input = wrapper.find('select')
    expect(input.prop('disabled')).to.eql(true)
  })

  it('should fire the onChange handler', done => {
    let called
    const wrapper = mount(
      <InputSelect
        label='Test Field'
        name='test-name'
        onChange={() => (called = true)}
        options={testOptions}
      />
    )
    const input = wrapper.find('select')
    input.simulate('change', { target: { value: 'val-1' } })

    // need to wait for callback to debounce
    setTimeout(() => {
      expect(called).to.eql(true)
      done()
    }, 500)
  })
})
