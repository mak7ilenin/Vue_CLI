<template>
    <li>
        <span>
            <input type="checkbox" 
                @change="todo.completed = !todo.completed"
                :checked="todo.completed ? true : false">
            <strong>{{ index + 1 }}.</strong>
            <p v-bind:class="{completed: todo.completed}">{{ todo.title }}</p>
        </span>
        <button @click="$emit('removeTodo', todo.id)">&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    }
}
</script>