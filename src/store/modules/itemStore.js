const state = {
    items: [],
    newItem: ''
};

const getters = {
    newItem: state => state.newItem,
    items: state => state.items.filter(item => !item.completed),
    complateItem: state => state.items.filter(item => item.completed)
};

const actions = {
    getItem({commit}, item) {
        commit('GET_ITEM', item)
    },
    addItem({commit}) {
        commit('ADD_ITEM')
    },
    clearItem({commit}) {
        commit('CLEAR_ITEM')
    },
    removeItem({commit}, item) {
        commit('REMOVE_ITEM', item)
    },
    editItem({commit}, item) {
        commit('EDIT_ITEM', item)
    },
    complateItem({commit}, item) {
        commit('COMPLATE_ITEM', item)
    }
};

const mutations = {
    GET_ITEM(state,item) {
        state.newItem = item
    },
    ADD_ITEM(state) {
        state.items.push({
            body: state.newItem,
            completed: false
        })
    },
    CLEAR_ITEM(state) {
        state.newItem = ''
    },
    REMOVE_ITEM(state,item) {
        var items = state.items;
        items.splice(items.indexOf(item), 1);
    },
    EDIT_ITEM(state,item) {
        var items = state.items;
        state.newItem = item.body;
        state.items = items;
        items.splice(items.indexOf(item), 1);
    },
    COMPLATE_ITEM(state,item) {
        item.completed = !item.completed;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}