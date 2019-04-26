<template>
  <div id="home" class="container">
    <Header />
    <addtransaction v-on:add-transaction="addTransaction" />
    <transactions v-bind:transactions="transactions" v-on:del-transaction="deleteTransaction"/>
  </div>
</template>

<script>
import transactions from '../components/Transactions.vue';
import Header from '../components/layouts/Header.vue';
import addtransaction from '../components/AddTransaction.vue';
import axios from 'axios';

export default {
  name: 'Home',
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
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
