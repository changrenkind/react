# react
react

#### git 提交
```
commitlint.config.js 配置文件可以添加自己的规则，
这里 @commitlint/config-conventional 提供了官方的规则扩展：
build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：文档更新
feat：新增功能
merge：分支合并 Merge branch ? of ?
fix：bug 修复
perf：性能, 体验优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型

```

### .editorconfig
```
# 告诉EditorConfig插件，这是根文件，不用继续往上查找root = true
# 匹配全部文件
[*]
# 结尾换行符，可选"lf"、"cr"、"crlf"
end_of_line = lf
# 在文件结尾插入新行
insert_final_newline = true
# 删除一行中的前后空格
trim_trailing_whitespace = true
# 匹配js和py结尾的文件
[*.{js,py}]
# 设置字符集
charset = utf-8

# 匹配py结尾的文件
[*.py]
# 缩进风格，可选"space"、"tab"
indent_style = space
# 缩进的空格数
indent_size = 4

# 以下匹配，类同
[Makefile]
indent_style = tab# tab的宽度tab_width = 4
# 以下匹配，类同
[lib/**.js]
indent_style = space
indent_size = 2

[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```
###  lint-staged
```

  "lint-staged": {
    // 此处可以配置文件夹和文件类型的范围
    "src/**/*.{jsx,txs,ts,js,json,css,md}": [
      "prettier --write", // 先使用prettier进行格式化
      "eslint --fix", // 再使用eslint进行自动修复
      "git add" // 所有通过的话执行git
    ]
  },
```

### prettierrc
```
{
  "printWidth": 2000, // 一行最大多少字符
  "tabWidth": 2, // tab占用的字符数
  "useTabs": false, // 是否使用tab代替空格
  "semi": true, // 是否每句后都加分号
  "singleQuote": true, // 是否使用单引号
  "jsxSingleQuote": false, // jsx是否使用单引号
  "trailingComma": "all", // 数组尾逗号。 可选 none|es5|all
  "bracketSpacing": true, // {foo: xx}还是{ foo: xx }
  // false: <div
  //          className=""
  //          style={{}}
  //       >
  // true: <div
  //          className=""
  //          style={{}} >
  "jsxBracketSameLine": true, // 看官网// JSX标签闭合位置 默认false
  "arrowParens": "avoid" // 剪头函数参数是否使用（）
}
```