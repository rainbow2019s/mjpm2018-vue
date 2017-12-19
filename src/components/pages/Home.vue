<template>
  <div id="Home">
     <p>Home</p> 
     <Employees>
       <p slot="header">员工列表</p>
       <p slot="footer">共20名</p>
     </Employees>
  </div>
</template>

<script>
import Employees from '@/components/business/Employees'
export default {
  components: {
    'Employees': Employees
  }
}
</script>

<style lang="css" scoped>
  
</style>