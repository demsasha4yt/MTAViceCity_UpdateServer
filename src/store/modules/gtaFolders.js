const axios = require('axios');
const {url} = require('../../urls');

const state = {
  anims: [{
      _id: 'defaultId',
      version: 'test',
      dataUrl: 'defaultUrl',
      dataSize: 'defualtSize',
      current: false,
      available: true
    }],
  audios: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  datas: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  models: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  mtas: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  texts: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
  mainf: [{
    _id: 'defaultId',
    version: 'test',
    dataUrl: 'defaultUrl',
    dataSize: 'defualtSize',
    current: false,
    available: true
  }],
};

const mutations = {
  // Audio
  updateAudios(state, data) {
    state.audios = data;
  },
  addAudio(state, data){
    state.audios.push(data);
  },
  updateAudio(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.audios.findIndex(x => x._id === id);
    state.audios[index]._id = data._id;
    state.audios[index].version = data.version;
    state.audios[index].dataUrl = data.dataUrl;
    state.audios[index].dataSize = data.dataSize;
    state.audios[index].available = data.available;
    state.audios[index].current = data.current;
  },
  deleteAudio(state, data){
    const index = state.audios.indexOf(data);
    state.audios.splice(index, 1);
  },
  //main folder
  updateMainFs(state, data) {
    state.mainf = data;
  },
  addMainF(state, data){
    state.mainf.push(data);
  },
  updateMainF(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.mainf.findIndex(x => x._id === id);
    state.mainf[index]._id = data._id;
    state.mainf[index].version = data.version;
    state.mainf[index].dataUrl = data.dataUrl;
    state.mainf[index].dataSize = data.dataSize;
    state.mainf[index].available = data.available;
    state.mainf[index].current = data.current;
  },
  deleteMainF(state, data){
    const index = state.mainf.indexOf(data);
    state.mainf.splice(index, 1);
  },
  // Anim
  updateAnims(state, data) {
    state.anims = data;
  },
  addAnim(state, data){
    state.anims.push(data);
  },
  updateAnim(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.anims.findIndex(x => x._id === id);
    state.anims[index]._id = data._id;
    state.anims[index].version = data.version;
    state.anims[index].dataUrl = data.dataUrl;
    state.anims[index].dataSize = data.dataSize;
    state.anims[index].available = data.available;
    state.anims[index].current = data.current;
  },
  deleteAnim(state, data){
    const index = state.anims.indexOf(data);
    state.anims.splice(index, 1);
  },
  // Data
  updateDatas(state, data) {
    state.datas = data;
  },
  addData(state, data){
    state.datas.push(data);
  },
  updateData(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.datas.findIndex(x => x._id === id);
    state.datas[index]._id = data._id;
    state.datas[index].version = data.version;
    state.datas[index].dataUrl = data.dataUrl;
    state.datas[index].dataSize = data.dataSize;
    state.datas[index].available = data.available;
    state.datas[index].current = data.current;
  },
  deleteData(state, data){
    const index = state.datas.indexOf(data);
    state.datas.splice(index, 1);
  },
  // Model
  updateModels(state, data) {
    state.models = data;
  },
  addModel(state, data){
    state.models.push(data);
  },
  updateModel(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.models.findIndex(x => x._id === id);
    state.models[index]._id = data._id;
    state.models[index].version = data.version;
    state.models[index].dataUrl = data.dataUrl;
    state.models[index].dataSize = data.dataSize;
    state.models[index].available = data.available;
    state.models[index].current = data.current;
  },
  deleteModel(state, data){
    const index = state.models.indexOf(data);
    state.models.splice(index, 1);
  },
  // MTA
  updateMtas(state, data) {
    state.mtas = data;
  },
  addMta(state, data){
    state.mtas.push(data);
  },
  updateMta(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.mtas.findIndex(x => x._id === id);
    state.mtas[index]._id = data._id;
    state.mtas[index].version = data.version;
    state.mtas[index].dataUrl = data.dataUrl;
    state.mtas[index].dataSize = data.dataSize;
    state.mtas[index].available = data.available;
    state.mtas[index].current = data.current;
  },
  deleteMta(state, data){
    const index = state.mtas.indexOf(data);
    state.mtas.splice(index, 1);
  },
  // Text
  updateTexts(state, data) {
    state.texts = data;
  },
  addText(state, data){
    state.texts.push(data);
  },
  updateText(state, obj){
    let id = obj.id;
    let data = obj.data;

    //find index for changed object

    const index = state.texts.findIndex(x => x._id === id);
    state.texts[index]._id = data._id;
    state.texts[index].version = data.version;
    state.texts[index].dataUrl = data.dataUrl;
    state.texts[index].dataSize = data.dataSize;
    state.texts[index].available = data.available;
    state.texts[index].current = data.current;
  },
  deleteText(state, data){
    const index = state.texts.indexOf(data);
    state.texts.splice(index, 1);
  },
};

const actions = {
  // Audio
  async fetchAudios({ commit }){
    const response = await  axios.get(`${url}/api/gta/audio`);
    console.log(response);
    if (response)
      commit('updateAudios', response.data);
  },
  async addAudio({ commit }, data){
    const response = await axios.post(`${url}/api/gta/audio`, data);
    console.log(response);
    commit('addAudio', response.data);
  },
  async updateAudio({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/audio/${id}`, data);
    commit('updateAudio', {id, data: respone.data});
  },
  async deleteAudio({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/audio/${data._id}`);
    console.log(response);
    commit('deleteAudio', data);
  },
  // Anim
  async fetchAnims({ commit }){
    const response = await  axios.get(`${url}/api/gta/anim`);
    console.log(response);
    if (response)
      commit('updateAnims', response.data);
  },
  async addAnim({ commit }, data){
    const response = await axios.post(`${url}/api/gta/anim`, data);
    console.log(response);
    commit('addAnim', response.data);
  },
  async updateAnim({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/anim/${id}`, data);
    commit('updateAnim', {id, data: respone.data});
  },
  async deleteAnim({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/anim/${data._id}`);
    console.log(response);
    commit('deleteAnim', data);
  },
  // Data
  async fetchDatas({ commit }){
    const response = await  axios.get(`${url}/api/gta/data`);
    console.log(response);
    if (response)
      commit('updateDatas', response.data);
  },
  async addData({ commit }, data){
    const response = await axios.post(`${url}/api/gta/data`, data);
    console.log(response);
    commit('addData', response.data);
  },
  async updateData({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/data/${id}`, data);
    commit('updateData', {id, data: respone.data});
  },
  async deleteData({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/data/${data._id}`);
    console.log(response);
    commit('deleteData', data);
  },
  // Model
  async fetchModels({ commit }){
    const response = await  axios.get(`${url}/api/gta/models`);
    console.log(response);
    if (response)
      commit('updateModels', response.data);
  },
  async addModel({ commit }, data){
    const response = await axios.post(`${url}/api/gta/models`, data);
    console.log(response);
    commit('addModel', response.data);
  },
  async updateModel({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/models/${id}`, data);
    commit('updateModel', {id, data: respone.data});
  },
  async deleteModel({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/models/${data._id}`);
    console.log(response);
    commit('deleteModel', data);
  },
  // MTA
  async fetchMtas({ commit }){
    const response = await  axios.get(`${url}/api/gta/mta`);
    console.log(response);
    if (response)
      commit('updateMtas', response.data);
  },
  async addMta({ commit }, data){
    const response = await axios.post(`${url}/api/gta/mta`, data);
    console.log(response);
    commit('addMta', response.data);
  },
  async updateMta({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/mta/${id}`, data);
    commit('updateMta', {id, data: respone.data});
  },
  async deleteMta({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/mta/${data._id}`);
    console.log(response);
    commit('deleteMta', data);
  },
  // Text
  async fetchTexts({ commit }){
    const response = await  axios.get(`${url}/api/gta/text`);
    console.log(response);
    if (response)
      commit('updateTexts', response.data);
  },
  async addText({ commit }, data){
    const response = await axios.post(`${url}/api/gta/text`, data);
    console.log(response);
    commit('addText', response.data);
  },
  async updateText({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/text/${id}`, data);
    commit('updateText', {id, data: respone.data});
  },
  async deleteText({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/text/${data._id}`);
    console.log(response);
    commit('deleteText', data);
  },
  // mainf
  async fetchMainFs({ commit }){
    const response = await  axios.get(`${url}/api/gta/mainf`);
    console.log(response);
    if (response)
      commit('updateMainFs', response.data);
  },
  async addMainF({ commit }, data){
    const response = await axios.post(`${url}/api/gta/mainf`, data);
    console.log(response);
    commit('addMainF', response.data);
  },
  async updateMainF({ commit }, obj){
    const id = obj.id;
    const data = obj.data;

    const respone = await  axios.put(`${url}/api/gta/mainf/${id}`, data);
    commit('updateMainF', {id, data: respone.data});
  },
  async deleteMainF({ commit }, data){
    const response = await  axios.delete(`${url}/api/gta/mainf/${data._id}`);
    console.log(response);
    commit('deleteMainF', data);
  },
};


const getters = {
  Anims: function (state) {
    return state.anims;
  },
  Audios: function (state) {
    return state.audios;
  },
  Datas: function (state) {
    return state.datas;
  },
  Models: function (state) {
    return state.models;
  },
  Mtas: function (state) {
    return state.mtas;
  },
  Texts: function (state) {
    return state.texts;
  },
  MainFs: function (state) {
    return state.mainf;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
