/*
 * @Date: 2022-03-20 16:34:38
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\main.ts
 */
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
