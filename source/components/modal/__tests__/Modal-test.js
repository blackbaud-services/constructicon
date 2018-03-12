import Modal from '..'

/*
  Difficult to test modal itself as it is mounted as a portal component outside the scope
  of the originally mounted component

  The plan is to test that what we are forwarding through to React-Modal is what
  we expect, and then we can rely on React-Modal doing it's thing as expected
*/

describe('Modal', () => {
  it('should open a simple modal', () => {
    const wrapper = mount(
      <Modal isOpen={true} contentLabel='Modal'>
        <div className='my-content'>My modal content</div>
      </Modal>
    )
    const reactModal = wrapper.find('Modal').getElements()[1]
    expect(reactModal.props.isOpen).to.eql(true)
    expect(reactModal.props.contentLabel).to.eql('Modal')
    expect(reactModal.props.children.length).to.eql(2)
    expect(reactModal.props.children[0].type).to.eql('button')
    expect(reactModal.props.children[1].type).to.eql('div')
  })

  it('should allow us to set the close icon', () => {
    const wrapper = mount(
      <Modal isOpen={true} closeIcon='Close' contentLabel='Modal'>
        <div className='my-content'>My modal content</div>
      </Modal>
    )
    const reactModal = wrapper.find('Modal').getElements()[1]
    const closeButton = reactModal.props.children[0]
    expect(closeButton.props.children).to.eql('Close')
  })

  it('should not show the modal if the isOpen flag is false', () => {
    const wrapper = mount(
      <Modal isOpen={false} contentLabel='Modal'>
        <div className='my-content'>My modal content</div>
      </Modal>
    )
    const reactModal = wrapper.find('Modal').getElements()[1]
    expect(reactModal.props.isOpen).to.eql(false)
  })
})
