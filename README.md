
# Constructicon &nbsp; [![Build status](https://badge.buildkite.com/670ae004c2a2a3b10f5d875b5093edcb90c18c6a1e7855939e.svg?branch=master&style=flat-square)](https://buildkite.com/everyday-hero/constructicon) &nbsp; [![npm](https://img.shields.io/npm/v/constructicon.svg?style=flat-square)](https://www.npmjs.com/package/constructicon)

#### A collection of common patterns used across many Professional Services projects.

The aim of this library is to provide a toolbelt of components, that will allow us to compose
sites together more quickly and consistently.

### Style Guide

We are building this with a living style guide to showcase how to use the various components, using React Styleguidist.

The styleguide will be publicly available at [https://everydayhero.github.io/constructicon](https://everydayhero.github.io/constructicon)

While developing, it is useful to serve the styleguide using `yarn start`, which will hot reload changes as you develop.

### Theming and Flexibility

One of the main challenges is providing the required flexibility.

The `TraitsProvider` component allows us to set our own themes and defaults.

We can manage the look of most components via various props, and even have custom styles injected into them via the `styles` prop.

### Updgrading from 0.* to v1.0

A few breaking changes were introduced in `1.0.0` that need to be considered on the following components:

- [`Container`](https://everydayhero.github.io/constructicon/#Container)

  Changes from `styles` object (e.g. `styles = { ... }`) to use nested keys, e.g.

  ```
  {
    root: { ... },
    outer: { ... }
  }
  ```

- [`Modal`](https://everydayhero.github.io/constructicon/#Modal)

  Removed nested `styles` object weirdness. So instead of:

  ```
  {
    wrapper: {
      content: { ... },
      overlay: { ... }
    },
    container: { ... },
    close: { ... }
  }
  ```

  It is now:

  ```
  {
    content: { ... },
    overlay: { ... },
    container: { ... },
    close: { ... }
  }
  ```

- [`Form`](https://everydayhero.github.io/constructicon/#Form)

  Change `styles.form` to `styles.root` for consistency.

- [`ProgressBar`](https://everydayhero.github.io/constructicon/#ProgressBar)

  Change `styles.background` to `styles.root` for consistency.



## Development


### Scripts

- `yarn` to install dependencies
- `yarn start` to generate and serve style guide
- `yarn test` to run tests (linting and unit tests)
- `yarn run test:lint` to run linting
- `yarn run test:unit` to run unit tests
- `yarn run build` to build for production
- `yarn run build:styleguide` to build the styleguide

### Tests

We are aiming to build from the ground up with tests where appropriate, using Mocha, Chai and Enzyme.

To execute the tests, simply run `yarn test`.
