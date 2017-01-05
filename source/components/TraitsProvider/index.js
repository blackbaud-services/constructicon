import { Component, PropTypes } from 'react'
import * as defaultTraits from '../../lib/traits'

/**
* Takes the default traits, and merges in any custom traits for your project and
* also allows us to set defaults for certain traits
*/
class TraitsProvider extends Component {
  getChildContext () {
    const mergedTraits = Object.keys(defaultTraits).reduce((acc, key) => {
      const defaultTrait = defaultTraits[key]
      const providedTrait = this.props[key]

      // if trait is an object, merge it
      // otherwise overwrite it if set
      const isTraitAnObject = typeof providedTrait === 'object'
      const combinedTrait = isTraitAnObject ? {
        ...defaultTrait,
        ...providedTrait
      } : providedTrait || defaultTrait

      // add trait to our merged traits object
      return {
        ...acc,
        [key]: combinedTrait
      }
    }, {})

    return {
      traits: mergedTraits,
      defaults: this.props.defaults
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
  treatments: PropTypes.object,

  /**
  * Set the defaults for given traits - background, foreground, radius etc.
  */
  defaults: PropTypes.object
}

TraitsProvider.childContextTypes = {
  traits: PropTypes.object,
  defaults: PropTypes.object
}

export default TraitsProvider
