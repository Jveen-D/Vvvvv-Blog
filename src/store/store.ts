/*
 * @Date: 2022-01-07 11:03:05
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/store/store.ts
 */
import {createStore} from 'vuex';
import type {AppState, Mode, Shadow, Sluy, ShadowImg} from '/#/store';

export const store = createStore({
    state: (): AppState => ({
        slug: '', // 分类
        mode: localStorage.getItem('mode'), // 博客主题 默认为用户系统主题偏好色
        shadow: '', //阴影
        shadowImg: { // 预览图片
            width: 0,
            height: 0,
            left: 0,
            top: 0,
            src: '',
        }
    }),
    mutations: {
        // sluy
        CHANGE_SLUG(state: AppState, data) {
            state.slug = data;
        },
        // mode
        CHANGE_MODE(state: AppState, data) {
            localStorage.setItem('mode', data);
            state.mode = data;
        },
        // shadow
        CHANGE_SHADOW(state: AppState, data) {
            state.shadow = data;
        },
        // shadowImg
        CHANGE_SHADOWIMG(state: AppState, data){
            state.shadowImg = data;
        }
    },
    actions: {
        // sluy
        ChangeSlug({commit}, data:Sluy) {
            commit('CHANGE_SLUG', data);
        },
        // mode
        ChangeMode({commit}, data:Mode) {
            commit('CHANGE_MODE', data);
        },
        // shadow
        ChangeShadow({commit}, data:Shadow) {
            commit('CHANGE_SHADOW', data);
        },
        // shadowImg
        ChangeShadowImg({commit}, data:ShadowImg){
            commit('CHANGE_SHADOWIMG', data);
        }
    },
    getters: {
        // sluy
        getSlug(state: AppState) {
            return state.slug;
        },
        // mode
        getMode(state: AppState) {
            return state.mode;
        },
        // shadow
        getShadow(state: AppState) {
            return state.shadow;
        },
        // shadowImg
        getShadowImg(state: AppState){
            return state.shadowImg
        }
    },
});
