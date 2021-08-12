import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      slug: '',
      //默认值 light模式
      mode: localStorage.getItem('mode') || 'light',
    };
  },
  mutations: {
    CHANGE_SLUG(state, data) {
      state.slug = data;
    },
    CHANGE_MODE(state, data) {
      localStorage.setItem('mode', data);
      state.mode = data;
    },
  },
  actions: {
    ChangeSlug({ commit }, data) {
      commit('CHANGE_SLUG', data);
    },
    ChangeMode({ commit }, data) {
      commit('CHANGE_MODE', data);
    },
  },
  getters: {
    getSlug(state) {
      return state.slug;
    },
    getMode(state) {
      return state.mode;
    },
  },
});
