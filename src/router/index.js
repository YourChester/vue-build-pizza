import Vue from 'vue'
import Router from 'vue-router'
import PizzaComponent from '@/components/PizzaComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PizzaComponent',
      component: PizzaComponent
    }
  ]
})
