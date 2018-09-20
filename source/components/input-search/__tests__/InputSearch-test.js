import InputSearch from '..'

describe('InputSearch', () => {
  it('fires the onSearch callback when values are user searches', done => {
    const onSearch = sinon.spy()
    const wrapper = mount(
      <InputSearch
        onSearch={onSearch}
        ResultComponent={() => <div>Result</div>}
      />
    )

    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'test' } })

    // need to wait for callback to debounce
    setTimeout(() => {
      expect(onSearch.callCount).to.eql(1)
      expect(onSearch.firstCall.args[0]).to.eql('test')
      done()
    }, 500)
  })

  it('hides results if search is empty', () => {
    const Result = () => <div>Result</div>
    const wrapper = mount(
      <InputSearch
        onSearch={() => {}}
        ResultComponent={Result}
        results={['one', 'two', 'three']}
      />
    )

    const results = wrapper.find('Result')
    expect(results.length).to.eql(0)
  })

  it('renders results when search is active', done => {
    const Result = () => <div>Result</div>
    const wrapper = mount(
      <InputSearch
        onSearch={() => {}}
        ResultComponent={Result}
        results={['one', 'two', 'three']}
      />
    )

    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'test' } })

    // need to wait for callback to debounce
    setTimeout(() => {
      wrapper.update()
      const results = wrapper.find('Result')
      expect(results.length).to.eql(3)
      done()
    }, 500)
  })

  it('renders loading spinner if status is fetching', done => {
    const Result = () => <div>Result</div>
    const wrapper = mount(
      <InputSearch
        onSearch={() => {}}
        ResultComponent={Result}
        results={['one', 'two', 'three']}
        status='fetching'
      />
    )

    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'test' } })

    setTimeout(() => {
      wrapper.update()
      const icon = wrapper.find('Icon').last()
      expect(icon.prop('name')).to.eql('loading')
      done()
    }, 500)
  })
})
