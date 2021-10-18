const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(`  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`请使用正确的提交格式,参考agular或者vue`)}\n\n`)
  process.exit(1)
}
