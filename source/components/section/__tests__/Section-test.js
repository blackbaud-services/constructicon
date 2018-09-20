import Section from '..'
import { css } from '../../../lib/css'
import { colors, rhythm, radiuses } from '../../../lib/traits'

describe('Section', () => {
  it('should render a section', () => {
    const wrapper = mount(<Section>Content here</Section>)
    const section = wrapper.find('Section')
    const rule = utils.findRule(css.rules, section.prop('classNames').root)
    expect(section.text()).to.eql('Content here')
    expect(rule.css).to.contain('padding-left:1.5rem')
    expect(rule.css).to.contain('padding-right:1.5rem')
    expect(rule.css).to.contain('padding-top:1.5rem')
    expect(rule.css).to.contain('padding-bottom:1.5rem')
  })

  it('should allow us to specify the tag', () => {
    const wrapper = mount(<Section tag='section'>Content here</Section>)
    const section = wrapper.find('section')
    expect(section.text()).to.eql('Content here')
  })

  it('should allow us to alter the color', () => {
    const wrapper = mount(
      <Section background='primary' foreground='light'>
        Content here
      </Section>
    )
    const section = wrapper.find('Section')
    const rule = utils.findRule(css.rules, section.prop('classNames').root)
    expect(rule.css).to.contain(`background-color:${colors.primary}`)
    expect(rule.css).to.contain(`color:${colors.light}`)
  })

  it('should allow us to set the border', () => {
    const wrapper = mount(
      <Section borderWidth={3} radius='medium'>
        Content here
      </Section>
    )
    const section = wrapper.find('Section')
    const rule = utils.findRule(css.rules, section.prop('classNames').root)
    expect(rule.css).to.contain(`border:3px solid ${colors.shade}`)
    expect(rule.css).to.contain(`border-radius:${rhythm(radiuses.medium)}`)
  })

  it('should allow us to pass in custom styles', () => {
    const wrapper = mount(
      <Section styles={{ opacity: 0.5 }}>Content here</Section>
    )
    const section = wrapper.find('Section')
    const rule = utils.findRule(css.rules, section.prop('classNames').root)
    expect(rule.css).to.contain(`opacity:0.5`)
  })

  it('applies custom margins to the element', () => {
    const wrapper = mount(
      <Section margin={{ x: 2, y: 0 }}>Content Here</Section>
    )
    const section = wrapper.find('Section')
    const rule = utils.findRule(css.rules, section.prop('classNames').root)
    expect(rule.css).to.contain('margin-left:3rem')
    expect(rule.css).to.contain('margin-right:3rem')
    expect(rule.css).to.contain('margin-top:0')
    expect(rule.css).to.contain('margin-bottom:0')
  })

  it('allows us to set other attributes', () => {
    const wrapper = mount(
      <Section id='content' aria-label='Section'>
        Content here
      </Section>
    )
    const section = wrapper.find('section')
    expect(section.prop('id')).to.eql('content')
    expect(section.prop('aria-label')).to.eql('Section')
  })
})
