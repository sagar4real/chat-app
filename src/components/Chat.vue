<template>
<div class="chat container">
  <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
      <div class="chat-title">
          <h5 class="display-5">MY<span>CHAT</span></h5>
      </div>
      <div class="card">
  <div class="card-body">
    <ul class="messages">
        <li>
            <span class="name">Name</span>
            <span class="message">Message</span>
            <span class="time">Time</span>
        </li>
    </ul>
  </div>
  <div class="card-footer">
    <NewMessage  :name="name"/>
  </div>
</div>
  </div>
</div>
</template>

<script>
import NewMessage from'@/components/Newmessage'
import Newmessage from './Newmessage.vue'
export default {
name:'Chat',
props:['name'],
data(){
    return{

    }
},
components:{
    NewMessage
}    
}
</script>

<style>
.chat{
    font-family: 'Oswald', sans-serif;
}
.chat-title{
    color:#045762;
}
.chat-title span{
    color:black;
}
.chat .card{
    margin-top:50px;
}
.messages{
    list-style:none;
}
.time{
    display:block;
}
.name{
    color:#045762;
}
.message{
    color:#65d6ce;
}
.card-footer{
    border-top:none;
    background:none;
}
</style>