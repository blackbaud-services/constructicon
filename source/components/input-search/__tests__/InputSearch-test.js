import InputSearch from '..'

describe('InputSearch', () => {
  it('fires the onSearch callback when values are user searches', () => {
    const onSearch = sinon.spy()
    const wrapper = mount(
      <InputSearch
        onSearch={onSearch}
        ResultComponent={() => <div>Result</div>}
      />
    )

    const filter = wrapper.find('Filter')
    const onChange = filter.prop('onChange')
    onChange('test')

    expect(onSearch.callCount).to.eql(1)
    expect(onSearch.firstCall.args[0]).to.eql('test')
  })

  it('hides results if search is empty', () => {
    const Result = () => <div>Result</div>
    const wrapper = mount(
      <InputSearch
        onSearch={() => {}}
        ResultComponent={Result}
        results={[ 'one', 'two', 'three' ]}
      />
    )

    const results = wrapper.find('Result')
    expect(results.length).to.eql(0)
  })

  it('renders results when search is active', () => {
    const Result = () => <div>Result</div>
    const wrapper = mount(
      <InputSearch
        onSearch={() => {}}
        ResultComponent={Result}
        results={[ 'one', 'two', 'three' ]}
      />
    )

    const filter = wrapper.find('Filter')
    const onChange = filter.prop('onChange')
    onChange('foo')

    const results = wrapper.find('Result')
    expect(results.length).to.eql(3)
  })

  it('renders loading spinner if status is fetching', () => {
    const Result = () => <div>Result</div>
    const wrapper = mount(
      <InputSearch
        onSearch={() => {}}
        ResultComponent={Result}
        results={[ 'one', 'two', 'three' ]}
        status='fetching'
      />
    )

    const filter = wrapper.find('Filter')
    const onChange = filter.prop('onChange')
    onChange('foo')

    const icon = wrapper.find('Icon').last()
    expect(icon.prop('name')).to.eql('loading')
  })

  it('renders warning if status is failed', () => {
    const Result = () => <div>Result</div>
    const wrapper = mount(
      <InputSearch
        onSearch={() => {}}
        ResultComponent={Result}
        results={[ 'one', 'two', 'three' ]}
        status='failed'
      />
    )

    const filter = wrapper.find('Filter')
    const onChange = filter.prop('onChange')
    onChange('foo')

    const icon = wrapper.find('Icon').last()
    expect(icon.prop('name')).to.eql('warning')
  })
})
