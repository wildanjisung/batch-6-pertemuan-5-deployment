const state = () => ({
  angka: 15
})

const mutations = {
  setAngka(state, param) {
    state.angka = param
  }
}

const actions = {
  changeAngkaValue(store, param) {
    if(param < 10) {
      store.commit('setAngka', param)
    } else {
      alert('tidak memenuhi kriteria')
    }
  }
}

export default {
  state,
  mutations,
  actions
}