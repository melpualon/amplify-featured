import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Auth } from 'aws-amplify'
import awsConfig from './aws-exports'
import '@aws-amplify/ui-vue/styles.css'

Auth.configure(awsConfig)

createApp(App).use(store).use(router).mount('#app')
