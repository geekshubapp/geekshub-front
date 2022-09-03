import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell,faSearch,faPlus,faHome,faInbox} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBell,faSearch,faPlus,faHome,faInbox)

const app = createApp(App)

app.use(createPinia())
app.component('fa', FontAwesomeIcon).use(router)

app.mount('#app')
