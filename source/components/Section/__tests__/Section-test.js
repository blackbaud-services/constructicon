import Section from '..'
import { css } from '../../../lib/css'
import { colors, rhythm, radiuses } from '../../../lib/traits'

describe('Section', () => {
  it('should render a section', () => {
    const wrapper = mount(<Section>Content here</Section>)
    const section = wrapper.find('section')
    const rule = utils.findRule(css.rules, section.props().className)
    expect(section.text()).to.eql('Content here')
    expect(rule.css).to.contain(`padding:1.5rem 1.5rem`)
  })

  it('should allow us to specify the tag', () => {
    const wrapper = mount(<Section tag='div'>Content here</Section>)
    const section = wrapper.find('div')
    expect(section.text()).to.eql('Content here')
  })

  it('should allow us to alter the color', () => {
    const wrapper = mount(<Section background='primary' foreground='light'>Content here</Section>)
    const section = wrapper.find('section')
    const rule = utils.findRule(css.rules, section.props().className)
    expect(rule.css).to.contain(`background-color:${colors.primary}`)
    expect(rule.css).to.contain(`color:${colors.light}`)
  })

  it('should allow us to set the border', () => {
    const wrapper = mount(<Section borderWidth={3} radius='medium'>Content here</Section>)
    const section = wrapper.find('section')
    const rule = utils.findRule(css.rules, section.props().className)
    expect(rule.css).to.contain(`border:3px solid ${colors.shade}`)
    expect(rule.css).to.contain(`border-radius:${rhythm(radiuses.medium)}`)
  })

  it('should allow us to pass in custom styles', () => {
    const wrapper = mount(<Section styles={{ opacity: 0.5 }}>Content here</Section>)
    const section = wrapper.find('section')
    const rule = utils.findRule(css.rules, section.props().className)
    expect(rule.css).to.contain(`opacity:0.5`)
  })
})
