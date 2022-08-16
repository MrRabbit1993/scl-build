const path = require('path')
const aliasConfig = require('../config/alias-config')
const resolve = dir => path.join(__dirname, '../', dir)

exports.vueAlias = (alias) => {
  Object.keys(aliasConfig).forEach(key => {
    alias.set(key, resolve(aliasConfig[key]))
  })
}
const getWebpackAlias = () => {
  const result = {}
  Object.keys(aliasConfig).forEach(key => {
    result[key] = resolve(aliasConfig[key])
  })
  return result
}
exports.webpackAlias = getWebpackAlias()

exports.jestAlias = () => {
  const result = {}
  Object.keys(aliasConfig).forEach(key => {
    result[`^${key}/(.*)$`] = `<rootDir>${aliasConfig[key]}/$1`
  })
  return result
}