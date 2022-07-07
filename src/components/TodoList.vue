<template>
    <div>
        <ul>
            <TodoItem 
                v-for="(todo, i) in todos"
                v-bind:todo="todo"
                v-bind:index="i"
                @removeTodo="removeTodo"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    props: ['todos'],
    components: {
        TodoItem
    },
    methods: {
        removeTodo(id) {
            this.$emit('removeTodo', id);
        }
    }
}
</script>