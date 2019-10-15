const inquirer = require('inquirer');
const program = require('commander');
const fs = require('fs-extra')
const path = require('path')
const genTemplate = require('./temp.js')
program.parse(process.argv);
const componentsName = program.args[0]
const arr = ['弹层类', '基础组件', '表单类']

const NAV_JSON_PATH = 'examples/router/nav.json'
// 更新json
const addNewComponentsToJSON = async function(index, componentsName) {
  let navObj = await fs.readJson(NAV_JSON_PATH, { throws: false })
  navObj[index].list.push({
    "path": `/${componentsName}`,
    "name": componentsName
  })
  await fs.writeJson(NAV_JSON_PATH, navObj, { spaces: 2 })
}

inquirer
  .prompt([{
    type: 'rawlist',
    name: 'type',
    message: '这是个什么类型的组件?',
    choices: arr,
    filter: function(val) {
      return val
    }
  }, {
    type: 'input',
    name: 'componentsName',
    message: "新增组件名",
    when: !componentsName
  }])
  .then(answers => {
    const cname = componentsName || answers.componentsName
    genTemplate(cname)
    addNewComponentsToJSON(arr.indexOf(answers.type), cname)
  });
