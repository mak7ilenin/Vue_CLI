<template>
    <div>
        <ul>
            <TodoItem 
                v-for="todo in todos"
                v-bind:todo="todo"
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
    }
}
</script>