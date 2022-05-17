<template>
  <div>Todo List</div>
  <div class="todo-form">
    <input
      v-model="newItem.name"
      class="todo-name"
      placeholder="Todo"
      type="text"
    >
    <input
      v-model="newItem.deadline"
      class="todo-deadline"
      type="date"
    >
    <button
      class="add-button"
      type="button"
      @click="addItem"
    >
      Add
    </button>
  </div>

  <div class="item-list-container">
    <ul class="item-list">
      <li
        v-for="item in items"
        :key="item.name"
      >
        {{ item.name + ' : ' + item.deadline }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";

interface Todo {
  name: string,
  deadline: string
}

const newItem = reactive<Todo>({name: '', deadline: ''})
const items = reactive<Todo[]>([])

const addItem = () => {
  if (newItem.name != '' && newItem.deadline != '') {
    items.push({name: newItem.name, deadline: newItem.deadline})
    newItem.name = ''
  }
}
</script>

<style lang="scss" scoped>
.todo-form {
  .todo-name, .todo-deadline, .add-button {
    box-sizing: border-box;
    height: 30px;
    vertical-align: middle;

    &:not(:last-child) {
      margin-right: 3px;
    }
  }
}

.item-list-container {
  text-align: center;

  .item-list {
    display: inline-block;
    text-align: left;
  }
}
</style>