import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personalData: [{
      id:1,
      empName:"kishore",
      email:"kishore@gmail.com",
      department:"sales,bussiness",
      languages:['hindi','english'],
      contact:8288958143
    },
    {
      id:2,
      empName:"kishore",
      email:"kishore@gmail.com",
      department:"sales, bussiness",
      languages:['hindi','english'],
      contact:8288958143
    }],
  },
  getters: {
    getpersonaldata:(state)=> state.personalData
  },
  actions: {
    removeitem({commit},itemindex){
        commit('REMOVE_ITEM',itemindex)
    },
    additem({commit},obj){
      console.log(obj,'dsfhdseerf')
      commit('ADD_ITEM',obj)
    }
  },
  mutations: {
    REMOVE_ITEM:(state,itemindex)=>{
      state.personalData.splice(itemindex,1)
    },
    ADD_ITEM:(state,obj)=>{
      let temobj = {
        id: Math.random(),
        ... obj
      }
      console.log(temobj)
      state.personalData.push(temobj)
    }
  }
});
