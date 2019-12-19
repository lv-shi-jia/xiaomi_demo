import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



export default new Vuex.Store({
     //存储数据共享的
    state:{
        arr:[]
    },
       //修改数据的唯一途径，同步操作数据的地方
    mutations:{
        addcomm(state,obj){
            state.arr.push(obj)
            localStorage.setItem('name',JSON.stringify(state.arr))
        }
    },
     //异步操作数据的地方
    actions:{

    },
      //计算属性，根据state中的数据改变进行计算得来的数据
    getters:{

    }
})