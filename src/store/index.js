import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: []
  },
  getters: {
    favoriteHeroes: (state) => {
      return state.favorites;
    }
  },
  mutations: {
    ADD: (state, item) => {
      state.favorites.push(item);
      console.log('add', state.favorites);
    },
    REMOVE: (state, item) => {
      state.favorites = state.favorites.filter(el => el.id !== item.id);
      console.log('remove', state.favorites);
    },
  },
  actions: {
    addHeroe: (context, item) => {
      context.commit('ADD', item);
    },
    removeHeroe: (context, item) => {
      context.commit('REMOVE', item);
    },
  },
});
