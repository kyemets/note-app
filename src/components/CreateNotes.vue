<template>
    <div class="w-15 mt-24 h-30">
      <div v-if="shhielemnt">
        <div>
          <div v-show="shhielemnt">
            <div
              class="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <div>
                <div>
                  <label
                    for="date-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Date
                    </label>
  
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                    v-model="dateNote"
                    class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
  
                <div class="mb-6">
                    <label
                        for="title-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Title
                    </label>
                  <input
                    type="text"
                    id="title-input"
                    name="title"
                    v-model="titleNote"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                    <label
                        for="description-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Description
                    </label>
                  <input
                    type="text"
                    id="description-input"
                    v-model="descriptionNote"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>  
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    @click="sendDataModel"
                    >Create
                  </button>
                  <button 
                    class="text-white bg-red-700 hover:bg-red-600  focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-700  dark:border-red-700" 
                    @click='closeModel'
                    >Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div v-else>
        <button
          type="button"
          v-on:click="showModel"
          class="block mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ml-5 mt-90 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create a note
        </button>
      </div>
    </div>
</template>
  
<script>  
export default {
    data() {
        return {
            titleNote: '',
            descriptionNote: '',
            dateNote: '',
            shhielemnt: false,
        }
    },
  
    methods: {
        showModel() {
            this.shhielemnt =!this.shhielemnt;
        },
        closeModel() {
            this.shhielemnt =!this.shhielemnt;
        },
        sendDataModel() {
            if (this.titleNote.length > 0 && this.descriptionNote.length > 0) {
                const title = this.titleNote;
                const description = this.descriptionNote;
                const date = this.dateNote;

                this.$emit('SeDataToCnote', {
                    title,
                    description,
                    date
                })

                // clear fields
                this.titleNote = '';
                this.descriptionNote = '';
                this.dateNote = '';
                this.shhielemnt =!this.shhielemnt;
            }
        }
    }
}
</script>
  
<style scoped>
</style>