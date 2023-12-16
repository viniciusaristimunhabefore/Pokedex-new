<template>
    <nav class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><button @click="goBack">Go Back</button></li>
        </ul>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NavBar',
    methods: {
    goBack() {
      this.$router.go(-1); 
    },
  },
  });
  </script>
  
  <style scoped>
    nav {
        background-color: #26a69a;
    }
  </style>