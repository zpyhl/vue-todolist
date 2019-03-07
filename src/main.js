// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */ 
import Vue from 'vue'
// import TodoList from './TodoList'
import TodoList from './components/TodoList/TodoList';
Vue.config.productionTip = false;
/* eslint-disable no-new */


new Vue(
  {
    el: '#TodoList',
    components: {TodoList},
    template: '<TodoList/>'
  }
)