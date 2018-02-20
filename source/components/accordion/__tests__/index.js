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
    const styles = accordion.prop('styles')
    expect(styles.body.display).to.eql('none')
  })

  it('should render a simple open accordion', () => {
    const wrapper = mount(
      <Accordion title='Question here?' toggled>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    const styles = accordion.prop('styles')
    expect(styles.body.display).to.eql('block')
  })

  it('should allow us to open accordions', () => {
    const wrapper = mount(
      <Accordion title='Question here?'>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    accordion.prop('onToggle')()

    wrapper.update()
    const updatedAccordion = wrapper.find('Accordion')
    const styles = updatedAccordion.prop('styles')
    expect(styles.body.display).to.eql('block')
  })

  it('should allow us to close accordions', () => {
    const wrapper = mount(
      <Accordion title='Question here?' toggled>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    accordion.prop('onToggle')()

    wrapper.update()
    const updatedAccordion = wrapper.find('Accordion')
    const styles = updatedAccordion.prop('styles')
    expect(styles.body.display).to.eql('none')
  })

  it('should allow us to set the active color of accordions', () => {
    const wrapper = mount(
      <Accordion title='Question here?' color='secondary' toggled>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    const styles = accordion.prop('styles')
    expect(styles.root.borderLeft).to.eql(`2px solid ${colors.secondary}`)
  })

  it('should allow us to remove the border', () => {
    const wrapper = mount(
      <Accordion title='Question here?' border={false}>
        <p>Answer here...</p>
      </Accordion>
    )
    const accordion = wrapper.find('Accordion')
    const styles = accordion.prop('styles')
    expect(styles.root.borderLeft).to.eql(undefined)
  })
})
