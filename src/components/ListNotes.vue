<template>
    <textNote v-on:DeleteNote='deleteNotes' v-for='note in notesD' :key="note" :notesL='note'/>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import TextNote from './TextNote.vue';

export default {
    props: ['notesD'],
    components: {
        TextNote,
    },
    methods: {
        deleteNotes(note) {
            const removeNote = confirm("Are you sure you want to delete this note?");
            if (removeNote) {
                const thisNote = this.notesD;
                const indexOfNote = thisNote.indexOf(note);
                thisNote.splice(indexOfNote, 1)

                toast("The note was deleted successfully!", {
                    autoClose: 1000,
                    position: "top-center",
                    type: "success",
                    theme: "colored",
                    closeOnClick: true,
                    pauseOnHover: true,
                }); 
            }
        },
    }
}
</script>

<style>
</style>