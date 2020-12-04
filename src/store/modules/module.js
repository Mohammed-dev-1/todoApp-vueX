const state = {
    count: 0
};

const getters = {
    counter: state => state.count
};

const actions = {
    addCount({commit}) {
        commit('addcount')
    },
    disCount({commit}) {{
        commit('discount')
    }}
};

const mutations = {
    addcount(state) {
        state.count++
    },
    discount(state) {
        state.count--
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}