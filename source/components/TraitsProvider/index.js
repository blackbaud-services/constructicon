import { Component, PropTypes } from 'react'
import * as defaultTraits from '../../lib/traits'

/**
* Gives us the ability to set our own themes and traits
*/
class TraitsProvider extends Component {
  getChildContext () {
    const finalTraits = Object.keys(defaultTraits).reduce((acc, key) => {
      const defaultTrait = defaultTraits[key]
      const providedTrait = this.props[key]

      const isTraitObject = typeof providedTrait === 'object'
      const combinedTrait = isTraitObject ? {
        ...defaultTrait,
        ...providedTrait
      } : providedTrait || defaultTrait

      return {
        ...acc,
        [key]: combinedTrait
      }
    }, {})

    return {
      traits: finalTraits
    }
  }

  render () {
    return this.props.children
  }
}

TraitsProvider.propTypes = {
  /**
  * The children who will be provided these traits
  */
  children: PropTypes.any.isRequired,

  /**
  * The colors to be added - primary, secondary, tertiary, light, dark or other custom
  */
  colors: PropTypes.object,

  /**
  * The fonts to be added - head, body or other custom
  */
  fonts: PropTypes.object,

  /**
  * The measures (line heights) to be added - small, medium, large or other custom
  */
  measures: PropTypes.object,

  /**
  * The shadows to be added
  */
  shadows: PropTypes.object,

  /**
  * The border radiuses to be added - small, medium, large or other custom
  */
  radiuses: PropTypes.object,

  /**
  * The transitions to be added - easeOut or other custom
  */
  transitions: PropTypes.object,

  /**
  * The font styles to be added - button, head, body or other custom
  */
  treatments: PropTypes.object
}

TraitsProvider.childContextTypes = {
  traits: PropTypes.object
}

export default TraitsProvider
