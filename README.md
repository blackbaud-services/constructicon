### Scripts

- `yarn` to install dependencies
- `yarn start` to generate and serve style guide
- `yarn run build` to build for production
- `yarn test` to run tests (linting and unit tests)
- `yarn run test:lint` to run linting
- `yarn run test:unit` to run unit tests

### Overview

PS Utils is a collection of common patterns used across many Professional Services projects.

The aim of this library is to provide a toolbelt of components, that will allow us to compose
sites together more quickly and consistently.

### Style Guide

We are building this with a living style guide to showcase how to use the various components, using React Styleguidist.

The styleguide will be publicly available at...

While developing, it is useful to serve the styleguide using `yarn start`, which will hot reload changes as you develop.

### Theming and Flexibility

One of the main challenges is providing the required flexibility.

The `TraitsProvider` component allows us to set our own themes and defaults.

We can manage the look of most components via various props, and even have custom styles injected into them via the `styles` prop.

### Tests

We are aiming to build from the ground up with tests where appropriate, using Mocha, Chai and Enzyme.

To execute the tests, simply run `yarn test`.
