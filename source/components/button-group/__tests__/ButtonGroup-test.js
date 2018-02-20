import ButtonGroup from '..'
import Button from '../../button'
import { css } from '../../../lib/css'

describe('Button Group', () => {
  const getMountedElement = el => utils.getMountedElement(el, 'div')

  it('should render a button group', () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )
    expect(wrapper.find('button')).to.have.length(2)
  })

  it('should allow us to pass in custom styles', () => {
    const wrapper = mount(
      <ButtonGroup styles={{ opacity: 0.5 }}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )
    const container = wrapper.find('ButtonGroup')
    const styles = container.prop('styles')
    expect(styles.root.opacity).to.eql(0.5)
  })
})
