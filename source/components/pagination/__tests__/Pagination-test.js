import Pagination from '..'

describe('Pagination', () => {
  const ChildComponent = props => null

  it('chunks an array into arrays of correct length', () => {
    const toPaginate = new Array(10)
    const wrapper = mount(
      <Pagination toPaginate={toPaginate} max={3}>
        {props => <ChildComponent {...props} />}
      </Pagination>
    )

    const childProps = wrapper.find(ChildComponent).props()

    expect(childProps.currentPage.length).to.eql(3)
    expect(childProps.allPages.length).to.eql(4)
  })

  it('disables controls when only one page exists', () => {
    const toPaginate = new Array(10)
    const wrapper = mount(
      <Pagination toPaginate={toPaginate} max={20}>
        {props => <ChildComponent {...props} />}
      </Pagination>
    )

    const childProps = wrapper.find(ChildComponent).props()

    expect(childProps.isPaginated).to.eql(false)
    expect(childProps.canNext).to.eql(false)
    expect(childProps.next).to.eql(null)
    expect(childProps.canPrev).to.eql(false)
    expect(childProps.prev).to.eql(null)
  })

  it('allows switching between pages', () => {
    const toPaginate = new Array(10)

    const wrapper = mount(
      <Pagination toPaginate={toPaginate} max={5}>
        {props => <ChildComponent {...props} />}
      </Pagination>
    )

    expect(wrapper.find(ChildComponent).props().pageIndex).to.eq(0)
    wrapper
      .find(ChildComponent)
      .props()
      .next()
    wrapper.update()

    expect(wrapper.find(ChildComponent).props().pageIndex).to.eq(1)
    wrapper
      .find(ChildComponent)
      .props()
      .prev()
    wrapper.update()

    expect(wrapper.find(ChildComponent).props().pageIndex).to.eq(0)
  })
})
