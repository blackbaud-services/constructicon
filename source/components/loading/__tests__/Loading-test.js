import Loading from '..'
import { css } from '../../../lib/css'
import { rhythm, colors } from '../../../lib/traits'

describe('Loading', () => {
  it('renders a simple loading animation', () => {
    const wrapper = mount(<Loading />)
    const component = wrapper.find('Loading')
    const span = wrapper.find('span')
    expect(component.length).to.eql(1)
    expect(span.length).to.eql(3)
  })

  it('allows us to set the dots color', () => {
    const wrapper = mount(<Loading color='secondary' />)
    const component = wrapper.find('Loading')
    const styles = component.prop('styles').dot
    expect(styles.backgroundColor).to.eql(colors.secondary)
  })

  it('allows us to set the dots size', () => {
    const wrapper = mount(<Loading size={3} />)
    const component = wrapper.find('Loading')
    const styles = component.prop('styles').dot
    expect(styles.width).to.eql(rhythm(1.5))
    expect(styles.height).to.eql(rhythm(1.5))
  })

  it('allows us to set the animation duration', () => {
    const wrapper = mount(<Loading duration={400} />)
    const component = wrapper.find('Loading')
    const styles = component.prop('styles').dot
    expect(styles.animationDuration).to.eql('400ms')
  })

  it('allows us to set custom styles', () => {
    const wrapper = mount(<Loading styles={{ root: { height: '100px' } }} />)
    const component = wrapper.find('Loading')
    const styles = component.prop('styles').root
    expect(styles.height).to.eql('100px')
  })
})
