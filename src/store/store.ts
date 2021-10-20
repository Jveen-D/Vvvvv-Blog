import {createStore} from 'vuex';
import type {AppState, Sluy, Mode, Shadow} from '/#/store';

export const store = createStore({
    state: (): AppState => ({
      slug: '', // 分类
      mode: localStorage.getItem('mode') || 'light', // 博客主题 默认light模式
      shadow:'', //阴影
    }),
    mutations: {
        // sluy
        CHANGE_SLUG(state: any, data) {
            state.slug = data;
        },
        // mode
        CHANGE_MODE(state, data) {
            localStorage.setItem('mode', data);
            state.mode = data;
        },
        // shadow
        CHANGE_SHADOW(state, data){
            state.shadow = data;
        }
    },
    actions: {
        // sluy
        ChangeSlug({commit}, data) {
            commit('CHANGE_SLUG', data);
        },
        // mode
        ChangeMode({commit}, data) {
            commit('CHANGE_MODE', data);
        },
        // shadow
        ChangeShadow({commit}, data){
            commit('CHANGE_SHADOW', data);
        }
    },
    getters: {
        // sluy
        getSlug(state:Sluy) {
            return state.slug;
        },
        // mode
        getMode(state:Mode) {
            return state.mode;
        },
        // shadow
        getShadow(state:Shadow){
            return state.shadow
        }
    },
});
