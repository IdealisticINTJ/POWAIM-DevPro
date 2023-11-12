


<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold mb-8">Welcome to POWAIM DevPro Suite</h1>
    <p class="text-xl mb-4">Boost your productivity with our comprehensive task management tool!</p>
    <button
      class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
      @click="toggleDarkMode"
    >
      Toggle Dark Mode
    </button>
    <div class="my-8">
      <h2 class="text-2xl font-bold mb-4">Pomodoro Timer</h2>
      <PomodoroTimer />
    </div>
    <div class="my-8">
      <h2 class="text-2xl font-bold mb-4">To-Do List</h2>
      <TodoList />
    </div>
    <div class="my-8">
      <h2 class="text-2xl font-bold mb-4">Kanban Board</h2>
      <KanbanBoard />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { PomodoroTimer } from '@/components/PomodoroTimer.vue';
import { TodoList } from '@/components/TodoList.vue';
import { KanbanBoard } from '@/components/KanbanBoard.vue';

export default {
  components: {
    PomodoroTimer,
    TodoList,
    KanbanBoard
  },
  setup() {
    const darkMode = ref(false);

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
    };

    return {
      darkMode,
      toggleDarkMode
    };
  }
}
</script>