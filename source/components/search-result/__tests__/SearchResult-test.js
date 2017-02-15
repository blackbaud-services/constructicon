import Result from '..'

const defaultComponent = <Result title='foo' />
const fullComponent = <Result
  title='foo'
  subtitle='bar'
  image='http://placehold.it/100x100'
  url='http://www.example.com'
/>

describe('Result', () => {
  it('should render a title', () => {
    const wrapper = mount(defaultComponent)
    const heading = wrapper.find('h4')
    expect(heading.text()).to.eql('foo')
    expect(heading.length).to.eql(1)
  })

  it('should not render a subtitle by default', () => {
    const wrapper = mount(defaultComponent)
    const heading = wrapper.find('h6')
    expect(heading.length).to.eql(0)
  })

  it('should not render an image by default', () => {
    const wrapper = mount(defaultComponent)
    const image = wrapper.find('img')
    expect(image.length).to.eql(0)
  })

  it('should not render a Button by default', () => {
    const wrapper = mount(defaultComponent)
    const button = wrapper.find('Button')
    expect(button.length).to.eql(0)
  })

  it('should render a supplied subtitle', () => {
    const wrapper = mount(fullComponent)
    const heading = wrapper.find('h6')
    expect(heading.text()).to.eql('bar')
    expect(heading.length).to.eql(1)
  })

  it('should render a supplied image', () => {
    const wrapper = mount(fullComponent)
    const image = wrapper.find('img')
    expect(image.prop('src')).to.eql('http://placehold.it/100x100')
    expect(image.length).to.eql(1)
  })

  it('should render a supplied Button with link', () => {
    const wrapper = mount(fullComponent)
    const button = wrapper.find('Button')
    expect(button.prop('href')).to.eql('http://www.example.com')
    expect(button.length).to.eql(1)
  })
})
