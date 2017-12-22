import Container from '..'
import { css } from '../../../lib/css'
import { shadows } from '../../../lib/traits'

describe('Container', () => {
  it('should render a container', () => {
    const wrapper = mount(<Container>Content here</Container>)
    const container = wrapper.find('Container')
    const rule = utils.findRule(css.rules, container.prop('classNames').root)
    expect(container.text()).to.eql('Content here')
    expect(rule.css).to.contain(`max-width:60rem`)
  })

  it('should allow us to specify the tag', () => {
    const wrapper = mount(<Container tag='section'>Content here</Container>)
    const container = wrapper.find('section')
    expect(container.text()).to.eql('Content here')
  })

  it('should allow us to alter the max width', () => {
    const wrapper = mount(<Container width={30}>Content here</Container>)
    const container = wrapper.find('Container')
    const rule = utils.findRule(css.rules, container.prop('classNames').root)
    expect(rule.css).to.contain(`max-width:45rem`)
  })

  it('should allow us to set the shadow', () => {
    const wrapper = mount(<Container shadow='light'>Content here</Container>)
    const container = wrapper.find('Container')
    const rule = utils.findRule(css.rules, container.prop('classNames').root)
    expect(rule.css).to.contain(`box-shadow:${shadows.light}`)
  })

  it('should allow us to pass in custom styles', () => {
    const wrapper = mount(<Container styles={{ root: { opacity: 0.5 } }}>Content here</Container>)
    const container = wrapper.find('Container')
    const rule = utils.findRule(css.rules, container.prop('classNames').root)
    expect(rule.css).to.contain(`opacity:0.5`)
  })
})
