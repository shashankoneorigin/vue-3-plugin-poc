import { createApp } from 'vue'
import '@/assets/scss/style.css'
import App from '@/App.vue'
import { useGtm } from '@/plugins/analytics';
const app = createApp(App)
const { gtmEvent } = useGtm();
app.config.globalProperties.$gtmEvent = gtmEvent;
app.mount('#app')