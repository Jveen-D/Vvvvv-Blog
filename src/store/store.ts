import {createStore} from 'vuex';
import type {AppState,Sluy,Mode} from '/#/store';

export const store = createStore({
    state: (): AppState => ({
      slug: '',
      //默认值 light模式
      mode: localStorage.getItem('mode') || 'light',
    }),
    mutations: {
        CHANGE_SLUG(state: any, data) {
            state.slug = data;
        },
        CHANGE_MODE(state, data) {
            localStorage.setItem('mode', data);
            state.mode = data;
        },
    },
    actions: {
        ChangeSlug({commit}, data) {
            commit('CHANGE_SLUG', data);
        },
        ChangeMode({commit}, data) {
            commit('CHANGE_MODE', data);
        },
    },
    getters: {
        getSlug(state:Sluy) {
            return state.slug;
        },
        getMode(state:Mode) {
            return state.mode;
        },
    },
});
