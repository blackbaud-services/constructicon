import Icon from '..'
import * as icons from '../icons'
import { css } from '../../../lib/css'
import { colors } from '../../../lib/traits'

describe('Icon', () => {
  it('should render an icon', () => {
    const wrapper = mount(<Icon name='facebook' />)
    const facebookPath = icons.facebook[0].d
    expect(wrapper.find('svg')).to.exist
    expect(
      wrapper
        .find('path')
        .instance()
        .getAttribute('d')
    ).to.eql(facebookPath)
  })

  it('should set the size of the icon', () => {
    const wrapper = mount(<Icon name='facebook' size={2} />)
    const styles = wrapper.find('Icon').prop('styles')
    expect(styles.root.width).to.eql('2em')
    expect(styles.root.height).to.eql('2em')
  })

  it('should set the default color of the icon', () => {
    const wrapper = mount(<Icon name='facebook' />)
    const styles = wrapper.find('Icon').prop('styles')
    expect(styles.root.fill).to.eql('currentColor')
  })

  it('should set the color of the icon to a theme color', () => {
    const wrapper = mount(<Icon name='facebook' color='primary' />)
    const styles = wrapper.find('Icon').prop('styles')
    expect(styles.root.fill).to.eql(colors.primary)
  })

  it('should set the color of the icon to a custom color', () => {
    const wrapper = mount(<Icon name='facebook' color='#777' />)
    const styles = wrapper.find('Icon').prop('styles')
    expect(styles.root.fill).to.eql('#777')
  })

  it('should spin the icon if set', () => {
    const wrapper = mount(<Icon name='loading' spin />)
    const styles = wrapper.find('Icon').prop('styles')
    expect(styles.root.animation).to.contain('animation-')
    expect(styles.root.animation).to.contain('1s linear infinite')
  })

  it('should rotate the icon if set', () => {
    const wrapper = mount(<Icon name='loading' rotate={90} />)
    const styles = wrapper.find('Icon').prop('styles')
    expect(styles.root.transform).to.eql('rotate(90deg)')
  })

  it('should apply custom styles', () => {
    const wrapper = mount(<Icon name='loading' styles={{ opacity: 0.5 }} />)
    const styles = wrapper.find('Icon').prop('styles')
    expect(styles.root.opacity).to.eql(0.5)
  })

  it('should apply a custom icon', () => {
    const iconPath =
      'M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z'
    const paths = [{ d: iconPath }]
    const wrapper = mount(<Icon paths={paths} />)
    expect(
      wrapper
        .find('path')
        .instance()
        .getAttribute('d')
    ).to.eql(iconPath)
  })

  it('should set a custom viewBox size', () => {
    const wrapper = mount(<Icon name='facebook' viewBox={48} />)
    const attr = wrapper.find('svg').prop('viewBox')
    expect(attr).to.contain('0 0 48 48')
  })
})
