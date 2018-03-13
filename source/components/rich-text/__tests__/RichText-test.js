import RichText from '..'
import { css } from '../../../lib/css'

describe('RichText', () => {
  it('should render a string of html', () => {
    const wrapper = mount(
      <RichText>
        '<h1>Heading</h1>
        <p>Content</p>'
      </RichText>
    )
    expect(wrapper.find('h1').text()).to.eql('Heading')
    expect(wrapper.find('p').text()).to.eql('Content')
  })

  it('should render html', () => {
    const wrapper = mount(
      <RichText>
        <h1>Heading</h1>
        <p>Content</p>
      </RichText>
    )
    expect(wrapper.find('h1').text()).to.eql('Heading')
    expect(wrapper.find('p').text()).to.eql('Content')
  })

  it('should apply default styles to my html', () => {
    const wrapper = mount(
      <RichText>
        '<h1>Heading</h1>
        <h2>Body</h2>'
      </RichText>
    )
    const className = wrapper.find('RichText').prop('classNames').root
    expect(utils.findRule(css.rules, `${className} h1`)).to.exist
    expect(utils.findRule(css.rules, `${className} h2`)).to.exist
    expect(utils.findRule(css.rules, `${className} p`)).to.exist
    expect(utils.findRule(css.rules, `${className} ul`)).to.exist
    expect(utils.findRule(css.rules, `${className} ol`)).to.exist
    expect(utils.findRule(css.rules, `${className} blockquote`)).to.exist
  })

  it('should apply custom styles', () => {
    const styles = {
      '& h1': {
        fontSize: 100
      }
    }
    const wrapper = mount(
      <RichText styles={styles}>
        '<h1>Heading</h1>
        <h2>Body</h2>'
      </RichText>
    )
    const className = wrapper.find('RichText').prop('classNames').root
    const rule = utils.findRule(css.rules, `${className} h1`)
    expect(rule.css).to.contain(`font-size:100px`)
  })
})
