// Vue3 框架提供的createApp方法 用来创建应用实例
import { createApp } from 'vue'
// 引入清除样式
import '@/style/reset.scss'
// 引入根组件 App
import App from '@/App.vue'

// 引入全局组件--顶部、底部全都是全局组件
import HospitalTop from '@/components/hospital_top/index.vue';
import HospitalBottom from '@/components/hospital_bottom/index.vue';
// 引入vue-router插件 并安装
import router from '@/router/index.ts';
// 引入 ElementPlus 组件  index.css一定不能少!!!
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
// 引入国际化配置
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 创建 应用实例 
const app = createApp(App)
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);

// 安装vue-router
app.use(router);
//安装element-plus插件
app.use(ElementPlus, {
    locale: zhCn,
})
// 将应用实例挂载到挂载点上
app.mount('#app')
