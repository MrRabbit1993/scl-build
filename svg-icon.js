const path = require('path')
exports.svgIconRule = (config, iconDir) => {
  config.module.rule('svg').exclude.add(path.resolve(__dirname, iconDir))
  config.module
    .rule('svg-icon')
    .test(/\.svg$/)
    .include.add(path.resolve(__dirname, iconDir))
    .end() // end用于退回到include
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
}
