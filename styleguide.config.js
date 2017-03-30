const path = require('path')
const camelCase = require('lodash/camelCase')
const upperFirst = require('lodash/upperFirst')
const { version } = require('./package.json')

module.exports = {
  title: `Constructicon | ${version}`,
  template: './styleguide.template.html',
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.js')
    const name = dirname.split('/').slice(-1)[0]
    const componentName = upperFirst(camelCase(name))

    return 'import ' + componentName + ' from \'constructicon/' + name + '\''
  },
  sections: [
    {
      name: 'Components',
      components: () => ([
        path.resolve(__dirname, 'source/components/accordion', 'index.js'),
        path.resolve(__dirname, 'source/components/button', 'index.js'),
        path.resolve(__dirname, 'source/components/button-group', 'index.js'),
        path.resolve(__dirname, 'source/components/button-social', 'index.js'),
        path.resolve(__dirname, 'source/components/carousel', 'index.js'),
        path.resolve(__dirname, 'source/components/heading', 'index.js'),
        path.resolve(__dirname, 'source/components/icon', 'index.js'),
        path.resolve(__dirname, 'source/components/modal', 'index.js'),
        path.resolve(__dirname, 'source/components/progress-bar', 'index.js'),
        path.resolve(__dirname, 'source/components/rich-text', 'index.js')
      ])
    },
    {
      name: 'Forms',
      components: () => ([
        path.resolve(__dirname, 'source/components/filter', 'index.js'),
        path.resolve(__dirname, 'source/components/input-field', 'index.js'),
        path.resolve(__dirname, 'source/components/input-select', 'index.js'),
        path.resolve(__dirname, 'source/components/search-form', 'index.js')
      ])
    },
    {
      name: 'Layout',
      components: () => ([
        path.resolve(__dirname, 'source/components/container', 'index.js'),
        path.resolve(__dirname, 'source/components/grid', 'index.js'),
        path.resolve(__dirname, 'source/components/grid-column', 'index.js'),
        path.resolve(__dirname, 'source/components/section', 'index.js')
      ])
    },
    {
      name: 'Pages',
      components: () => ([
        path.resolve(__dirname, 'source/components/leaderboard', 'index.js'),
        path.resolve(__dirname, 'source/components/leaderboard-item', 'index.js'),
        path.resolve(__dirname, 'source/components/metric', 'index.js'),
        path.resolve(__dirname, 'source/components/metric-group', 'index.js'),
        path.resolve(__dirname, 'source/components/search-results', 'index.js'),
        path.resolve(__dirname, 'source/components/search-result', 'index.js')
      ])
    },
    {
      name: 'Theming',
      components: () => ([
        path.resolve(__dirname, 'source/components/traits-provider', 'index.js')
      ])
    },
    {
      name: 'Higher Order Components',
      sections: [
        {
          name: 'withForm',
          content: 'source/components/with-form/Readme.md'
        },
        {
          name: 'withToggle',
          content: 'source/components/with-toggle/Readme.md'
        }
      ]
    }
  ],
  updateWebpackConfig: (webpackConfig) => {
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'source'),
        loader: 'babel'
      }, {
        test: /\.css$/,
        include: path.join(__dirname, 'node_modules', 'minimal.css'),
        loader: 'style!css?modules&importLoaders=1'
      }
    )

    webpackConfig.entry.push(path.join(__dirname, 'node_modules/minimal.css/minimal.css'))

    return webpackConfig
  }
}
