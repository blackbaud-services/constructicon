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
    const styles = wrapper.find('MetricGroup').prop('styles')
    expect(styles.root.opacity).to.eql(0.5)
  })
})
