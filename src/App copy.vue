<template>
  <div id="app">
    <Header />
    <addtransaction v-on:add-transaction="addTransaction" />
    <transactions v-bind:transactions="transactions" v-on:del-transaction="deleteTransaction"/>
  </div>
</template>

<script>
import transactions from './components/Transactions.vue';
import Header from './components/layouts/Header.vue';
import addtransaction from './components/AddTransaction.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    addtransaction,
    transactions
  },
  data() {
    return {
      transactions: []
    }
  },
  methods: {
    deleteTransaction(_id) {
      this.transactions = this.transactions.filter(transaction => transaction._id !== _id);
    },
    addTransaction(newTransaction) {
      this.transactions = [...this.transactions, newTransaction];
    }
  },
  created() {
    axios.get('http://localhost:3000/transaction/')
    .then(res => this.transactions = res.data)
    .catch(err => console.log(err));
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.btn {
  display: inline-block;
  border: none;
  background: gray;
  color: white;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: darkgray;
}
</style>
