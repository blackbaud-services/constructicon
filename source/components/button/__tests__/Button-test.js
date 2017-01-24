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
  const getMountedElement = (el) => utils.getMountedElement(el, 'button')

  it('should render a button', () => {
    const button = getMountedElement(<Button>Click Me</Button>)
    expect(button.text()).to.eql('Click Me')
  })

  it('should allow us to set the background color', () => {
    const button = getMountedElement(<Button background='secondary'>Click Me</Button>)
    const rule = utils.findRule(css.rules, button.props().className)
    expect(rule.css).to.contain(`background-color:${colors.secondary}`)
  })

  it('should allow us to set the foreground color', () => {
    const button = getMountedElement(<Button foreground='dark'>Click Me</Button>)
    const rule = utils.findRule(css.rules, button.props().className)
    expect(rule.css).to.contain(`color:${colors.dark}`)
  })

  it('should allow us to set the border', () => {
    const button = getMountedElement(<Button borderWidth={5} borderColor='tint' radius='medium'>Click Me</Button>)
    const rule = utils.findRule(css.rules, button.props().className)
    expect(rule.css).to.contain(`border:5px solid ${colors.tint}`)
    expect(rule.css).to.contain(`border-radius:${rhythm(radiuses.medium)}`)
  })

  it('should allow us to set the font size', () => {
    const button = getMountedElement(<Button size={3}>Click Me</Button>)
    const rule = utils.findRule(css.rules, button.props().className)
    expect(rule.css).to.contain(`font-size:${scale(3)}`)
  })

  it('should allow us to set the font', () => {
    const button = getMountedElement(<Button font='head'>Click Me</Button>, 'button')
    const rule = utils.findRule(css.rules, button.props().className)
    expect(rule.css).to.contain(`font-family:${treatments.head.fontFamily}`)
  })

  it('should allow us to pass in custom styles', () => {
    const button = getMountedElement(<Button styles={{ opacity: 0.5 }}>Click Me</Button>)
    const rule = utils.findRule(css.rules, button.props().className)
    expect(rule.css).to.contain(`opacity:0.5`)
  })
})
