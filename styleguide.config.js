const path = require('path')
const { version } = require('./package.json')

module.exports = {
  title: `Constructicon | ${version}`,
  template: './styleguide.template.html',
  getComponentPathLine: function (componentPath) {
    var dirname = path.dirname(componentPath, '.js')
    var name = dirname.split('/').slice(-1)[0]

    return 'import ' + name + ' from \'constructicon/' + name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '\''
  },
  sections: [
    {
      name: 'Components',
      components: () => ([
        path.resolve(__dirname, 'source/components/accordion', 'index.js'),
        path.resolve(__dirname, 'source/components/button', 'index.js'),
        path.resolve(__dirname, 'source/components/button-group', 'index.js'),
        path.resolve(__dirname, 'source/components/button-social', 'index.js'),
        path.resolve(__dirname, 'source/components/heading', 'index.js'),
        path.resolve(__dirname, 'source/components/icon', 'index.js'),
        path.resolve(__dirname, 'source/components/modal', 'index.js'),
        path.resolve(__dirname, 'source/components/rich-text', 'index.js')
      ])
    },
    {
      name: 'Forms',
      components: () => ([
        path.resolve(__dirname, 'source/components/filter', 'index.js')
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
      name: 'everydayhero',
      components: () => ([
        path.resolve(__dirname, 'source/components/leaderboard', 'index.js'),
        path.resolve(__dirname, 'source/components/leaderboard-item', 'index.js')
      ])
    },
    {
      name: 'Theming',
      components: () => ([
        path.resolve(__dirname, 'source/components/traits-provider', 'index.js')
      ])
    }
  ],
  updateWebpackConfig: (webpackConfig) => {
   webpackConfig.module.loaders.push(
     {
       test: /\.jsx?$/,
       include: path.join(__dirname, 'source'),
       loader: 'babel'
     },
     {
       test: /\.css$/,
       include: path.join(__dirname, 'node_modules', 'minimal.css'),
       loader: 'style!css?modules&importLoaders=1'
     }
   )

   webpackConfig.entry.push(path.join(__dirname, 'node_modules/minimal.css/minimal.css'));

   return webpackConfig
  }
}
