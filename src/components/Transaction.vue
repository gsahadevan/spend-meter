<template>
    <div class="transaction">
        <p>
            {{ transaction.amount }}
            <button @click="$emit('del-transaction', transaction._id)" class="del">x</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "Transaction",
    props: ["transaction"]
}
</script>

<style scoped>
.transaction {
    padding: 10px;
    border: 1px solid;
}

.del {
    background: red;
    color: white;
    float: right;
    border-radius: 50%;
    padding: 5px 9px;
}
</style>
