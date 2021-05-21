<template>
  Index
</template>

<script>
import {indexInfo} from '/@/api/index'
export default {
  name: 'index',
  mounted () {
    indexInfo().then((data)=> {
      console.log(data.data)
    })
  }
}
</script>

<style scoped>

</style>