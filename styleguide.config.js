const path = require('path')
const camelCase = require('lodash/camelCase')
const upperFirst = require('lodash/upperFirst')
const { version } = require('./package.json')

module.exports = {
  title: `Constructicon | ${version}`,
  template: './styleguide.template.html',
  theme: {
    color: {
      base: '#333',
    	light: '#999',
    	lightest: '#ccc',
    	link: '#fff',
    	linkHover: '#fff',
    	border: 'rgba(0,0,0,0.1)',
    	name: '#7f9a44',
    	type: '#b77daa',
    	error: '#c00',
    	baseBackground: '#fff',
    	codeBackground: '#f5f5f5',
    	sidebarBackground: '#1bab6b'
    }
  },
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
        path.resolve(__dirname, 'source/components/flippy', 'index.js'),
        path.resolve(__dirname, 'source/components/heading', 'index.js'),
        path.resolve(__dirname, 'source/components/icon', 'index.js'),
        path.resolve(__dirname, 'source/components/loading', 'index.js'),
        path.resolve(__dirname, 'source/components/meta', 'index.js'),
        path.resolve(__dirname, 'source/components/modal', 'index.js'),
        path.resolve(__dirname, 'source/components/progress-bar', 'index.js'),
        path.resolve(__dirname, 'source/components/rich-text', 'index.js')
      ])
    },
    {
      name: 'Forms',
      components: () => ([
        path.resolve(__dirname, 'source/components/filter', 'index.js'),
        path.resolve(__dirname, 'source/components/form', 'index.js'),
        path.resolve(__dirname, 'source/components/input-field', 'index.js'),
        path.resolve(__dirname, 'source/components/input-select', 'index.js'),
        path.resolve(__dirname, 'source/components/input-date', 'index.js'),
        path.resolve(__dirname, 'source/components/input-search', 'index.js'),
        path.resolve(__dirname, 'source/components/input-validations', 'index.js'),
        path.resolve(__dirname, 'source/components/label', 'index.js'),
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
      name: 'Scripts',
      components: () => ([
        path.resolve(__dirname, 'source/components/typekit', 'index.js')
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
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: path.join(__dirname, 'source'),
          loader: 'babel'
        }, {
          test: /\.css$/,
          include: path.join(__dirname, 'node_modules', 'minimal.css'),
          loader: 'style!css?modules&importLoaders=1'
        }
      ]
    },
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
    entry: [
      path.join(__dirname, 'node_modules/minimal.css/minimal.css')
    ]
  }
}
