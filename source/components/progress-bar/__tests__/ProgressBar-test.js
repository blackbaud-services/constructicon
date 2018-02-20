import ProgressBar from '..'
import { css } from '../../../lib/css'

import {
  colors,
  radiuses,
  rhythm,
  scale,
  treatments
} from '../../../lib/traits'

const minimalComponent = mount(
  <ProgressBar progress={50} alt='<%= progress %>% raised' />
)

describe('ProgressBar', () => {
  it('should render an alt text', () => {
    expect(minimalComponent.text()).to.equal('50% raised')
  })

  it('should render alt text off screen', () => {
    const progressBar = minimalComponent.find('ProgressBar')
    const styles = progressBar.prop('styles')

    expect(styles.alt.position).to.contain('absolute')
    expect(styles.alt.left).to.contain(-1000)
    expect(styles.alt.top).to.contain('auto')
    expect(styles.alt.width).to.contain(1)
    expect(styles.alt.height).to.contain(1)
    expect(styles.alt.overflow).to.contain('hidden')
  })

  it('should render the fill to the progress width', () => {
    const progressBar = minimalComponent.find('ProgressBar')
    const styles = progressBar.prop('styles')
    expect(styles.fill.width).to.eql('50%')
  })

  it('should allow styling via traits', () => {
    const wrapper = mount(
      <ProgressBar
        progress={50}
        alt='<%= progress %>% raised'
        background='secondary'
        fill='dark'
        radius='none'
      />
    )

    const progressBar = wrapper.find('ProgressBar')
    const styles = progressBar.prop('styles')

    expect(styles.fill.background).to.contain(colors.dark)
    expect(styles.fill.borderRadius).to.contain(radiuses.none)
    expect(styles.root.background).to.contain(colors.secondary)
    expect(styles.root.borderRadius).to.contain(radiuses.none)
  })

  it('should allow custom style specification', () => {
    const wrapper = mount(
      <ProgressBar
        progress={50}
        alt='<%= progress %>% raised'
        styles={{
          fill: {
            background: '#123456'
          },
          background: {
            background: '#654321'
          }
        }}
      />
    )

    const progressBar = wrapper.find('ProgressBar')
    const styles = progressBar.prop('styles')
    expect(styles.fill.background).to.eql('#123456')
    expect(styles.background.background).to.eql('#654321')
  })
})
