<template>
    <div class="new-message">
     <form @submit.prevent="addmessage">
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Your Message</label>
    <input type="text" class="form-control" id="exampleInputEmail1" v-model="message">
  </div>
     </form>
    </div>
</template>

<script>
export default {
    name:"new-message",
    props:["name"],
    data(){
        return{
         message:null,
        }
    },
    methods:{
        addmessage(){
            console.log(this.name,this.message,Date.now());
        }
    }
}
</script>

<style>

</style>