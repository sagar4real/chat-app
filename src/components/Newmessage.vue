<template>
    <div class="new-message">
     <form @submit.prevent="addmessage">
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Your Message</label>
    <input type="text" class="form-control" id="exampleInputEmail1" v-model="message">
    <p v-if="feedback" class="lead text-danger">{{feedback}}</p>
  </div>
     </form>
    </div>
</template>

<script>
import db from'@/firebase/init'

export default {
    name:"new-message",
    props:["name"],
    data(){
        return{
         message:null,
         feedback:null
        }
    },
    methods:{
        addmessage(){
              if(this.message){
          db.collection('message').add({
              name:this.name,
              content:this.message,
              time:Date.now()
          })
          this.message=null;
        }
            else{
               this.feedback="you must enter the msg to chat";
            }
        }
    }
}
</script>

<style>

</style>