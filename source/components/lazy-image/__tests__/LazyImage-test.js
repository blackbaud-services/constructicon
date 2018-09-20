import LazyImage from '..'

const timeout = len =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), len)
  })

describe('LazyImage', () => {
  it('intially rendered without a background image and with correct state', () => {
    const wrapper = shallow(<LazyImage />).dive()
    const style = wrapper.find('.c11n-lazy-image').get(0).props.style
    expect(wrapper.instance().state.status).to.eql('waiting')
    expect(style).to.have.property('backgroundImage', '')
  })

  it('correctly sets the background image once loaded', () => {
    const wrapper = shallow(<LazyImage url='IMAGE_URL' />)

    return Promise.resolve()
      .then(() => timeout(100))
      .then(() => wrapper.update())
      .then(() => {
        const style = wrapper
          .dive()
          .find('.c11n-lazy-image')
          .get(0).props.style
        expect(wrapper.dive().instance().state.status).to.eql('fetched')
        expect(style).to.have.property('backgroundImage', "url('IMAGE_URL')")
      })
  })

  it('renders custom children instead of a spinner when provided', () => {
    const wrapper = mount(
      <LazyImage>
        <span>Loading</span>
      </LazyImage>
    )
    const text = wrapper.text()
    expect(text).to.eql('Loading')
  })

  it('delays loading the backgroundImage if lazy is true', () => {
    const wrapper = shallow(<LazyImage lazy url='IMAGE_URL' />)

    return Promise.resolve()
      .then(() => timeout(100))
      .then(() => wrapper.update())
      .then(() => {
        const style = wrapper
          .dive()
          .find('.c11n-lazy-image')
          .get(0).props.style
        expect(wrapper.dive().instance().state.status).to.eql('waiting')
        expect(style).to.have.property('backgroundImage', '')
      })
  })
})
