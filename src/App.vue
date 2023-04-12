<template>
  <div class='m-5'>
    <h1 class="text-5xl mb-4 font-extrabold dark:text-white">Create notes</h1>

      <label for="todosNumber">
        <small class="ml-0 font-semibold text-gray-500 dark:text-gray-400"
          >Number of todos to generate (min2/max500):
        </small>
      </label>

      <input 
        type="text" 
        id="todosNumber" 
        class="block w-full p-2 z-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" 
        v-model.number="numberOfTodos" 
        min="2" 
        max="500" 
        required
      >

      <div v-if="numberOfTodos">
        <button 
          type="button" 
          class="text-white bg-blue-400 dark:bg-blue-500 cursor font-medium rounded-lg text-sm px-5 py-2.5 text-center" @click="generateTodos"
          >Generate Notes
        </button>
      </div>

      <div v-else>
          <button 
            type="button" 
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-not-allowed" 
            disabled
            >Generate Notes
          </button>
      </div>
  </div>

  <create-note 
    v-on:SeDataToCnote='CreateNote' 
  />
  <list-notes 
    :notesD='notes'
  />
</template>

<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import CreateNote from './components/CreateNotes.vue';
import ListNotes from './components/ListNotes.vue';

export default {
  name: 'App',
  components: {
    CreateNote,
    ListNotes
  },
  data() {
    const notify = () => {
      toast("Wow so easy !", {
        autoClose: 1000,
        position: "top-center",
        type: "success",
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true, 
      }); 
    }

    return {
      notes: [],
      numberOfTodos: '',
      notify ,
    }
  },
  methods: {
    CreateNote(note) {
      this.notes.push(note)
    
      // check notes with similar date
      const foundNote = (notes, findNote) => {
        const countValue = notes.filter(note => note.date === findNote.date).length
        const similarity =  ((100 * countValue) / notes.length)
              
          if (similarity < 80) {
              console.log(`similarity: ${similarity}`)

          } else if (similarity === 80){
              console.log(`Note with similar date already exists! - similarity: ${similarity}`)

              toast(`Note with similar date already exists!`, {
                autoClose: 2000,
                position: "top-center",
                type: "error",
                theme: "error",
                closeOnClick: true,
                pauseOnHover: true,      
                  
              },)
          } else {
            console.log(`similarity: ${similarity}`)
          } 
      }
      foundNote(this.notes, note),

      toast("The note was created successfully!", {
        autoClose: 2000,
        position: "top-center",
        type: "success",
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,        
      })
    },

    generateTodos() {
      axios
        .get(`http://localhost:3000/todos?count=${this.numberOfTodos}`)
        .then((response) => {
          this.notes = response.data;
          console.log(this.notes);
        })
        .catch(() => {
          this.showMessage = true;
          this.message = 'Error generating todos';
        });

        toast("The notes were successfully generated!", {
          autoClose: 2000,
          position: "top-center",
          type: "success",
          theme: "colored",
          closeOnClick: true,
          pauseOnHover: true, 
      })
    },
  },
}
</script>

<style src="./style.css">
</style>