  
<template>
  <div class="container">
    <input type="text" v-model="modeldate.empName" placeholder="employee name" required>
    <input type="text" v-model="modeldate.email" placeholder="email" required>
    <select name="movie" id="movie" v-model="modeldate.department" required>
      <option>Sales,marketing</option>
      <option>bussines,agri</option>
      <option>xyz,shop</option>
    </select>
    <div class="checkboxstyle">
      <span >Languages:</span>
      <input type="checkbox" id="jack" value="hindi" v-model="modeldate.languages">
      <label for="jack">hindi</label>
      <input type="checkbox" id="john" value="english" v-model="modeldate.languages">
      <label for="john">english</label>
      <input type="checkbox" id="mike" value="telugu" v-model="modeldate.languages">
      <label for="mike">telugu</label>
    </div>
    <input type="number" v-model="modeldate.contact" placeholder="employee contact number" required>
    <button @click="save">save</button>
    <button @click="cancel">cancel</button>
  </div>
</template>

<script>
// import router from '@/router'
export default {
  name: 'Form',
  props:{
    modeldate: Object,
    editvalue: Number,
    editflag: Boolean
  },
  methods: {
    save() {
      if(this.editflag){
        this.$emit('edit', this.modeldate,this.editvalue)
      }else{
        this.$emit('save', this.modeldate)
      }
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>


<style>
input[type=text],input[type=number], select,.checkboxstyle{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 5px;
  /* resize: vertical; */
}


/* Style the submit button */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.checkboxstyle{
  text-align: left;
}
.checkbox{
  padding: 2%;
}
</style>
