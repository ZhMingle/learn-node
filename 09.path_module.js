const path = require('path')

console.log(path.sep);

const filePath = path.join('\content','sub', 'text.txt')
console.log("🚀 ~ filePath:", filePath)

const base = path.basename(filePath) // base => filename
console.log("🚀 ~ base:", base)

const absolute = path.resolve(__dirname, 'content', 'sub', 'text.txt')
console.log("🚀 ~ absolute:", absolute)


