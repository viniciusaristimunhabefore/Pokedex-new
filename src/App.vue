<template>
  <div class="container">
    <NavBar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/navBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
});
</script>