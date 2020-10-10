import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddShippingAddress from '@/components/lvjialei/AddShippingAddress'
import mySizeNone from '@/components/lvjialei/mySizeNone'
import mySize from '@/components/lvjialei/mySize'
import Shoulders from '@/components/lvjialei/Shoulders'
import Height from '@/components/lvjialei/Height'
import Weight from '@/components/lvjialei/Weight'
import Hip from '@/components/lvjialei/Hip'
import Chest from '@/components/lvjialei/Chest'
import Waist from '@/components/lvjialei/Waist'
import MyMoney from '@/components/lvjialei/MyMoney'
import MyAddress from '@/components/lvjialei/MyAddress'
import MyOrder from '@/components/lvjialei/MyOrder'
import IntroductionToConsultation from '@/components/wk/IntroductionToConsultation'
import Register from '@/components/wk/Register'
import Bill from '@/components/wk/Bill'
import Coupon from '@/components/wk/Coupon'
import Odds from '@/components/wk/Odds'
import PrivateCard from '@/components/wk/PrivateCard'
import Collection from '@/components/wk/Collection'
import Wallet from '@/components/wk/Wallet'
import Chalk from '@/components/wk/Chalk'
import OrderDetails from '@/components/wk/OrderDetails'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/wk/OrderDetails',
            name: 'OrderDetails',
            component: OrderDetails
        }, {
            path: '/wk/Chalk',
            name: 'Chalk',
            component: Chalk
        }, {
            path: '/wk/Wallet',
            name: 'Wallet',
            component: Wallet
        }, {
            path: '/wk/Collection',
            name: 'Collection',
            component: Collection
        }, {
            path: '/wk/PrivateCard',
            name: 'PrivateCard',
            component: PrivateCard
        }, {
            path: '/wk/Odds',
            name: 'Odds',
            component: Odds
        }, {
            path: '/wk/Coupon',
            name: 'Coupon',
            component: Coupon
        }, {
            path: '/wk/Bill',
            name: 'Bill',
            component: Bill
        }, {
            path: '/wk/Register',
            name: 'Register',
            component: Register
        }, {
            path: '/wk/IntroductionToConsultation',
            name: 'IntroductionToConsultation',
            component: IntroductionToConsultation
        }, {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/AddShippingAddress',
            name: 'AddShippingAddress',
            component: AddShippingAddress
        },
        {
            path: '/mySizeNone',
            name: 'mySizeNone',
            component: mySizeNone
        },
        {
            path: '/mySize',
            name: 'mySize',
            component: mySize
        },
        {
            path: '/Shoulders',
            name: 'Shoulders',
            component: Shoulders
        },
        {
            path: '/Height',
            name: 'Height',
            component: Height
        },
        {
            path: '/Weight',
            name: 'Weight',
            component: Weight
        },
        {
            path: '/Hip',
            name: 'Hip',
            component: Hip
        },
        {
            path: '/Chest',
            name: 'Chest',
            component: Chest
        },
        {
            path: '/Waist',
            name: 'Waist',
            component: Waist
        },
        {
            path: '/MyMoney',
            name: 'MyMoney',
            component: MyMoney
        },
        {
            path: '/MyAddress',
            name: 'MyAddress',
            component: MyAddress
        },
        {
            path: '/MyOrder',
            name: 'MyOrder',
            component: MyOrder
        },
    ]
})