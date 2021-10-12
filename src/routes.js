import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import ListProduct from './components/ListProduct.vue'
import DetailProduct from './components/DetailProduct.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },  
    {
        name:'ListProduct',
        component:ListProduct,
        path:'/list-product'
    },  
    {
        name:'DetailProduct',
        component:DetailProduct,
        path:'/list-product/:id'
    },  
  

]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router