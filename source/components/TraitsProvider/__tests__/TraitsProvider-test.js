import TraitsProvider from '..'
import Button from '../../Button'
import { css } from '../../../lib/css'

describe('TraitsProvider', () => {
  const getMountedElement = (el) => utils.getMountedElement(el, 'button')

  it('should allow us to update traits', () => {
    const traits = {
      colors: {
        primary: '#f00',
        secondary: '#0f0',
        tertiary: '#00f'
      }
    }

    const button = getMountedElement(
      <TraitsProvider traits={traits}>
        <Button background='tertiary'>Click Me</Button>
      </TraitsProvider>
    )

    const rule = utils.findRule(css.rules, button.props().className)
    expect(rule.css).to.contain(`background-color:${traits.colors.tertiary}`)
  })
})
