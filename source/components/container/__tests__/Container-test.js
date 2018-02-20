import Container from '..'
import { css } from '../../../lib/css'
import { shadows } from '../../../lib/traits'

describe('Container', () => {
  it('should render a container', () => {
    const wrapper = mount(<Container>Content here</Container>)
    const container = wrapper.find('Container')
    const styles = container.prop('styles')
    expect(container.text()).to.eql('Content here')
    expect(styles.root.maxWidth).to.eql('60rem')
  })

  it('should allow us to specify the tag', () => {
    const wrapper = mount(<Container tag='section'>Content here</Container>)
    const container = wrapper.find('section')
    expect(container.text()).to.eql('Content here')
  })

  it('should allow us to alter the max width', () => {
    const wrapper = mount(<Container width={30}>Content here</Container>)
    const container = wrapper.find('Container')
    const styles = container.prop('styles')
    expect(styles.root.maxWidth).to.eql('45rem')
  })

  it('should allow us to set the shadow', () => {
    const wrapper = mount(<Container shadow='light'>Content here</Container>)
    const container = wrapper.find('Container')
    const styles = container.prop('styles')
    expect(styles.root.boxShadow).to.eql(shadows.light)
  })

  it('should allow us to pass in custom styles', () => {
    const wrapper = mount(
      <Container styles={{ root: { opacity: 0.5 } }}>Content here</Container>
    )
    const container = wrapper.find('Container')
    const styles = container.prop('styles')
    expect(styles.root.opacity).to.eql(0.5)
  })
})
