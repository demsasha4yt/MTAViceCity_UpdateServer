const axios = require('axios');
const {url} = require('../../urls');

const state = {
  enbs: [{
    _id: "default_ID",
    name: "DefaultName",
    description: "defaultDescription",
    version: "defaultVersion",
    url: "defaultUrl",
    available: true
  }]
};

const mutations = {
  updateEnbs(state, value){
    state.enbs = value;
  },
  addEnb(state, value){
    state.enbs.push(value);
  },
  changeEnb(state, obj)
  {
    let id = obj.id;
    let enb = obj.enb;

    const index = state.enbs.findIndex(x => x._id === id);
    state.enbs[index]._id = enb._id;
    state.enbs[index].name = enb.name;
    state.enbs[index].description = enb.description;
    state.enbs[index].version = enb.version;
    state.enbs[index].url = enb.url;
    state.enbs[index].available = enb.available;
  },
  deleteEnb(state,value){
    const index = state.enbs.indexOf(value)
    state.enbs.splice(index, 1);
  }
};

const actions = {
  async fetchEnbs({commit}){
    const response = await axios.get(`${url}/api/enb`);
    if (response){
      commit('updateEnbs', response.data);
    }
  },
  async addEnb({commit}, enb){
    const response = await axios.post(`${url}/api/enb`, enb);
    console.log(response);
    commit('addEnb', response.data);
  },
  async changeEnb({commit}, obj){
    let id = obj.id;
    let enb = obj.enb;

    const response = await axios.put(`${url}/api/enb/${id}`, enb);
    console.log(response);
    commit('changeEnb', {id, enb:response.data});
  },
  async deleteEnb({commit}, enb){
    const response = await axios.delete(`${url}/api/enb/${enb._id}`);
    console.log(response);
    commit('deleteEnb', enb);
  }
};


const getters = {
  Enbs() {
    return state.enbs;
  }
};


export default {
  state,
  mutations,
  actions,
  getters
}
