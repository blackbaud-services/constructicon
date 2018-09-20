import InputValidations from '..'

describe('InputValidations', () => {
  it('should render validations', () => {
    const wrapper = mount(
      <InputValidations
        validations={['Field is required', 'Some other error']}
      />
    )
    const root = wrapper.find('.c11n-input-validations')
    const errors = wrapper.find('.c11n-input-validations > div')
    expect(root.length).to.eql(1)
    expect(errors.length).to.eql(2)
  })
})
