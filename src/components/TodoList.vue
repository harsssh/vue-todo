<template>
  <div>
    <h2>Todo List</h2>
    <div>
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

<script lang="ts">
export interface Todo {
  name: string
  deadline: string
}
</script>

<script lang="ts" setup>
import { reactive } from 'vue'
import TodoTable from './TodoTable.vue'

const newItem = reactive<Todo>({ name: '', deadline: '' })
const items = reactive<Todo[]>([])

const addItem = () => {
  if (newItem.name != '' && newItem.deadline != '') {
    items.push({ name: newItem.name, deadline: newItem.deadline })
    newItem.name = ''
  }
}
</script>

<style lang="scss" scoped>
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

.add-button {
  padding: 0 10px;
  border: solid 1px;
  border-radius: 3px;
  background-color: #fff;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
}

.todo-deadline {
  cursor: pointer;
}

.todo-table {
  margin: 10px auto 0;
  width: 90%;
}
</style>
