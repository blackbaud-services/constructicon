import SearchResults from '..'
import SearchResult from '../../search-result'

describe('SearchResult', () => {
  const defaultItem = (
    <SearchResult
      title='Name'
      subtitle='Charity'
      image='http://placehold.it/250x250'
      children={<div>Support</div>}
    />
  )

  it('should render simple search results', () => {
    const wrapper = mount(<SearchResults>{defaultItem}</SearchResults>)
    const item = wrapper.find('SearchResult')
    expect(item.length).to.eql(1)
  })

  it('should show a loading icon if results loading', () => {
    const wrapper = mount(<SearchResults loading>{defaultItem}</SearchResults>)
    const item = wrapper.find('SearchResult')
    const icon = wrapper.find('Icon')
    expect(item.length).to.eql(0)
    expect(icon.length).to.eql(1)
  })

  it('should show an error message if error specified', () => {
    const wrapper = mount(<SearchResults error>{defaultItem}</SearchResults>)
    const item = wrapper.find('SearchResult')
    const icon = wrapper.find('Icon')
    expect(item.length).to.eql(0)
    expect(icon.length).to.eql(1)
  })
})
