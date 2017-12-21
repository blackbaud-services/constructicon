import TraitsProvider from '..'
import Button from '../../button'
import { css } from '../../../lib/css'

describe('TraitsProvider', () => {
  it('should allow us to update traits', () => {
    const traits = {
      colors: {
        primary: '#f00',
        secondary: '#0f0',
        tertiary: '#00f'
      }
    }

    const wrapper = mount(
      <TraitsProvider traits={traits}>
        <Button background='tertiary'>Click Me</Button>
      </TraitsProvider>
    )

    const button = wrapper.find('Button')
    const rule = utils.findRule(css.rules, button.prop('classNames').root)
    expect(rule.css).to.contain(`background-color:${traits.colors.tertiary}`)
  })
})
