<template>
<div class="chat container">
  <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
      <div class="chat-title">
          <h5 class="display-5">MY<span>CHAT</span></h5>
      </div>
      <div class="card">
  <div class="card-body">
    <ul class="messages">
        <li v-for="message in messages " :key="message.id">
            <span class="name">{{message.name}}:</span>
            <span class="message">{{message.content}}</span>
            <span class="time">{{message.time}}</span>
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
import db from'@/firebase/init'
import moment from'moment'

export default {
name:'Chat',
props:['name'],
data(){
    return{
    messages:[]
    }
},
components:{
    NewMessage
},
created(){
    let ref=db.collection('message').orderBy('time');
    ref.onSnapshot(snapShot=>{
    snapShot.docChanges().forEach(change=>{
        if(change.type=='added'){
            let doc=change.doc
            this.messages.push({
                id:doc.id,
                name:doc.data().name,
                content:doc.data().content,
                time:moment(doc.data().time).format('lll'),
            })
        }
    })
    })
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
    font-size:0.8rem;
}
.name{
    color:#045762;
}
.message{
    color:#65d6ce;
    overflow: auto;
}
.card-footer{
    border-top:none;
    background:none;
}
</style>