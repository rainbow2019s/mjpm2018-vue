<template>
  <div id="Employees">
     <slot name="header"></slot>
     <span>{{count}}</span>
     <slot name="footer"></slot>
     <el-button type="primary" @click.native="increment({n:2})">Increment</el-button>
     <el-button type="primary" @click.native="decrement">Decrement</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['count'])
  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'init'])
  }
}
</script>

<style lang="scss" scoped>
  $color: red;
  span {
    color: $color
  }
</style>
