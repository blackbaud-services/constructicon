import Button from '..'
import { css } from '../../../lib/css'

import {
  colors,
  radiuses,
  rhythm,
  scale,
  treatments
} from '../../../lib/traits'

describe('Button', () => {
  const getMountedElement = el => utils.getMountedElement(el, 'button')
  const getMountedComponent = el => utils.getMountedElement(el, 'Button')
  const getClassName = className => className.replace('c11n-button ', '')

  it('should render a button', () => {
    const button = getMountedElement(<Button>Click Me</Button>)
    expect(button.text()).to.eql('Click Me')
  })

  it('should allow us to set the background color', () => {
    const button = getMountedComponent(
      <Button background='secondary'>Click Me</Button>
    )
    const styles = button.prop('styles')
    expect(styles.root.backgroundColor).to.eql(colors.secondary)
  })

  it('should allow us to set the foreground color', () => {
    const button = getMountedComponent(
      <Button foreground='dark'>Click Me</Button>
    )
    const styles = button.prop('styles')
    expect(styles.root.color).to.eql(colors.dark)
  })

  it('should allow us to set the border', () => {
    const button = getMountedComponent(
      <Button borderWidth={5} borderColor='tint' radius='medium'>
        Click Me
      </Button>
    )
    const styles = button.prop('styles')
    expect(styles.root.border).to.eql(`5px solid ${colors.tint}`)
    expect(styles.root.borderRadius).to.eql(rhythm(radiuses.medium))
  })

  it('should allow us to set the font size', () => {
    const button = getMountedComponent(<Button size={3}>Click Me</Button>)
    const styles = button.prop('styles')
    expect(styles.root.fontSize).to.eql(scale(3))
  })

  it('should allow us to set the font', () => {
    const button = getMountedComponent(
      <Button font='head'>Click Me</Button>,
      'button'
    )
    const styles = button.prop('styles')
    expect(styles.root.fontFamily).to.eql(treatments.head.fontFamily)
  })

  it('should allow us to pass in custom styles', () => {
    const button = getMountedComponent(
      <Button styles={{ opacity: 0.5 }}>Click Me</Button>
    )
    const styles = button.prop('styles')
    expect(styles.root.opacity).to.eql(0.5)
  })
})
