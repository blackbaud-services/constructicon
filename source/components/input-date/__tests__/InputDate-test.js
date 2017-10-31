import InputDate from '..'

describe('InputDate', () => {
  it('should render a simple input field', () => {
    const wrapper = mount(
      <InputDate
        label='Test Field'
        name='test-name'
        onChange={() => {}}
      />
    )

    const label = wrapper.find('label')
    expect(label.length).to.eql(1)
  })

  // TODO: Write more tests!
})
