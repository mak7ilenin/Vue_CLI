<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            console.log('Submit', this.title);
            if(this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }
                this.$emit('addTodo', newTodo);
                this.title = '';
            }
        }
    }
}
</script>

<style>
    form {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px auto;
    }
    input {
        width: 500px;
        height: 35px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 500;
        padding-left: 20px;
        margin-right: 2px;
    }
    [type="submit"] {
        width: 100px;
        height: 40px;
        font-size: 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: all .3s;
    }
    [type="submit"]:hover {
        transform: scale(1.04);
        font-size: 21px;
        background-color: #adff2f;
        letter-spacing: 1px;
    }
</style>