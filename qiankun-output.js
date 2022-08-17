const { name } = require('../package.json') // package.json的name需注意与主应用一致
// 测试发现需要剔除此配置会影响 externals 的配置 此处需要特别注意
/**
 * @deprecated
 * @param output
 */
exports.qiankunOutput = output => {
  output.library = `${name}-[name]`
  output.libraryTarget = 'umd'
  output.jsonpFunction = `webpackJsonp_${name}`
}
