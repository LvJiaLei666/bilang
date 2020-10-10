// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Grid, GridItem, CountDown, Col, Row, Swipe, SwipeItem, NavBar, Icon, Cell, CellGroup, Divider, Form, Field, Switch, Button, Search, Tag, Tab, Tabs } from 'vant'
Vue.config.productionTip = false
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(CountDown);
Vue.use(Col);
Vue.use(Row);
Vue.use(Swipe)
Vue.use(SwipeItem)
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
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})