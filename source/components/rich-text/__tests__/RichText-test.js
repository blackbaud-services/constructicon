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
    const styles = wrapper.find('RichText').prop('styles')
    expect(styles.root['& h1']).to.exist
    expect(styles.root['& h2']).to.exist
    expect(styles.root['& p']).to.exist
    expect(styles.root['& ul']).to.exist
    expect(styles.root['& ol']).to.exist
    expect(styles.root['& blockquote']).to.exist
  })

  it('should apply custom styles', () => {
    const customStyles = {
      '& h1': {
        fontSize: 100
      }
    }
    const wrapper = mount(
      <RichText styles={customStyles}>
        '<h1>Heading</h1>
        <h2>Body</h2>'
      </RichText>
    )
    const styles = wrapper.find('RichText').prop('styles')
    expect(styles.root['& h1'].fontSize).to.eql(100)
  })
})
