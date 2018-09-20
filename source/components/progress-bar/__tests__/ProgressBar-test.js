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
    const alt = utils.findRule(css.rules, progressBar.prop('classNames').alt)

    expect(alt.css).to.contain('position:absolute')
    expect(alt.css).to.contain('left:-10000px')
    expect(alt.css).to.contain('top:auto')
    expect(alt.css).to.contain('width:1px')
    expect(alt.css).to.contain('height:1px')
    expect(alt.css).to.contain('overflow:hidden')
  })

  it('should render the fill to the progress width', () => {
    const progressBar = minimalComponent.find('ProgressBar')
    const rule = utils.findRule(css.rules, progressBar.prop('classNames').fill)
    expect(rule.css).to.contain('width:50%')
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
    const fill = utils.findRule(css.rules, progressBar.prop('classNames').fill)
    const root = utils.findRule(css.rules, progressBar.prop('classNames').root)

    expect(fill.css).to.contain(`background:${colors['dark']}`)
    expect(fill.css).to.contain(`border-radius:${radiuses['none']}`)
    expect(root.css).to.contain(`background:${colors['secondary']}`)
    expect(root.css).to.contain(`border-radius:${radiuses['none']}`)
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
    const fill = utils.findRule(css.rules, progressBar.prop('classNames').fill)
    const background = utils.findRule(
      css.rules,
      progressBar.prop('classNames').background
    )

    expect(fill.css).to.contain('background:#123456')
    expect(background.css).to.contain('background:#654321')
  })
})
