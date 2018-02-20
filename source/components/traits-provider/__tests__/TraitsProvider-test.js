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
    const styles = button.prop('styles')
    expect(styles.root.backgroundColor).to.eql(traits.colors.tertiary)
  })
})
