import PaginationLink from '..'
import { css } from '../../../lib/css'

describe('PaginationLink', () => {
  it('renders a simple pagination link', () => {
    const wrapper = mount(<PaginationLink direction='next' />)

    expect(wrapper.find('button').prop('aria-label')).to.eql('Next')
    expect(wrapper.find('svg')).to.have.length(1)
  })

  it('rotates the icon when direction is prev', () => {
    const wrapper = mount(<PaginationLink direction='prev' />)

    const rule = utils.findRule(
      css.rules,
      wrapper.find('Icon').prop('classNames').root
    )

    expect(wrapper.find('button').prop('aria-label')).to.eql('Previous')
    expect(rule.css).to.contain('transform:rotate(180deg)')
  })
})
