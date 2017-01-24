import Container from '..'
import { css } from '../../../lib/css'
import { shadows } from '../../../lib/traits'

describe('Container', () => {
  it('should render a container', () => {
    const wrapper = mount(<Container>Content here</Container>)
    const container = wrapper.find('article')
    const rule = utils.findRule(css.rules, container.props().className)
    expect(container.text()).to.eql('Content here')
    expect(rule.css).to.contain(`max-width:60em`)
  })

  it('should allow us to specify the tag', () => {
    const wrapper = mount(<Container tag='section'>Content here</Container>)
    const container = wrapper.find('section')
    expect(container.text()).to.eql('Content here')
  })

  it('should allow us to alter the max width', () => {
    const wrapper = mount(<Container width={30}>Content here</Container>)
    const container = wrapper.find('article')
    const rule = utils.findRule(css.rules, container.props().className)
    expect(rule.css).to.contain(`max-width:45em`)
  })

  it('should allow us to set the shadow', () => {
    const wrapper = mount(<Container shadow='light'>Content here</Container>)
    const container = wrapper.find('article')
    const rule = utils.findRule(css.rules, container.props().className)
    expect(rule.css).to.contain(`box-shadow:${shadows.light}`)
  })

  it('should allow us to pass in custom styles', () => {
    const wrapper = mount(<Container styles={{ opacity: 0.5 }}>Content here</Container>)
    const container = wrapper.find('article')
    const rule = utils.findRule(css.rules, container.props().className)
    expect(rule.css).to.contain(`opacity:0.5`)
  })
})
