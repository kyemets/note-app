<template>
    <div class='w-55 m-5 mt-4 p-7 border-2 border-sky-500 rounded-lg py-4'>

        <!-- Edit Form -->
        <div 
            v-if='showModalEdit' 
            v-show='showModalEdit'
        >     
            <div>
                <div class='ui form'>
                    <div>
                  <label
                    for="date-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Date
                  </label>
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    datepicker
                    datepicker-autohide
                    type="date"
                    v-model='ThisEVnotesL.date'
                    class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
                    <div class='field'>
                        <label
                            for="title-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Title</label>
                        <input
                            type="text"
                            id="title-input"
                            name="title"
                            v-model='ThisEVnotesL.title'
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="description-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Description</label
                        >
                        <input
                            type="text"
                            id="description-input"
                            v-model="ThisEVnotesL.description"
                            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div class='block mt-5'>
                        <button 
                            type="button" 
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
                            @click='saveEdit'
                            >Save
                        </button>
                        <button 
                            class="text-white bg-red-700 hover:bg-red-600  focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-700  dark:border-red-700" 
                            @click='showFedit'
                            >Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div> 

        <div v-else>
            <div>
                Date: <span> {{ notesL.date }} </span>
            </div>
            <div>
                Title: {{ notesL.title }}
            </div>
            <div>
                Description: {{ notesL.description }}
            </div>

            <div class='block mt-5'>
                <button 
                    type="button" 
                    class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click='showFedit'
                    >Edit
                </button>
                <button 
                    class="text-white bg-red-700 hover:bg-red-600 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-700 dark:border-red-700" 
                    @click='deleteNote(notesL)'
                    >Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: ['notesL'],
  data() {
    return {
        showModalEdit: false,
        ThisEVnotesL: this.notesL,
    }
  },
  methods: {
    deleteNote(note) {
      this.$emit('DeleteNote', note);
    },
    showFedit() {
      this.showModalEdit =!this.showModalEdit;
    },
    saveEdit(){
        this.showModalEdit = !this.showModalEdit;
    }
  }
}
</script>

<style scoped>
</style>