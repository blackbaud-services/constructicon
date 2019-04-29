import ButtonShare from '..'
import { css } from '../../../lib/css'
import { colors } from '../../../lib/traits'

describe('ButtonShare', () => {
  const getMountedElement = el => utils.getMountedElement(el, 'a')

  it('should render a button', () => {
    const wrapper = mount(
      <ButtonShare type='facebook' href='http://facebook.com' />
    )
    const icon = wrapper.find('Icon')
    const button = wrapper.find('a')
    expect(icon.prop('name')).to.eql('facebook')
    expect(icon.length).to.eql(1)
  })

  it('should allow us to override props', () => {
    const wrapper = mount(
      <ButtonShare
        type='facebook'
        href='http://facebook.com'
        background='primary'
      />
    )
    const button = wrapper.find('Button')
    const styles = button.prop('styles')
    expect(styles.root.backgroundColor).to.eql(colors.primary)
  })

  it('should show a share button', () => {
    const wrapper = mount(<ButtonShare type='facebook' share />)
    const button = wrapper.find('Button')
    expect(typeof button.prop('onClick')).to.eql('function')
  })
})
