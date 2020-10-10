// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { NavBar, Icon, Cell, CellGroup, Divider, Form, Field, Switch, Button, Search, Tag, Tab, Tabs } from 'vant'
Vue.config.productionTip = false
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Divider)
Vue.use(Form)
Vue.use(Field)
Vue.use(Switch)
Vue.use(Button)
Vue.use(Search)
Vue.use(Tag)
Vue.use(Tab)
Vue.use(Tabs)

//申靖
import { Swipe, SwipeItem, Image as VanImage, Popup } from 'vant';
import { RadioGroup, Radio, Stepper, SubmitBar, Checkbox, CheckboxGroup, NoticeBar, } from 'vant';
import { AddressList, Toast, Card, Uploader, Rate, Overlay } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(VanImage).use(Popup);
Vue.use(Radio).use(RadioGroup).use(Stepper).use(SubmitBar).use(Checkbox).use(CheckboxGroup).use(NoticeBar);
Vue.use(AddressList).use(Toast).use(Card).use(Uploader).use(Rate).use(Overlay);

//陈雅政
import { Col, Row } from 'vant'
Vue.use(Col).use(Row)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})