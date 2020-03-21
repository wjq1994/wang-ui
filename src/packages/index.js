// 所有的组件的入口

import Button from './button/button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button/button-group.vue';
import Row from './layout/row.vue';
import Col from './layout/col.vue';
const install = (Vue) =>{
    Vue.component(Button.name,Button);
    Vue.component(Icon.name,Icon);
    Vue.component(ButtonGroup.name,ButtonGroup);
    Vue.component(Row.name,Row);
    Vue.component(Col.name,Col);
}

// 有可能组件会通过script标签的方式引入 
// <script src="zhu-ui"></script>

if(typeof window.Vue !== 'undefined'){
    install(Vue); // 全局直接通过script 引用的方式会默认调用install方法
}

export default {
    install
}