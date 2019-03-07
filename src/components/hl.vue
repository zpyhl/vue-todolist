<template>
<div>
    <input type="text" v-model="inputValue">
    <button @click="handleAdd">add</button>
    <!-- <ul>
        <li v-for='(item, index) of list'
        :key='index'
        :value='item'>{{item}}</li>
    </ul> -->
    <ul>
        <hl-love-zpy v-for='(item, index) of list' :key='index' :value='item' :index='index' @remove='del'></hl-love-zpy>
    </ul>
</div>
</template>

<script>

import Zpy from './zpy';

export default {

    components: {'hl-love-zpy': Zpy},
    
    data() {
        return {
            list: [],
            inputValue: '',
        };
    },

    methods: {
        handleAdd(){
            if (this.inputValue) {

                this.list.push(this.inputValue);
                this.inputValue = '';
            }
        },
        del(index) {
            this.list.splice(index, 1)
        }
    }
    
}
</script>

<style>

</style>
