import Image from '..'

describe('Image', () => {
  it('should render an image', () => {
    const wrapper = mount(
      <Image alt='Image' src='https://placehold.it/400x200' />
    )
    const img = wrapper.find('img')
    expect(img.length).to.eql(1)
    expect(img.prop('alt')).to.eql('Image')
    expect(img.prop('src')).to.eql('https://placehold.it/400x200')
  })
})
