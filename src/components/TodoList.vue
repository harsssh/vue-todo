<template>
  <div>
    <h2>Todo List</h2>
    <div class="todo-form">
      <input
        v-model="newItem.name"
        class="todo-name"
        placeholder="Todo"
        type="text"
      />
      <input v-model="newItem.deadline" class="todo-deadline" type="date" />
      <button class="add-button" type="button" @click="addItem">Add</button>
    </div>

    <TodoTable :items="items" class="todo-table" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import TodoTable, { Todo } from './TodoTable.vue'

const newItem = reactive<Todo>({ name: '', deadline: '' })
const items = reactive<Todo[]>([{ name: 'sample', deadline: '2022-05-18' }])

const addItem = () => {
  if (newItem.name != '' && newItem.deadline != '') {
    items.push({ name: newItem.name, deadline: newItem.deadline })
    newItem.name = ''
  }
}
</script>

<style lang="scss" scoped>
.todo-form {
  .todo-name,
  .todo-deadline,
  .add-button {
    box-sizing: border-box;
    height: 30px;
    vertical-align: middle;

    &:not(:last-child) {
      margin-right: 3px;
    }
  }
}

.todo-table {
  margin: 10px auto 0;
  width: 90%;
}
</style>
