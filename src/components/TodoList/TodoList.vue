<template>
  <div class="template">
      <input type="text"  class="input-text" placeholder="what needs to be done" 
      v-model="inputValue" @keyup.enter="add">
      <ul>
        <li v-for="(item,index) of list" :key="index"  v-bind:class="{active: item.isCompleted}" >
            <input type="checkbox" @click="tab(index)">
            {{item.value}}
            <button class="close" @click="close(index)">x</button>
        </li>
      </ul>
      <div class="footer">
          <div class="left-item">
              <span>{{list.length}}</span>
              <span>left item</span>
            </div>
          <div class="filter">
              <button class="all" @click="all">All</button>
              <button class="active" @click="active">Active</button>
              <button class="completed" @click="completed">Completed</button>
          </div>
          <div class="clear">Clear Completed</div>
      </div>
  </div>
</template>
<script>
export default{
    data:function () {
        return {
            inputValue:'' ,
            list:[],
        }
    },
    methods:{
        add:function(){
            if(this.inputValue){
                this.list.push({
                    value:this.inputValue,
                    isCompleted:false
                });
                this.inputValue = '';
            }
        },
        close:function(index){
              this.list.splice(index,1);
        },
        tab:function(index){
            this.list[index].isCompleted = ! this.list[index].isCompleted;
        },
        all:function(){

''
        },
        active:function(){

        },
        completed:function(){

        }
    }
}

    
</script>

<style scoped>
    .template {
        width: 500px;
        margin:100px auto;
        padding: 10px;
        border: 1px solid gray;
    }
    .template .input-text {
        width: 90%;
        height: 30px;
        padding-left: 10px;
        outline: none;
    }
    .template ul li {
        list-style: none;
        position: relative;
        border-bottom:1px solid gray;
    }
    .template ul li .close {
        display:inline-block;
        /* width: 10px;
        height: 10px; */
        /* border: 1px solid #ccc; */
        position: absolute;
        right:10px;
    }
    .template .footer {
        display: flex;
        justify-content: space-between;
    }
    .template ul .active {
        opacity: .5;
    }
</style>
