# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:



## Custom Containers

<el-button v-pointer>抖动</el-button>
<el-button v-pointer.ripple type="primary">涟漪效果</el-button>


**Input**

````md
```js{4}
<el-button v-pointer>默认按钮</el-button>
<br/><br/>
<el-button>默认按钮</el-button>
<br/><br/>
<el-button type="primary">主要按钮</el-button>
<br/><br/>
<el-button type="success">成功按钮</el-button>
<br/><br/>
<el-button type="info">信息按钮</el-button>

````

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
