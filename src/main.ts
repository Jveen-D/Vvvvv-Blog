import { createApp } from 'vue';
import router from './router';
import '/src/assets/css/mode.scss';
import { store } from './store/store';
import App from './App.vue';
import './App.css';
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
// 全局错误处理钩子
app.config.errorHandler = (e) => {
  console.log('errorHandler', e);
};
