import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/LayoutView.vue'

Vue.use(VueRouter)

const routes = [{
    path: "",
    component: Layout,
    children: [{
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    }, {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    }, {
      path: '/add_product',
      name: 'Add Product',
      component: () => import('../views/AddProductView.vue')
    }]
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router