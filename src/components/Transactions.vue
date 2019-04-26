<template>
  <div>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="transactions">
      <div
      class="transaction"
        v-bind:key="transaction._id"
        v-for="transaction in transactions"
      >{{ transaction.merchant }}
</div>
    </div>
  </div>
</template>

<script>
import transaction from "./Transaction.vue";
import { mapGetters } from 'vuex';

export default {
  name: "Transactions",
  computed: mapGetters(['allTransactions']),
  components: {
    transaction
  },
  props: ["transactions"]
};
</script>

<style scoped>
.transactions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.transaction {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
