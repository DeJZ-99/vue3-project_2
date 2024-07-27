import { createApp } from 'vue'
import App from './App.vue'

import './assets/base.css'
import 'amfe-flexible'
import router from './router/index.js'
import store from './store/index.js'
// import './api/mock'

// vant 按需引入
// vant 全局引入
import 'vant/lib/index.css'
// import 'vant/es/toast/style';
import {
    Button,
    Icon,
    Tab,
    Tabs,
    TreeSelect,
    Stepper,
    ActionBar,
    ActionBarIcon,
    ActionBarButton,
    Checkbox,
    CheckboxGroup,
    SubmitBar,
    ContactCard,
    Card,
    AddressList,
    AddressEdit,
    Form,
    Field,
    CellGroup
} from 'vant'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Button).use(Icon).use(Tab).use(Tabs).use(TreeSelect).use(Stepper)
app.use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(Checkbox)
app.use(CheckboxGroup).use(SubmitBar).use(ContactCard).use(Card)
app.use(AddressList).use(AddressEdit).use(Form).use(Field).use(CellGroup)
app.mount('#app')
