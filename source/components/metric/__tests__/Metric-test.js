import Metric from '..'
import * as icons from '../../icon/icons.js'

describe('Metric', () => {
  it('should render a simple metric', () => {
    const wrapper = mount(
      <Metric label='Supporters' amount='100' icon='star' />
    )
    const metric = wrapper.find('Metric')
    const labelClass = metric.prop('classNames').label
    const amountClass = metric.prop('classNames').amount
    expect(wrapper.find(`.${labelClass.split(' ').join('.')}`).text()).to.eql(
      'Supporters'
    )
    expect(wrapper.find(`.${amountClass.split(' ').join('.')}`).text()).to.eql(
      '100'
    )
  })

  it('should allow us to set the icon', () => {
    const wrapper = mount(
      <Metric label='Supporters' amount='100' icon='star' />
    )
    const starPath = icons.star[0].d
    expect(wrapper.find('svg')).to.exist
    expect(
      wrapper
        .find('path')
        .instance()
        .getAttribute('d')
    ).to.eql(starPath)
  })

  it('should allow us to specify an icon path', () => {
    const iconPath =
      'M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z'
    const wrapper = mount(
      <Metric label='Supporters' amount='100' icon={[{ d: iconPath }]} />
    )
    expect(wrapper.find('svg')).to.exist
    expect(
      wrapper
        .find('path')
        .instance()
        .getAttribute('d')
    ).to.eql(iconPath)
  })
})
