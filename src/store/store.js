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
        }
    },
    actions: {
        ChangeSlug ( { commit }, data ) {
            commit('CHANGE_SLUG', data)
        }
    },
    getters: {
        getSlug ( state ) {
            return state.slug
        }
    }
})