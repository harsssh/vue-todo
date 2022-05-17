import { Todo } from '@/components/TodoList.vue'

const KEY = 'todo-items'

const saveItems = (items: Todo[]) => {
  const json = JSON.stringify(items)
  localStorage.setItem(KEY, json)
}

const loadItems = (): Todo[] => {
  const value = localStorage.getItem(KEY)
  if (!value) return []

  try {
    const items: Todo[] = JSON.parse(value)
    return items
  } catch (e) {
    console.log(e)
    return []
  }
}

export { saveItems, loadItems }
