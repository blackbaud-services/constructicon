import Accordion from '..'
import { css } from '../../../lib/css'
import { colors } from '../../../lib/traits'

describe('Accordion', () => {
  it('should render a simple accordion', () => {
    const wrapper = mount(
      <Accordion title='Question here?'>
        <p>Answer here...</p>
      </Accordion>
    )
    expect(wrapper.find('p').text()).to.eql('Answer here...')
  })

  it('should render a simple closed accordion', () => {
    const wrapper = mount(
      <Accordion title='Question here?'>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    const rule = utils.findRule(css(), accordion.prop('classNames').body)
    expect(rule.css).to.contain(`display:none`)
  })

  it('should render a simple open accordion', () => {
    const wrapper = mount(
      <Accordion title='Question here?' toggled>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    const rule = utils.findRule(css(), accordion.prop('classNames').body)
    expect(rule.css).to.contain(`display:block`)
  })

  it('should allow us to open accordions', () => {
    const wrapper = mount(
      <Accordion title='Question here?'>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    const headerClass = accordion.prop('classNames').head.replace(/ /g, '.')
    wrapper.find(`.${headerClass}`).simulate('click')

    const rule = utils.findRule(css(), accordion.prop('classNames').body)
    expect(rule.css).to.contain(`display:block`)
  })

  it('should allow us to close accordions', () => {
    const wrapper = mount(
      <Accordion title='Question here?' toggled>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    const headerClass = accordion.prop('classNames').head.replace(/ /g, '.')
    wrapper.find(`.${headerClass}`).simulate('click')

    const rule = utils.findRule(css(), accordion.prop('classNames').body)
    expect(rule.css).to.contain(`display:none`)
  })

  it('should allow us to set the active color of accordions', () => {
    const wrapper = mount(
      <Accordion title='Question here?' color='secondary' toggled>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    const rule = utils.findRule(css(), accordion.prop('classNames').root)
    expect(rule.css).to.contain(`border-left:2px solid ${colors.secondary}`)
  })

  it('should allow us to remove the border', () => {
    const wrapper = mount(
      <Accordion title='Question here?' border={false}>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    const rule = utils.findRule(css(), accordion.prop('classNames').root)
    expect(rule.css).to.not.contain('border-left')
  })
})
