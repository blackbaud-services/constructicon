
# Constructicon [![npm](https://img.shields.io/npm/v/constructicon.svg?style=flat-square)](https://www.npmjs.com/package/constructicon)

## Important Links

- [Pipeline](https://app.circleci.com/pipelines/github/blackbaud-services/constructicon)
- [NPM Package](https://www.npmjs.com/package/constructicon)


#### A collection of common patterns used across many Professional Services projects.

The aim of this library is to provide a toolbelt of components, that will allow us to compose sites together more quickly and consistently.

### Style Guide

We are building this with a living style guide to showcase how to use the various components, using React Styleguidist.

The styleguide will be publicly available at [https://blackbaud-services.github.io/constructicon](https://blackbaud-services.github.io/constructicon)

While developing, it is useful to serve the styleguide using `yarn start`, which will hot reload changes as you develop.

### Theming and Flexibility

One of the main challenges is providing the required flexibility.

The `TraitsProvider` component allows us to set our own themes and defaults.

We can manage the look of most components via various props, and even have custom styles injected into them via the `styles` prop.

### Upgrading from 0.* to v1.0

A few breaking changes were introduced in `1.0.0` that need to be considered on the following components:

- [`Container`](https://blackbaud-services.github.io/constructicon/#Container)

  Changes from `styles` object (e.g. `styles = { ... }`) to use nested keys, e.g.

  ```
  {
    root: { ... },
    outer: { ... }
  }
  ```

- [`Modal`](https://blackbaud-services.github.io/constructicon/#Modal)

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

- [`Form`](https://blackbaud-services.github.io/constructicon/#Form)

  Change `styles.form` to `styles.root` for consistency.

- [`ProgressBar`](https://blackbaud-services.github.io/constructicon/#ProgressBar)

  Change `styles.background` to `styles.root` for consistency.

### Upgrading to v2

Constructicon now uses Emotion as it's CSS in JS solution. There are a few small things you will need to do to ensure your CSS is compatible.

- Any child CSS selectors are required to be prefixed with an `&` e.g. `'& > div'`, `&:hover`
- Define your keyframes in their own object and pass them into withStyles, which will then pass your computed keyframes back to your styles function e.g. see components/icon/styles.js
- If you are using your own renderDocument function, renderServerCSS is now a function that takes your server rendered string of HTML, and returns an updated HTML string with the required styles inlined in the markup

## Development

### Scripts

- `yarn` to install dependencies
- `yarn start` to generate and serve style guide
- `yarn test` to run tests (linting and unit tests)
- `yarn run test:lint` to run linting
- `yarn run test:unit` to run unit tests
- `yarn run build` to build for production
- `yarn run build:styleguide` to build the styleguide
- `yarn run build:icons` to minify and prepare the icons to import into `icons.js`. See more below.
- `yarn playground:build` to build webpack for the local development server
- `yarn playground:start` to start the local development server

### Tests

We are aiming to build from the ground up with tests where appropriate, using Mocha, Chai and Enzyme.

To execute the tests, simply run `yarn test`.

### Icons

The icon set is maintained in a [Sketch file](https://github.com/blackbaud-services/constructicon/blob/master/icons.sketch), which is setup to export individual SVG files for each icon to [the icons directory](https://github.com/blackbaud-services/constructicon/tree/master/icons).

After exporting from Sketch, run `yarn run build:icons` to minify SVGs and concatenate into a single file to grab the path data to import into `icons.js`.
