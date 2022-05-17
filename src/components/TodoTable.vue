<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="header-name">Name</th>
          <th>Deadline</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in items" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.deadline }}</td>
          <td>
            <button class="delete-button" @click="deleteItem(index)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { Todo } from './TodoList.vue'
import { saveItems } from '@/utils/storage'

const { items } = defineProps<{ items: Todo[] }>()

const deleteItem = (index: number) => {
  items.splice(index, 1)
  saveItems(items)
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: solid 1px #ccc;
  }

  th,
  td {
    padding: 12px 0;
  }

  th.header-name {
    width: 50%;
  }

  .delete-button {
    $button-color: rgb(199, 80, 50);

    padding: 10px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    color: #eee;
    background-color: $button-color;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: darken($button-color, 5%);
    }
  }
}
</style>
