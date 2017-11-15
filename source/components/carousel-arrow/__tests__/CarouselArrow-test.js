import CarouselArrow from '..'

describe('CarouselArrow', () => {
  it('should render a simple carousel arrow', () => {
    const wrapper = mount(
      <CarouselArrow direction='prev' />
    )

    expect(wrapper.find('button').prop('aria-label')).to.eql('Previous')
    expect(wrapper.find('svg')).to.have.length(1)
  })
})
