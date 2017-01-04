const path = require('path')

module.exports = {
  title: 'Professional Services Utils',
  components: './source/components/*/index.js',
  template: './styleguide.template.html',
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
