import Carousel from '..'
import Arrow from '../arrow'

describe('Carousel', () => {
  it('should render a simple carousel', () => {
    const wrapper = mount(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )
    expect(wrapper.find('.slick-slide').nodes[1].innerHTML).to.equal('Slide 1')
    expect(wrapper.find('.slick-track')).to.have.length(1)
  })

  it('should have arrows by default', () => {
    const wrapper = mount(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )

    expect(wrapper.find('.slick-prev')).to.have.length(1)
    expect(wrapper.find('.slick-next')).to.have.length(1)
  })
})

describe('Arrow', () => {
  it('should render a simple carousel arrow', () => {
    const wrapper = mount(
      <Arrow direction='prev' />
    )

    expect(wrapper.find('button').prop('aria-label')).to.eql('Previous')
    expect(wrapper.find('svg')).to.have.length(1)
  })
})
