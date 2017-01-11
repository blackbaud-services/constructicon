const path = require('path')

module.exports = {
  title: 'PS Components',
  template: './styleguide.template.html',
  getComponentPathLine: function (componentPath) {
    var dirname = path.dirname(componentPath, '.js')
    var name = dirname.split('/').slice(-1)[0]
    return 'import { ' + name + ' } from \'ps-components\''
  },
  sections: [
    {
      name: 'Components',
      components: () => ([
        path.resolve(__dirname, 'source/components/Accordion', 'index.js'),
        path.resolve(__dirname, 'source/components/Button', 'index.js'),
        path.resolve(__dirname, 'source/components/ButtonGroup', 'index.js'),
        path.resolve(__dirname, 'source/components/Icon', 'index.js'),
        path.resolve(__dirname, 'source/components/RichText', 'index.js')
      ])
    },
    {
      name: 'Layout',
      components: () => ([
        path.resolve(__dirname, 'source/components/Container', 'index.js'),
        path.resolve(__dirname, 'source/components/Grid', 'index.js'),
        path.resolve(__dirname, 'source/components/GridColumn', 'index.js'),
        path.resolve(__dirname, 'source/components/Section', 'index.js')
      ])
    },
    {
      name: 'Theming',
      components: () => ([
        path.resolve(__dirname, 'source/components/TraitsProvider', 'index.js')
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
