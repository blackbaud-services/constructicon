import MetricGroup from '..'
import Metric from '../../metric'
import { css } from '../../../lib/css'

describe('MetricGroup', () => {
  it('should render a simple metric group', () => {
    const wrapper = mount(
      <MetricGroup>
        <Metric label='Supporters' amount='100' icon='star' />
        <Metric label='Supporters' amount='100' icon='star' />
      </MetricGroup>
    )
    expect(wrapper.find('Metric')).to.have.length(2)
  })

  it('should allow us to pass in custom styles', () => {
    const wrapper = mount(
      <MetricGroup styles={{ opacity: 0.5 }}>
        <Metric label='Supporters' amount='100' icon='star' />
        <Metric label='Supporters' amount='100' icon='star' />
      </MetricGroup>
    )
    const rule = utils.findRule(
      css.rules,
      wrapper.find('MetricGroup').prop('classNames').root
    )
    expect(rule.css).to.contain(`opacity:0.5`)
  })
})
