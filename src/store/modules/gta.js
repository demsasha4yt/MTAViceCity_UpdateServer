const axios = require('axios');
const {url} = require('../../urls');

const state = {
  currents: {
    "audio":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d260dbf56207c13af2058cf","version":"asd","dataUrl":"asD","dataSize":"Asd","__v":0}},
    "anim":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d260f2356207c13af2058d3","version":"sdf","dataUrl":"asdf","dataSize":"asdf","__v":0}},
    "data":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d26110156207c13af2058d6","version":"asdf","dataUrl":"asdf","dataSize":"sadf","__v":0}},
    "models":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d2612fd56207c13af2058d7","version":"sad","dataUrl":"asd","dataSize":"asd","__v":0}},
    "mta":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d2615d856207c13af2058dc","version":"sadf","dataUrl":"asdf","dataSize":"asdfasdf","__v":0}},
    "text":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d26174156207c13af2058dd","version":"sadf","dataUrl":"sadf","dataSize":"sdaf","__v":0}},
    "gta3":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d261b4856207c13af2058de","version":"asdf","dataUrl":"asdf","dataSize":"sadf","__v":0}},
    "gtaint":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d261ef256207c13af2058e0","version":"asdf","dataUrl":"sadf","dataSize":"sadf","__v":0}},
    "vcdff":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d2623a556207c13af2058e6","version":"dsaf","dataUrl":"asdf","dataSize":"asdf","__v":0}},
    "vctxd":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d26245a56207c13af2058e9","version":"asdf","dataUrl":"sadf","dataSize":"asdf","__v":0}},
    "vccol":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d26231556207c13af2058e4","version":"aDSasdfasdf","dataUrl":"Asd","dataSize":"asd","__v":0}},
    "player":{"folder":true,"path":"./","info":{"current":true,"available":true,"_id":"5d26228a56207c13af2058e2","version":"dsaf","dataUrl":"saf","dataSize":"sadf","__v":0}}}
};

const mutations = {
  updateCurrents(state, data){
    state.currents = data;
  }

};

const actions = {
  async fetchCurrents({commit}){
    const response = await axios.get(`${url}/api/gta/current`);
      commit('updateCurrents', response.data);
  }
};


const getters = {
  Currents(){
    return state.currents;
  }
};


export default {
  state,
  mutations,
  actions,
  getters
}
