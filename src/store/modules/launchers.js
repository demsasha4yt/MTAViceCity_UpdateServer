const axios = require('axios');
const {url} = require('../../urls');

const state = {
  launchers: [{
    current: true,
    available: false,
    _id: "5d1bc7bd06d7312e28536777",
    version: "0.7.0",
    dataUrl: "data_url",
    dataSize: "data_size",
    updaterUrl: "updater_url",
    __v: 0
  }],
  currentLauncher: {},
};

const mutations = {
  updateLaunchers: function (state, launchers) {
    state.launchers = launchers
  },
  addLauncher(state, launcher){
    state.launchers.push(launcher);
  },
  updateLauncher(state, obj) {
    let id = obj.id;
    let launcher = obj.launcher;

    //if new launcher current

    //set new index

    const index = state.launchers.findIndex(x => x._id === id);
    state.launchers[index]._id = launcher._id;
    state.launchers[index].version = launcher.version;
    state.launchers[index].dataUrl = launcher.dataUrl;
    state.launchers[index].dataSize = launcher.dataSize;
    state.launchers[index].updaterUrl = launcher.updaterUrl;
    state.launchers[index].available = launcher.available;
    state.launchers[index].current = launcher.current;
  },
  deleteLauncher(state, launcher){
    const index = state.launchers.indexOf(launcher);
    state.launchers.splice(index, 1);
  },
  updateCurrent(state, current){
    state.currentLauncher = current;
  }
};

const actions = {
  async fetchLaunchers({ commit }){
    const response = await axios.get(`${url}/api/launcher`);
    commit('updateLaunchers', response.data);
  },
  async fetchCurrent({ commit }){
    const response = await axios.get(`${url}/api/launcher/api/launcher/current`);
    console.log(response);
    commit('updateCurrent', response);
  },
  async addLauncher({ commit }, launcher)
  {
      const response = await axios.post(`${url}/api/launcher/`, launcher);
      console.log(response);
      commit('addLauncher', response.data)
  },
  async updateLauncher({ commit }, obj){
    const id = obj.id;
    const launcher = obj.launcher;
    const response = await axios.put(`${url}/api/launcher/${id}`, launcher);
    console.log(response);
    commit('updateLauncher', {id, launcher: response.data});
  },
  async deleteLauncher({ commit }, launcher){
    const response = await  axios.delete(`${url}/api/launcher/${launcher._id}`);
    console.log(response)
    commit('deleteLauncher', launcher)
  }
};


const getters = {
  Launchers: function (state) {
    return state.launchers;
  },
  CurrentLauncher: function (state) {
    return state.currentLauncher;
  }
  ,
  Launcher: function (state) {
    return function (_id) {
      return state.launchers.find((launcher) => {
         return launcher.id === _id;
      })
    }
  }
};


export default {
  state,
  mutations,
  actions,
  getters
}
