import SearchResult from '..'
import Button from '../../button'

describe('SearchResult', () => {
  it('should render a simple seach result item', () => {
    const wrapper = mount(
      <SearchResult
        title='Name'
        subtitle='Charity'
        image='http://placehold.it/250x250'
        cta='Support'
      />
    )
    const item = wrapper.find('SearchResult')
    const image = wrapper.find('img')
    const button = wrapper.find('Button')
    expect(item.length).to.eql(1)
    expect(button.length).to.eql(1)
    expect(image.length).to.eql(1)
    expect(image.prop('src')).to.eql('http://placehold.it/250x250')
  })
})
