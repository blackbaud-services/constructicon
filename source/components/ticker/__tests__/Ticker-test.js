import Ticker from '..'
import { css } from '../../../lib/css'
import { colors } from '../../../lib/traits'

describe('Ticker', () => {
  it('renders a simple ticker', () => {
    const wrapper = mount(<Ticker label='Label' items={['Example item']} />)
    const ticker = wrapper.find('Ticker')
    const labelClass = ticker.prop('classNames').label
    const itemsClass = ticker.prop('classNames').items
    expect(wrapper.find(`.${labelClass}`).text()).to.eql('Label')
    expect(wrapper.find(`.${itemsClass}`).text()).to.contain('Example item')
  })

  it('renders items containing elements', () => {
    const wrapper = mount(<Ticker items={[<div>Hello</div>]} />)
    const ticker = wrapper.find('Ticker')
    const itemsClass = ticker.prop('classNames').items
    expect(wrapper.find(`.${itemsClass}`).text()).to.contain('Hello')
  })

  it('allows us to set the background color', () => {
    const wrapper = mount(<Ticker background='secondary' items={['Test']} />)
    const ticker = wrapper.find('Ticker')
    const styles = ticker.prop('styles')
    expect(styles.root.backgroundColor).to.eql(colors.secondary)
  })
})
