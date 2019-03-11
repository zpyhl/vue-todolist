<template>
  <div class="template">
    <input
      type="text"
      class="input-text"
      placeholder="what needs to be done"
      v-model="inputValue"
      @keyup.enter="add"
    >
    <input type="checkbox" class="select" @click="select" v-model="allSelect">
    <ul>
      <li v-for="(item,index) of list" :key="index" v-bind:class="{active: item.isCompleted}">
        <input type="checkbox" v-model="item.isCompleted" @click="tab(index)">
        <span v-show='!item.isEdit' class="text-item" @dblclick="edit(index)" >{{item.value}}</span>
        <input v-show='item.isEdit' autofocus  type="text" class="input-edit hl" @blur="noEdit(index)" v-bind:value="item.value" >
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
      <div class="clear">
        <button class="clearCompleted" @click="clearCompleted">Clear Completed</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      inputValue: "",
      list: [],
      filterList: [],
      allSelect: false
    };
  },
  methods: {
    add: function() {
      if (this.inputValue) {
        this.list.push({
          value: this.inputValue,
          isCompleted: false,
          isEdit: false,
        });

        this.filterList.push({
          value: this.inputValue,
          isCompleted: false,
          isEdit: false,
        });

        this.inputValue = "";
      }
    },
    close: function(index) {
      this.list.splice(index, 1);
    },
    tab: function(index) {
      this.list[index].isCompleted = this.filterList[index].isCompleted = !this
        .list[index].isCompleted;

      this.allSelect = this.list.every(function(v) {
        return v.isCompleted === true;

      });
    },
    all: function() {
      this.list = this.filterList;
    },
    active: function() {
      this.list = this.filterList.filter((v, i) => v.isCompleted === false);
      this.allSelect = this.list.every(function(v) {
        return v.isCompleted === true;
      });
    },
    completed: function() {
      this.list = this.filterList.filter((v, i) => v.isCompleted === true);
      this.allSelect = this.list.every(function(v) {
        return v.isCompleted === true;
      });
    },
    clearCompleted: function() {
      this.list = this.filterList = this.filterList.filter(
        (v, i) => v.isCompleted === false
      );
      this.allSelect = this.list.every(function(v) {
        return v.isCompleted === true;
      });
    },
    select: function() {
      this.allSelect = !this.allSelect;
      // if(this.allSelect){
      //   this.list.forEach(function(v) {
      //     v.isCompleted=true;
      //   });
      // } else {
      //     this.list.forEach(function(v) {
      //     v.isCompleted=false;
      //   });
      // }
      var _this = this;
      this.list.forEach(function(v) {
        // if(_this.allSelect){
        //   v.isCompleted=true;
        // } else {
        //   v.isCompleted=false;
        // }
        // (_this.allSelect)  ? (v.isCompleted=true) : (v.isCompleted=false);
        v.isCompleted = _this.allSelect ? true : false;
      });
    },
    edit:function(index){
      if(this.list[index].isCompleted) {
        this.list[index].isEdit = false;
      } else {
        this.list[index].isEdit = true;
      }
    },
    noEdit:function(index){
      this.list[index].isEdit = false 
    }
  }
};
</script>

<style scoped>
.template {
  width: 500px;
  margin: 100px auto;
  padding: 10px;
  border: 1px solid gray;
}
.template .input-text {
  width: 90%;
  height: 30px;
  padding-left: 10px;
  outline: none;
}
.template .text-item {
  display: inline-block;
  width: 300px;
}
.template ul li {
  list-style: none;
  position: relative;
  border-bottom: 1px solid gray;
}
.template ul li .close {
  display: inline-block;
  /* width: 10px;
        height: 10px; */
  /* border: 1px solid #ccc; */
  position: absolute;
  right: 10px;
}
.template .footer {
  display: flex;
  justify-content: space-between;
}
.template ul .active {
  opacity: 0.5;
}
</style>
