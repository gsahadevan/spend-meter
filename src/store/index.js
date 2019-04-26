import Vuex from 'vuex';
import Vue from 'vue';
import transactions from './modules/transactions';

// load vue
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        transactions
    }
});