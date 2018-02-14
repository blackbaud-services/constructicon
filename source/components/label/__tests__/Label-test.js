import Label from '..'

describe('Label', () => {
  it('should render a label', () => {
    const wrapper = mount(<Label>My Field</Label>)
    const label = wrapper.find('label')
    expect(label.length).to.eql(1)
    expect(label.text()).to.eql('My Field')
  })
})
