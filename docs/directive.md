## Vue 指令 v-poninter
<Directive > </Directive>12
_下方代码块将会被解析为 vue 组件并展示_

```vue preview
<template>
<div class="flex flex-column">
    <div class="flex">
       <div>
         <img class="v_poninter_scale" src="/img/mountain.jpg" />
       </div>
        <div  class="v_poninter_scale VPButton " >抖动效果</div>
    </div>

    <div class="flex">
          <div  v-pointer.ripple>
                <img src="/img/mountain.jpg" ></img>
                </div>
          <div v-pointer.ripple class="VPButton" >涟漪效果</div>
    </div>
    <div class="flex">
            <div  v-pointer.wave>  <img src="/img/mountain.jpg" ></img></div>
    <div v-pointer.wave  class="VPButton wave" >波纹效果</div>
    </div>
</div>
</template>


```

**Input**

```js
<el-button v-pointer>默认按钮</el-button>
<br/><br/>
<el-button>默认按钮</el-button>
<br/><br/>
<el-button type="primary">主要按钮</el-button>
<br/><br/>
<el-button type="success">成功按钮</el-button>
<br/><br/>
<el-button type="info">信息按钮</el-button>

```

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
