<template>
<li @click='del'>{{value}}</li>
</template>

<script>


export default {
  props: [
      'value',
      'index'
  ],
  methods: {
      del() {

          this.$emit("remove", this.index)
      }
  }

}
</script>

<style>

</style>
