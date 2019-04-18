// module.exports = {
//   "presets": [
//     ["env",
//       {
//         "modules": false,
//         "targets": {
//           "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
//         }
//       }
//     ],
//     "stage-2"
//   ],
//   "plugins": ["transform-runtime"],
//   "env": {
//     "test": {
//       "presets": ["env", "stage-2"],
//       "plugins": ["transform-es2015-modules-commonjs", "dynamic-import-node"]
//     }
//   }
// }

module.exports = {
  presets: [
    ["@babel/preset-env"]
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import']
  // plugins: ['@babel/plugin-transform-runtime']
}
