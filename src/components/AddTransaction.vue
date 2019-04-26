<template>
    <div>
        <form @submit="addTransaction">
            <input type="text" v-model="amount" name="title" placeholder="Add Transaction">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTransaction",
    data() {
       return {
           amount: ''
       } 
    },
    methods: {
        addTransaction(e) {
            e.preventDefault();
            const newTransaction = {
                amount: this.amount
            }
            this.$emit('add-transaction', newTransaction);

            this.amount = '';
        }
    }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
