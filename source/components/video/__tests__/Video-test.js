import Video from '..'
import { colors } from '../../../lib/traits'

describe('Video', () => {
  it('renders a simple video', () => {
    const wrapper = mount(
      <Video url='https://www.youtube.com/embed/bYX3-RE9s9E' />
    )
    const video = wrapper.find('Video')
    const rootClass = video.prop('classNames').root
    expect(wrapper.find(`.${rootClass}`).html()).to.contain('iframe')
    expect(wrapper.find(`.${rootClass}`).html()).to.contain('youtube.com/embed')
  })

  it('renders a simple video from oembed', () => {
    const wrapper = mount(
      <Video
        embed={{
          html:
            '<iframe width="480" height="270" src="https://www.youtube.com/embed/bYX3-RE9s9E?feature=oembed" frameborder="0" allowfullscreen="allowfullscreen"></iframe>',
          width: 480,
          height: 270,
          url: 'https://www.youtube.com/watch?v=bYX3-RE9s9E'
        }}
      />
    )
    const video = wrapper.find('Video')
    const rootClass = video.prop('classNames').root
    const styles = video.prop('styles')
    expect(styles.root.paddingTop).to.eql('56.25%')
    expect(wrapper.find(`.${rootClass}`).html()).to.contain('iframe')
    expect(wrapper.find(`.${rootClass}`).html()).to.contain('youtube.com/embed')
  })

  it('correctly calculates aspect ratio', () => {
    const wrapper = mount(
      <Video
        embed={{
          html:
            '<iframe src="https://player.vimeo.com/video/243244233?app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="Unexpected Discoveries"></iframe>',
          width: 480,
          height: 240,
          url: 'https://vimeo.com/243244233'
        }}
      />
    )
    const video = wrapper.find('Video')
    const styles = video.prop('styles')
    expect(styles.root.paddingTop).to.eql('50%')
  })

  it('allows us to set the background color', () => {
    const wrapper = mount(
      <Video
        background='secondary'
        url='https://www.youtube.com/embed/bYX3-RE9s9E'
      />
    )
    const video = wrapper.find('Video')
    const styles = video.prop('styles')
    expect(styles.root.backgroundColor).to.eql(colors.secondary)
  })
})
