import { createApp } from 'vue';
import router from './router';
import { store } from './store/store.js';
import App from './App.vue';
import './App.css';
createApp(App).use(router).use(store).mount('#app');
