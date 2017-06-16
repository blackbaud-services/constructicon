import Meta from '..'

describe('Meta', () => {
  it('renders a simple meta component', () => {
    const wrapper = mount(
      <Meta title='Page title' />
    )
    expect(wrapper.nodes[0].props.title).to.eql('Page title')
  })
})
