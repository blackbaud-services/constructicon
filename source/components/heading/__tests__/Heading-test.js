import Heading from '..'
import { css } from '../../../lib/css'

describe('Heading', () => {
  it('should render a string', () => {
    const wrapper = mount(<Heading>Informative Section Heading</Heading>)
    expect(wrapper.text()).to.eql('Informative Section Heading')
  })

  it('should apply custom styles', () => {
    const styles = {
      fontSize: 100
    }
    const wrapper = mount(
      <Heading styles={styles}>'Informative Section Heading'</Heading>
    )
    const className = wrapper.find('Heading').prop('classNames').root
    const rule = utils.findRule(css.rules, `${className}`)
    expect(rule.css).to.contain(`font-size:100px`)
  })

  it('should apply an id', () => {
    const wrapper = mount(
      <Heading id='section'>Informative Section Heading</Heading>
    )
    expect(wrapper.prop('id')).to.eql('section')
  })
})
