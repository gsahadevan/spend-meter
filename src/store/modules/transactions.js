import axios from 'axios';

const state = {
    transactions: []
};

const getters = {
    allTransactions: (state) => state.transactions
};

const actions = {
    async fetchTransactions({ commit }) {
        const response = await axios.get('https://localhost:3000/transaction/');
        console.log(response.data);
    }
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}
