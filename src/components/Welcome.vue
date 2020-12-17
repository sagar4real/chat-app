<template>
  <div class="welcome container">
    <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
   <div class="card">
      <h2 class="card-title">WELCOME</h2>
  <div class="card-body">
    <form @submit.prevent="enterChat">
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Enter Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="name">
  </div>
  <button type="submit" class="btn btn-primary ">ENTER CHAT</button>
</form>
  </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
    name:null,
    }
  },
  methods:{
    enterChat(){
      console.log(this.name);
      this.name=null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card{
  padding:100px;
  border:2px solid #e6e6e6;
  box-shadow:2px 2px 2px  #e6e6e6;
  font-family: 'Oswald', sans-serif;
}
.card .card-title{
  color:#045762;
}
.card label{
  color:#bedbbb;
}
.card input{
  border-radius:0px;
  border-top:none;
  border-right:none;
  border-left:none;
  border-bottom:2px solid #045762;
}
.form-control:focus {
    color: #212529;
    background-color: #fff;
    outline: transparent;
    box-shadow: 0 0 0 -2.75rem rgba(13,110,253,.25);
}
.card button{
  background:#045762;
  margin-top:20px; 
}
.card button:hover{
  background:white;
  color:#045762;
  border:1px solid #045762;
}
</style>
