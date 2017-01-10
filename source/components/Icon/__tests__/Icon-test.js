import Icon from '..'
import * as icons from '../icons'
import { css } from '../../../lib/css'
import { colors } from '../../../lib/traits'

describe('Icon', () => {
  it('should render an icon', () => {
    const wrapper = mount(<Icon name='facebook' />)
    const facebookPath = icons.facebook[0].d
    expect(wrapper.find('svg')).to.exist
    expect(wrapper.find('path').node.getAttribute('d')).to.eql(facebookPath)
  })

  it('should set the size of the icon', () => {
    const wrapper = mount(<Icon name='facebook' size={2} />)
    const rule = utils.findRule(css.rules, wrapper.find('svg').prop('className'))
    expect(rule.css).to.contain('width:2em')
    expect(rule.css).to.contain('height:2em')
  })

  it('should set the default color of the icon', () => {
    const wrapper = mount(<Icon name='facebook' />)
    const rule = utils.findRule(css.rules, wrapper.find('svg').prop('className'))
    expect(rule.css).to.contain('fill:currentColor')
  })

  it('should set the color of the icon to a theme color', () => {
    const wrapper = mount(<Icon name='facebook' color='primary' />)
    const rule = utils.findRule(css.rules, wrapper.find('svg').prop('className'))
    expect(rule.css).to.contain(`fill:${colors.primary}`)
  })

  it('should set the color of the icon to a custom color', () => {
    const wrapper = mount(<Icon name='facebook' color='#777' />)
    const rule = utils.findRule(css.rules, wrapper.find('svg').prop('className'))
    expect(rule.css).to.contain(`fill:#777`)
  })

  it('should spin the icon if set', () => {
    const wrapper = mount(<Icon name='loading' spin />)
    const rule = utils.findRule(css.rules, wrapper.find('svg').prop('className'))
    expect(rule.css).to.contain(`animation:spin`)
  })

  it('should rotate the icon if set', () => {
    const wrapper = mount(<Icon name='loading' rotate={90} />)
    const rule = utils.findRule(css.rules, wrapper.find('svg').prop('className'))
    expect(rule.css).to.contain('transform:rotate(90deg)')
  })

  it('should apply custom styles', () => {
    const wrapper = mount(<Icon name='loading' styles={{ opacity: 0.5 }} />)
    const rule = utils.findRule(css.rules, wrapper.find('svg').prop('className'))
    expect(rule.css).to.contain('opacity:0.5')
  })
})
