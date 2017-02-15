import Search from '..'
import SearchResult from '../../search-result'

describe('Search', () => {
  it('should render a result', () => {
    const element = mount(
      <Search>
        <SearchResult
          title='Cat'
          subtitle='Feline'
        />
      </Search>
    )

    const searchResults = element.find('SearchResults')
    expect(searchResults.length).to.equal(1)
  })

  it('should render a loading indicator', () => {
    const element = utils.getMountedElement(<Search
      loading
    />, 'Loading')

    expect(element.length).to.equal(1)
  })

  it('should render an error indicator', () => {
    const element = utils.getMountedElement(<Search
      error
    />, 'Error')

    expect(element.length).to.equal(1)
  })

  it('should render an empty results indicator', () => {
    const element = utils.getMountedElement(<Search empty />, 'Empty')

    expect(element.length).to.equal(1)
  })

  describe('custom styles', () => {
    it('should allow us to style the Result components', () => {
      const element = mount(<Search
        onChange={() => {}}
        styles={{
          result: {
            wrapper: {
              opacity: '0.5'
            }
          }
        }}
        results={[
          {
            title: 'Cat',
            subtitle: 'Dog'
          }
        ]}
      />)

      const result = element.find('Result')
      expect(result.prop('styles').wrapper.opacity).to.eql('0.5')
    })
  })
})
