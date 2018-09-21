import Heading from '..'
import { css } from '../../../lib/css'

describe('Heading', () => {
  it('should render a string', () => {
    const wrapper = mount(<Heading>Informative Section Heading</Heading>)
    expect(wrapper.text()).to.eql('Informative Section Heading')
  })

  it('should apply custom styles', () => {
    const customStyles = {
      fontSize: 100
    }
    const wrapper = mount(
      <Heading styles={customStyles}>'Informative Section Heading'</Heading>
    )
    const heading = wrapper.find('Heading')
    const styles = heading.prop('styles')
    expect(styles.root.fontSize).to.eql(100)
  })

  it('should apply an id', () => {
    const wrapper = mount(
      <Heading id='section'>Informative Section Heading</Heading>
    )
    expect(wrapper.prop('id')).to.eql('section')
  })
})
