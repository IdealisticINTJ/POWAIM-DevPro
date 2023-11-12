


<template>
  <div>
    <!-- TODO: Add PomodoroTimer component here -->
    <div class='flex justify-center items-center h-screen'>
      <div class='text-center'>
        <h1 class='text-4xl font-bold mb-4'>Welcome to POWAIMDevPro</h1>
        <p class='text-lg mb-8'>Boost your productivity with our comprehensive task management suite!</p>
        <div class='flex justify-center'>
          <Link to='/kanban' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'>Kanban Board</Link>
          <Link to='/todo' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>To-Do List</Link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Link } from 'react-router-dom';

export default {
  name: 'Home',
}
</script>

<style scoped>
/* TODO: Add your custom styles here */
</style>