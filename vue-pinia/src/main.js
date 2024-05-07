

import { createApp } from 'vue'
import App from './App.vue'
//1,导入createPinia
import { createPinia } from 'pinia'
//2,执行方法得到一个实例
const pinia = createPinia()
//3,把pinia实例注册到vue(加入到app中)
//把pinia当成一个插件注册到app中
createApp(App).use(pinia).mount('#app')
