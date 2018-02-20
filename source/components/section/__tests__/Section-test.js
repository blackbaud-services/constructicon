import Section from '..'
import { css } from '../../../lib/css'
import { colors, rhythm, radiuses } from '../../../lib/traits'

describe('Section', () => {
  it('should render a section', () => {
    const wrapper = mount(<Section>Content here</Section>)
    const section = wrapper.find('Section')
    const styles = section.prop('styles')
    expect(section.text()).to.eql('Content here')
    expect(styles.root.paddingLeft).to.contain('1.5rem')
    expect(styles.root.paddingRight).to.contain('1.5rem')
    expect(styles.root.paddingTop).to.contain('1.5rem')
    expect(styles.root.paddingBottom).to.contain('1.5rem')
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
    const styles = section.prop('styles')
    expect(styles.root.backgroundColor).to.eql(colors.primary)
    expect(styles.root.color).to.eql(colors.light)
  })

  it('should allow us to set the border', () => {
    const wrapper = mount(
      <Section borderWidth={3} radius='medium'>
        Content here
      </Section>
    )
    const section = wrapper.find('Section')
    const styles = section.prop('styles')
    expect(styles.root.border).to.eql(`3px solid ${colors.shade}`)
    expect(styles.root.borderRadius).to.eql(rhythm(radiuses.medium))
  })

  it('should allow us to pass in custom styles', () => {
    const wrapper = mount(
      <Section styles={{ opacity: 0.5 }}>Content here</Section>
    )
    const section = wrapper.find('Section')
    const styles = section.prop('styles')
    expect(styles.root.opacity).to.eql(0.5)
  })

  it('applies custom margins to the element', () => {
    const wrapper = mount(
      <Section margin={{ x: 2, y: 0 }}>Content Here</Section>
    )
    const section = wrapper.find('Section')
    const styles = section.prop('styles')
    expect(styles.root.marginLeft).to.eql('3rem')
    expect(styles.root.marginRight).to.eql('3rem')
    expect(styles.root.marginTop).to.eql('0rem')
    expect(styles.root.marginBottom).to.eql('0rem')
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
