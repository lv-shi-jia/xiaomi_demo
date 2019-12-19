import Vue from 'vue'
import Router from 'vue-router'



import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Shopping from '@/components/Shopping'
import Mine from '@/components/Mine'
import Receive from '@/components/Receive'
import New from '@/components/New'
import Details from '@/components/Details'


Vue.use(Router)

export default new Router({
  routes: [
   
      {path:'/',redirect:'Home'},
      {path: '/Home',name: 'Home', component: Home},
      {path: '/Classify',name: 'Classify', component: Classify},
      {path: '/Shopping',name: 'Shopping', component: Shopping},
      {path: '/Mine',name: 'Mine', component: Mine},
      {path: '/Receive',name: 'Receive', component: Receive},
      {path: '/New',name: 'New', component: New},
      {path: '/Details',name: 'Details', component: Details},
  ]
})
