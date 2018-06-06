import Form from '..'

describe('Form', () => {
  it('renders a simple form', () => {
    const wrapper = mount(<Form submit='Test Label' onSubmit={() => {}} />)
    const form = wrapper.find('form')
    const submit = wrapper.find('button')
    expect(form.length).to.eql(1)
    expect(submit.length).to.eql(1)
    expect(submit.text()).to.eql('Test Label')
    expect(submit.prop('aria-label')).to.eql('Test Label')
  })

  it('renders supplied form inputs', () => {
    const wrapper = mount(
      <Form onSubmit={() => {}}>
        <input type='text' name='test' />
      </Form>
    )
    const input = wrapper.find('input')
    expect(input.length).to.eql(1)
    expect(input.prop('type')).to.eql('text')
  })

  it('disables the form submit', () => {
    const wrapper = mount(
      <Form isDisabled onSubmit={() => {}}>
        <input type='text' name='test' />
      </Form>
    )
    const button = wrapper.find('button')
    expect(button.prop('disabled')).to.eql(true)
  })

  it('fires the onSubmit handler', () => {
    let called
    const wrapper = mount(<Form onSubmit={() => (called = true)} />)
    const form = wrapper.find('form')
    form.simulate('submit', { target: { value: 'test' } })
    expect(called).to.eql(true)
  })

  it('renders additional actions if supplied', () => {
    const wrapper = mount(
      <Form onSubmit={() => {}} actions={[{ label: 'Cancel' }]}>
        <input type='text' name='test' />
      </Form>
    )
    const action = wrapper.find('a')
    expect(action.length).to.eql(1)
    expect(action.text()).to.eql('Cancel')
    expect(action.prop('aria-label')).to.eql('Cancel')
  })

  it('adds specified props to submit button', () => {
    const wrapper = mount(
      <Form onSubmit={() => {}} submitProps={{ id: 'foo' }}>
        <input type='text' name='test' />
      </Form>
    )
    const action = wrapper.find('button')
    expect(action.length).to.eql(1)
    expect(action.prop('id')).to.eql('foo')
  })
})
