import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            slug: ''
        }
    },
    mutations: {
        CHANGE_SLUG ( state, data ) {
            state.slug = data
            console.log(state.slug)
        },
    },
    actions: {
        ChangeSlug({commit},data){
            commit('CHANGE_SLUG',data)
            console.log(data)
        }
    },
    getters:{
        getSlug(state){
            return state.slug
        }
    }
})