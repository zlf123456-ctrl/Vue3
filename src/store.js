import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ah:[],
    sex:"",
    js:"",
  },
  mutations: {
    doClickSex(state,sex){
      state.sex=sex;
    },
    doClickah(state,ah){
      state.ah.push(ah);
    },
    clickDetail(state,js){
      state.js=js;
    }
  },
  actions: {
  }
})
