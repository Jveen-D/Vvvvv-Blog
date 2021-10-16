import { createApp } from 'vue';
import router from './router';
import '/src/assets/css/mode.scss';
import { store } from './store/store';
import App from './App.vue';
import './App.css';
createApp(App).use(router).use(store).mount('#app');
