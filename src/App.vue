<template>
  <div id="app">
    {{ transactions }}
    <Transactions v-bind:transactions="transactions" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Transactions from './components/Transactions.vue'

export default {
  name: 'app',
  components: {
    Transactions
  },
  data() {
    return {
      transactions: [
        { 
          "_id": "5cb635a79bf27199792b5096", 
          "amount": 9, 
          "merchant": "SREE SAI ENTERPRISES", 
          "timestamp": "12-APR-18 11:04 AM", 
          "balance_amount": 7880.78, 
          "currency": "INR", 
          "account": "HDFC FOODPLUS CARD XXXX7685" 
        },
        { 
          "_id": "5cb635a79bf27199792b5097", 
          "amount": 18, 
          "merchant": "SHAMNAD N", 
          "timestamp": "12-APR-18 11:04 AM", 
          "balance_amount": 7862.78, 
          "currency": "INR", 
          "account": "HDFC FOODPLUS CARD XXXX7685" 
        },
        { 
          "_id": "5cb635a79bf27199792b5154", 
          "amount": 220, 
          "merchant": "TRUFFLES",
          "timestamp": "2018-10-18:13:03:38", 
          "balance_amount": 599058.41,
          "currency": "INR", 
          "account": "HDFC DEBIT CARD 8215", 
          "location": "BANGALORE" 
        }
      ]
    }
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
  margin-top: 60px;
}
</style>
