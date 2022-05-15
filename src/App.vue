<template>
  <main id="wrapper" :class="active? 'active' : ''">
        <Input :change="change" :active="active"/>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Input from './components/Input.vue'


export default defineComponent({
  name: 'App',
  components: {
    Input
  },
  setup() {
    const active = ref(false)
    const change = () => {
      active.value = !active.value;
    }

    return {
      active,
      change
    }
  }

});
</script>

<style scoped>
    @import './css/global.css';
</style>>


