/*
 * @Description:
 * @Author: Chengbotao
 * @Date: 2020-12-04 16:08:34
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-12-04 16:26:09
 * @FilePath: \bee-admin-vue2x\.cz-config.js
 */

module.exports = {
  types: [
    { value: "feat", name: "feat(新功能):     A new feature" },
    { value: "fix", name: "fix(修复):      A bug fix" },
    { value: "docs", name: "docs(文档):     Documentation only changes" },
    {
      value: "style",
      name:
        "style(代码格式(不影响功能,例如空格、分号等格式修正)):    Changes that do not affect the meaning of the code  (white-space, formatting, missing semi-colons, etc)"
    },
    {
      value: "refactor",
      name:
        "refactor(代码重构): A code change that neither fixes a bug nor adds a feature"
    },
    {
      value: "perf",
      name: "perf(改善性能):     A code change that improves performance"
    },
    { value: "test", name: "test(测试):     Adding missing tests" },
    {
      value: "chore",
      name:
        "chore(变更构建流程或辅助工具):    Changes to the build process or auxiliary tools  and libraries such as documentation generation"
    },
    {
      value: "build",
      name:
        "build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)"
    },
    {
      value: "ci",
      name:
        "ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) "
    },
    { value: "revert", name: "revert(代码回退):   Revert to a commit" },
    { value: "WIP", name: "WIP(物料):      Work in progress" }
  ],

  scopes: [
    { name: "accounts" },
    { name: "admin" },
    { name: "exampleScope" },
    { name: "changeMe" }
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body:
      'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?"
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["body"],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
