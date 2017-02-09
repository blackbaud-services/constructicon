import Search from '..'
import { css } from '../../../lib/css'

import {
  colors,
  radiuses,
  rhythm,
  scale,
  treatments
} from '../../../lib/traits'

describe('Search', () => {
  it('should render a Filter component', () => {
    const element = utils.getMountedElement(<Search onChange={() => {}} />, 'Filter')
		expect(element.length).to.equal(1)
  })

  it('should render a result', () => {
    const element = utils.getMountedElement(<Search
      onChange={() => {}}
      results={[
        {
          title: 'Cat',
          subtitle: 'Dog'
        }
      ]}
    />, 'Result')
		expect(element.length).to.equal(1)
  })

  it('should render a loading indicator', () => {
    const element = mount(<Search
      onChange={() => {}}
      status='loading'
    />)

    const icon = element.findWhere(n => n.name() === 'Icon' && n.prop('name') === 'loading')
		expect(icon.length).to.equal(1)
  })

  it('should render an empty message', () => {
    const element = mount(<Search
      onChange={() => {}}
      status='noResult'
    />)

    const message = element.findWhere(n => n.prop('children') === 'No results found.')
    expect(message.length).to.equal(1)
  })

  it('should render an empty message', () => {
    const element = mount(<Search
      onChange={() => {}}
      status='error'
    />)

    const message = element.findWhere(n => n.prop('children') === 'Something went wrong!')
    expect(message.length).to.equal(1)
  })

  describe('custom styles', () => {
    it('should allow us to style the modal button', () => {
      const element = mount(<Search
        onChange={() => {}}
        styles={{
          modalButton: {
            opacity: '0.5'
          }
        }}
        modalTrigger='Foo'
      />)

      const modalTrigger = element.find('Button')
      expect(modalTrigger.prop('styles').root.opacity).to.eql('0.5')
    })

    it('should allow us to style the Modal component', () => {
      const element = mount(<Search
        onChange={() => {}}
        styles={{
          modal: {
            wrapper: {
              container: {
                opacity: '0.5'
              }
            }
          }
        }}
        modalTrigger='Foo'
        toggled={true}
      />)

      const modal = element.find('Modal')
      const styles = modal.nodes[0].props.styles.wrapper.container
      expect(styles.opacity).to.eql('0.5')
    })

    it('should allow us to style the Filter component', () => {
      const element = mount(<Search
        onChange={() => {}}
        styles={{
          filter: {
            root: {
              opacity: '0.5'
            }
          }
        }}
      />)

      const filter = element.find('Filter')
      expect(filter.prop('styles').root.opacity).to.eql('0.5')
    })

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
