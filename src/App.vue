<template>
  <div id="app">
    <!-- 默认按钮 -->
    <wang-button>默认按钮</wang-button>
    <br>
    <!-- 带类型的按钮 -->
    <wang-button type="primary">主要按钮</wang-button>
    <wang-button type="warning">警告按钮</wang-button>
    <wang-button type="danger">危险按钮</wang-button>
    <wang-button type="success">成功按钮</wang-button>
    <wang-button type="info">信息按钮</wang-button>
    <br>
    <!-- 带icon的按钮 -->
    <wang-button type="info" icon="search">信息按钮</wang-button>
    <wang-button type="primary" icon="search"></wang-button>
    <wang-button type="success" icon="search" icon-position="right">内容</wang-button>
    <br>
    <!-- loading按钮 -->
    <wang-button type="success" loading>加载中</wang-button>
    <br>
    <!-- 触发事件 -->
    <wang-button type="success" @click="fn">触发事件</wang-button>
    <br>

    <wang-button-group>
      <wang-button  icon="left" icon-position="left">上一页</wang-button>
      <wang-button  icon="right" icon-position="right">下一页</wang-button>
    </wang-button-group>

    <wang-icon icon="search"></wang-icon>
    <wang-icon icon="edit"></wang-icon>
    <br>

    <br>
    <wang-row>
      <wang-col :span="12" class="red">5666</wang-col>
      <wang-col :span="12" class="green">6666</wang-col>
    </wang-row>

    <wang-row>
      <wang-col :span="6" class="red">5666</wang-col>
      <wang-col :span="12" class="green" :offset="6">6666</wang-col>
    </wang-row>
    <wang-row :gutter="20">
      <wang-col :span="12" class="red">5666</wang-col>
      <wang-col :span="12" class="green">6666</wang-col>
    </wang-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    fn(e){
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
.red {
  background: red;
}
.green {
  background: green;
}
</style>
