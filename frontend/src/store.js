import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      user: null
    }
  },
  getters: {
    isLoggedIn(state, getters) {
      return state.user !== null;
    },
    username(state, getters) {
      return getters.isLoggedIn ? state.user.username : "Not logged in";
    }
  },
  mutations: {
    login(state, u) {
      state.user = u;
    }
  }
});