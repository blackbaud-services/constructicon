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

  it('should allow us to pass in custom styles', () => {
    const element = utils.getMountedElement(
      <Search
        onChange={() => {}}
        styles={{ wrapper: { opacity: 0.5 }}}
      />, 'Search')

    const rule = utils.findRule(css.rules, element.props().classNames.wrapper)
    expect(rule.css).to.contain(`opacity:0.5`)
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
})
