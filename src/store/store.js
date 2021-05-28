import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            slug: false
        }
    },
    mutations: {
        SELECT_SLUG ( state ) {
            state.slug = true
        },
        CANCEL_SELECT_SLUG ( state ) {
            state.slug = false
        },
    },
    actions: {
        SelectSlug({commit}){
            commit('SELECT_SLUG')
        },
        CancelSelectSlug({commit}){
            commit('CANCEL_SELECT_SLUG')
        }
    },
    getters:{
        getSlug(state){
            return state.slug
        }
    }
})