import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App);

app.use(ElementPlus)
    .use(router)
    .mount('#app'); 
