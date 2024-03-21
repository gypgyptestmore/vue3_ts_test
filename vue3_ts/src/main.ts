import { createApp } from 'vue'//引入 createApp 创建应用
import './style.css'
import App from './App.vue'//引入根组件·
import router from './router';//引入路由

const app = createApp(App)//创建应用
app.use(router)//使用路由
app.mount('#app')//挂载应用到实例
  