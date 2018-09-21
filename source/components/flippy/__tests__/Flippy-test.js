import Flippy from '..'
import { css } from '../../../lib/css'
import { colors } from '../../../lib/traits'

describe('Flippy', () => {
  it('renders a simple flippy widget', () => {
    const wrapper = mount(<Flippy front='Front' back='Back' />)
    const flippy = wrapper.find('Flippy')
    const frontClass = flippy.prop('classNames').front
    const backClass = flippy.prop('classNames').back
    expect(wrapper.find(`.${frontClass.split(' ').join('.')}`).text()).to.eql(
      'Front'
    )
    expect(wrapper.find(`.${backClass.split(' ').join('.')}`).text()).to.eql(
      'Back'
    )
  })

  it('allows us to set the background color', () => {
    const wrapper = mount(
      <Flippy front='Front' back='Back' background='secondary' />
    )
    const flippy = wrapper.find('Flippy')
    const styles = flippy.prop('styles')
    expect(styles.wrapper.backgroundColor).to.eql(colors.secondary)
  })
})
