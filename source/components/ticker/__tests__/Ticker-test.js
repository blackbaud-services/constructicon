import Ticker from '..'
import { css } from '../../../lib/css'
import { colors } from '../../../lib/traits'

describe('Ticker', () => {
  it('renders a simple ticker', () => {
    const wrapper = mount(<Ticker label='Label' items={['Example item']} />)
    const ticker = wrapper.find('Ticker').first()
    const labelClass = ticker.prop('classNames').label
    expect(wrapper.find(`.${labelClass}`).text()).to.eql('Label')
  })

  it('allows us to set the background color', () => {
    const wrapper = mount(<Ticker background='secondary' items={['Test']} />)
    const ticker = wrapper.find('Ticker').first()
    const styles = ticker.prop('styles')
    expect(styles.root.backgroundColor).to.eql(colors.secondary)
  })
})
