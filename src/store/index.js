import Vuex from 'vuex';
import Vue from 'vue';
import module from './modules/module'
import itemStore from './modules/itemStore'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        module,
        itemStore
    }
});