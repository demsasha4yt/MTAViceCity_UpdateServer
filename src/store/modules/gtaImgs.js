const axios = require('axios');
const {url} = require('../../urls');

const state = {
  gta3s: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  gtaInts: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  players: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  vcCols: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  vcDffs: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  vcTxds: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
};

const mutations = {
  // GTA3
  updateGta3s(state, data) {
    state.gta3s = data;
  },
  addGta3(state, data){
    state.gta3s.push(data);
  },
  updateGta3(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.gta3s.findIndex(x => x._id === id);
    state.gta3s[index]._id = data._id;
    state.gta3s[index].version = data.version;
    state.gta3s[index].dataUrl = data.dataUrl;
    state.gta3s[index].dataSize = data.dataSize;
    state.gta3s[index].available = data.available;
    state.gta3s[index].current = data.current;
  },
  deleteGta3(state, data){
    const index = state.gta3s.indexOf(data);
    state.gta3s.splice(index, 1);
  },
  // GtaInt
  updateGtaInts(state, data) {
    state.gtaInts = data;
  },
  addGtaInt(state, data){
    state.gtaInts.push(data);
  },
  updateGtaInt(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.gtaInts.findIndex(x => x._id === id);
    state.gtaInts[index]._id = data._id;
    state.gtaInts[index].version = data.version;
    state.gtaInts[index].dataUrl = data.dataUrl;
    state.gtaInts[index].dataSize = data.dataSize;
    state.gtaInts[index].available = data.available;
    state.gtaInts[index].current = data.current;
  },
  deleteGtaInt(state, data){
    const index = state.gtaInts.indexOf(data);
    state.gtaInts.splice(index, 1);
  },
  // Player
  updatePlayers(state, data) {
    state.players = data;
  },
  addPlayer(state, data){
    state.players.push(data);
  },
  updatePlayer(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.players.findIndex(x => x._id === id);
    state.players[index]._id = data._id;
    state.players[index].version = data.version;
    state.players[index].dataUrl = data.dataUrl;
    state.players[index].dataSize = data.dataSize;
    state.players[index].available = data.available;
    state.players[index].current = data.current;
  },
  deletePlayer(state, data){
    const index = state.players.indexOf(data);
    state.players.splice(index, 1);
  },
  // VcCol
  updateVcCols(state, data) {
    state.vcCols = data;
  },
  addVcCol(state, data){
    state.vcCols.push(data);
  },
  updateVcCol(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.vcCols.findIndex(x => x._id === id);
    state.vcCols[index]._id = data._id;
    state.vcCols[index].version = data.version;
    state.vcCols[index].dataUrl = data.dataUrl;
    state.vcCols[index].dataSize = data.dataSize;
    state.vcCols[index].available = data.available;
    state.vcCols[index].current = data.current;
  },
  deleteVcCol(state, data){
    const index = state.vcCols.indexOf(data);
    state.vcCols.splice(index, 1);
  },
  // VcDff
  updateVcDffs(state, data) {
    state.vcDffs = data;
  },
  addVcDff(state, data){
    state.vcDffs.push(data);
  },
  updateVcDff(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.vcDffs.findIndex(x => x._id === id);
    state.vcDffs[index]._id = data._id;
    state.vcDffs[index].version = data.version;
    state.vcDffs[index].dataUrl = data.dataUrl;
    state.vcDffs[index].dataSize = data.dataSize;
    state.vcDffs[index].available = data.available;
    state.vcDffs[index].current = data.current;
  },
  deleteVcDff(state, data){
    const index = state.vcDffs.indexOf(data);
    state.vcDffs.splice(index, 1);
  },
  // VcTxd
  updateVcTxds(state, data) {
    state.vcTxds = data;
  },
  addVcTxd(state, data){
    state.vcTxds.push(data);
  },
  updateVcTxd(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.vcTxds.findIndex(x => x._id === id);
    state.vcTxds[index]._id = data._id;
    state.vcTxds[index].version = data.version;

    state.vcTxds[index].dataUrl = data.dataUrl;
    state.vcTxds[index].dataSize = data.dataSize;
    state.vcTxds[index].available = data.available;
    state.vcTxds[index].current = data.current;
  },
  deleteVcTxd(state, data){
    const index = state.vcTxds.indexOf(data);
    state.vcTxds.splice(index, 1);
  },
};

const actions = {
  // Gta3
  async fetchGta3s({ commit }){
    const response = await  axios.get(`${url}/api/gta/gta3`);
    console.log(response);
    if (response)
      commit('updateGta3s', response.data);
  },
  async addGta3({ commit }, data){
    const response = await axios.post(`${url}/api/gta/gta3`, data);
    console.log(response);
    commit('addGta3', response.data);
  },
  async updateGta3({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/gta3/${id}`, data);
    commit('updateGta3', {id, data: respone.data});
  },
  async deleteGta3({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/gta3/${data._id}`);
    console.log(response);
    commit('deleteGta3', data);
  },
  // GtaInt
  async fetchGtaInts({ commit }){
    const response = await  axios.get(`${url}/api/gta/gtaint`);
    console.log(response);
    if (response)
      commit('updateGtaInts', response.data);
  },
  async addGtaInt({ commit }, data){
    const response = await axios.post(`${url}/api/gta/gtaint`, data);
    console.log(response);
    commit('addGtaInt', response.data);
  },
  async updateGtaInt({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/gtaint/${id}`, data);
    commit('updateGtaInt', {id, data: respone.data});
  },
  async deleteGtaInt({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/gtaint/${data._id}`);
    console.log(response);
    commit('deleteGtaInt', data);
  },
  // Player
  async fetchPlayers({ commit }){
    const response = await  axios.get(`${url}/api/gta/player`);
    console.log(response);
    if (response)
      commit('updatePlayers', response.data);
  },
  async addPlayer({ commit }, data){
    const response = await axios.post(`${url}/api/gta/player`, data);
    console.log(response);
    commit('addPlayer', response.data);
  },
  async updatePlayer({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/player/${id}`, data);
    commit('updatePlayer', {id, data: respone.data});
  },
  async deletePlayer({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/player/${data._id}`);
    console.log(response);
    commit('deletePlayer', data);
  },
  // VcCol
  async fetchVcCols({ commit }){
    const response = await  axios.get(`${url}/api/gta/vccol`);
    console.log(response);
    if (response)
      commit('updateVcCols', response.data);
  },
  async addVcCol({ commit }, data){
    const response = await axios.post(`${url}/api/gta/vccol`, data);
    console.log(response);
    commit('addVcCol', response.data);
  },
  async updateVcCol({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/vccol/${id}`, data);
    commit('updateVcCol', {id, data: respone.data});
  },
  async deleteVcCol({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/vccol/${data._id}`);
    console.log(response);
    commit('deleteVcCol', data);
  },
  // VcDff
  async fetchVcDffs({ commit }){
    const response = await  axios.get(`${url}/api/gta/vcdff`);
    console.log(response);
    if (response)
      commit('updateVcDffs', response.data);
  },
  async addVcDff({ commit }, data){
    const response = await axios.post(`${url}/api/gta/vcdff`, data);
    console.log(response);
    commit('addVcDff', response.data);
  },
  async updateVcDff({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/vcdff/${id}`, data);
    commit('updateVcDff', {id, data: respone.data});
  },
  async deleteVcDff({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/vcdff/${data._id}`);
    console.log(response);
    commit('deleteVcDff', data);
  },
  // VcTxd
  async fetchVcTxds({ commit }){
    const response = await  axios.get(`${url}/api/gta/vctxd`);
    console.log(response);
    if (response)
      commit('updateVcTxds', response.data);
  },
  async addVcTxd({ commit }, data){
    const response = await axios.post(`${url}/api/gta/vctxd`, data);
    console.log(response);
    commit('addVcTxd', response.data);
  },
  async updateVcTxd({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/vctxd/${id}`, data);
    commit('updateVcTxd', {id, data: respone.data});
  },
  async deleteVcTxd({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/vctxd/${data._id}`);
    console.log(response);
    commit('deleteVcTxd', data);
  },
};


const getters = {
  Gta3s: function (state) {
    return state.gta3s;
  },
  GtaInts: function (state) {
    return state.gtaInts;
  },
  Players: function (state) {
    return state.players;
  },
  VcCols: function (state) {
    return state.vcCols;
  },
  VcDffs: function (state) {
    return state.vcDffs;
  },
  VcTxds: function (state) {
    return state.vcTxds;
  },
};


export default {
  state,
  mutations,
  actions,
  getters
}
