<template>
  <div>
    <div class="nav">>{{head}}</div>
    <div v-if=!add>
      <button class="btn" @click="addform">Add</button>
      <table id="firstTable">
          <thead>
            <tr>
              <th>Emp.name</th>
              <th>Email ID</th>
              <th>department</th>
              <th>Languages</th>
              <th>Contact No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row,index) in getpersonaldata" :key="index">
              <td>{{row.empName}}</td>
              <td>{{row.email}}</td>
              <td>{{row.department}}</td>
              <td>{{row.languages.join(',')}}</td>
              <td>{{row.contact}}</td>
              <td><button @click="edit(index)">edit</button><button @click="discard(index)">remove</button></td>
            </tr>
          </tbody>
      </table>
    </div>
    <div v-if="add">
       <Formcomponent 
            @save="save"
            @cancel="cancel"
            @edit="editvalueitem"
            :modeldate ="modeldate"
            :editvalue="editvalue"
            :editflag="editflag"
        />
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions  } from "vuex";
import Formcomponent from "@/components/Formcomponent"
export default {
  name: 'HelloWorld',
  data(){
     return{
       headernames:["Emp.name","Email ID","Department","Languages","Contact No"],
       head: 'Home',
       editflag: false,
       add:false,
       editvalue:0,
       modeldate:{
         empName: '',
         email:'',
         department:[],
         languages:[],
         contact: null
      }
     }
  },
  components:{
    Formcomponent
  },
  props: {
    msg: String
  },
  computed:{
    ...mapGetters(["getpersonaldata"])
  },
  methods:{
    ...mapActions(["removeitem","additem"]),
    discard(id){
      this.removeitem(id)
    },
    addform(){
      this.editflag = false
      this.head = "add Form"
      this.add = true
      this.modeldate.empName='',
      this.modeldate.email='',
      this.modeldate.department=[],
      this.modeldate.languages=[],
      this.modeldate.contact=null
    },
    cancel(){
      this.add = false
    },
    save(obj){
      this.add = false
      this.head = "Home"
      this.additem(obj)
    },
    editvalueitem(obj,value){
      this.head = "Home"
      this.add = false
      this.removeitem(value)
      this.additem(obj)
    },
    edit(index){
      this.head = "edit Form"
      this.add = true
      this.editvalue= index
      this.editflag = true
       this.modeldate.empName = this.$store.getters.getpersonaldata[index].empName
       this.modeldate.email = this.$store.getters.getpersonaldata[index].email
       this.modeldate.department=this.$store.getters.getpersonaldata[index].department,
       this.modeldate.languages=this.$store.getters.getpersonaldata[index].languages,
       this.modeldate.contact=this.$store.getters.getpersonaldata[index].contact
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.displayflex{
 display: flex;
 justify-content: space-between;
}

table {
  font-family: 'Open Sans', sans-serif;
  width: 99%;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: rgb(116, 116, 207);
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid rgb(42, 42, 100);
}
table td:last-child {
  border-right: none;
}

.btn{
  width: 74px;
  padding: 10px;
  float: right;
  margin-bottom: 30px;
  margin-right: 10px;
  color: white;
  background: rgb(102, 102, 179);
  border-radius: 8px;
}
.nav{
  text-align: left;
  margin-left: 13px;
  border-bottom: 1px solid;
  margin-bottom: 6px;
}
</style>
