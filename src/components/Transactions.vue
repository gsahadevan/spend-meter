<template>
    <div>
        <h1>Transactions</h1>
        <div v-bind:key="transaction._id" v-for="transaction in transactions">
            <transaction v-bind:transaction="transaction" />
        </div>
    </div>   
</template>

<script>
import transaction from './Transaction.vue';

export default {
    name: "Transactions",
    components: {
        transaction
    },
    props: ["transactions"]
}
</script>

<style scoped>

</style>
