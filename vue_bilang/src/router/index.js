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

// 申靖
import PersonalDetails from '@/components/shenj/PersonalDetails'
import PersonalBind from '@/components/shenj/PersonalBind'
import Index from '@/components/shenj/Index'
import Cart from '@/components/shenj/Cart'
import Account from '@/components/shenj/Account'
import Address from '@/components/shenj/Address'
import Evaluate from '@/components/shenj/Evaluate'
import EvaluateShare from '@/components/shenj/EvaluateShare'


//陈雅政
import Integral from '@/components/cyz/Integral'
import Integrate from '@/components/cyz/Integrate'
import AllEvaluation from '@/components/cyz/AllEvaluation'
import Fashion from '@/components/cyz/Fashion'
Vue.use(Router)
    //王启明
import Login from '@/components/wqm/Login'
import Mssizeclothes from '@/components/wqm/Mssizeclothes'
import Mssizewaist from '@/components/wqm/Mssizewaist'
import Mssizelong from '@/components/wqm/Mssizelong'
import Mssizecuff from '@/components/wqm/Mssizecuff'
import Mssizebust from '@/components/wqm/Mssizebust'
import Mssizehipline from '@/components/wqm/Mssizehipline'
import Mssizesleevewidth from '@/components/wqm/Mssizesleevewidth'
import Mssizesleevewidth2 from '@/components/wqm/Mssizesleevewidth2'
import Mssizeshoulder from '@/components/wqm/Mssizeshoulder'
import Trendinformation from '@/components/wqm/Trendinformation'
import Powderfinishorder from '@/components/wqm/Powderfinishorder'
import Measurementsnone from '@/components/wqm/Measurementsnone'
import Sku from '@/components/wqm/Sku'
import Skunews from '@/components/wqm/Skunews'
import Product from '@/components/wqm/Product'
import Measurements from '@/components/wqm/Measurements'
import Mssizeneck from '@/components/wqm/Mssizeneck'

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
        }, {
            path: '/PersonalDetails',
            name: 'PersonalDetails',
            component: PersonalDetails
        }, {
            path: '/PersonalBind',
            name: 'PersonalBind',
            component: PersonalBind
        }, {
            path: '/Index',
            name: 'Index',
            component: Index
        }, {
            path: '/Cart',
            name: 'Cart',
            component: Cart
        }, {
            path: '/Account',
            name: 'Account',
            component: Account
        }, {
            path: '/Address',
            name: 'Address',
            component: Address
        }, {
            path: '/Evaluate',
            name: 'Evaluate',
            component: Evaluate
        }, {
            path: '/EvaluateShare',
            name: 'EvaluateShare',
            component: EvaluateShare
        },
        {
            path: '/Integral',
            name: 'Integral',
            component: Integral
        },
        {
            path: '/Integrate',
            name: 'Integrate',
            component: Integrate
        },
        {
            path: '/AllEvaluation',
            name: 'AllEvaluation',
            component: AllEvaluation
        },
        {
            path: '/Fashion',
            name: 'Fashion',
            component: Fashion
        },
        {
            path: '/pfs',
            name: 'Powderfinishorder',
            component: Powderfinishorder
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/msshlr',
            name: 'Mssizeshoulder',
            component: Mssizeshoulder
        },
        {
            path: '/msc',
            name: 'Mssizeclothes',
            component: Mssizeclothes
        },
        {
            path: '/msw',
            name: 'Mssizewaist',
            component: Mssizewaist
        },
        {
            path: '/msbust',
            name: 'Mssizebust',
            component: Mssizebust
        },
        {
            path: '/msneck',
            name: 'Mssizeneck',
            component: Mssizeneck
        },
        {
            path: '/msno',
            name: 'Measurementsnone',
            component: Measurementsnone
        },
        {
            path: '/msn',
            name: 'Measurements',
            component: Measurements
        },
        {
            path: '/msl',
            name: 'Mssizelong',
            component: Mssizelong
        },
        {
            path: '/mscf',
            name: 'Mssizecuff',
            component: Mssizecuff
        },
        {
            path: '/mship',
            name: 'Mssizehipline',
            component: Mssizehipline
        },
        {
            path: '/mssw',
            name: 'Mssizesleevewidth',
            component: Mssizesleevewidth
        },
        {
            path: '/mssw2',
            name: 'Mssizesleevewidth2',
            component: Mssizesleevewidth2
        },
        {
            path: '/tif',
            name: 'Trendinformation',
            component: Trendinformation
        },
        {
            path: '/sku',
            name: 'Sku',
            component: Sku
        },
        {
            path: '/skunews',
            name: 'Skunews',
            component: Skunews
        },
        {
            path: '/product',
            name: 'Product',
            component: Product
        }
    ]
})