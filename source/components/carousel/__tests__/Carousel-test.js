import Carousel from '..'
import { css } from '../../../lib/css'

describe('Carousel', () => {
  it('should render a simple carousel', () => {
    const wrapper = mount(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )
    expect(
      wrapper
        .find('.slick-slide')
        .first()
        .prop('children')
    ).to.eql('Slide 2')
    expect(wrapper.find('.slick-track')).to.have.length(1)
  })

  it('should have arrows by default', () => {
    const wrapper = mount(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )

    expect(wrapper.find('.slick-prev')).to.exist
    expect(wrapper.find('.slick-next')).to.exist
  })

  it('should allow us to pass in custom styles', () => {
    const wrapper = mount(
      <Carousel styles={{ opacity: 0.5 }}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )

    const container = wrapper.find('Carousel')
    const rule = utils.findRule(css.rules, container.prop('classNames').root)
    expect(rule.css).to.contain(`opacity:0.5`)
  })
})
