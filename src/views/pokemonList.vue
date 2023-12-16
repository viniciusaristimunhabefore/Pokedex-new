<template>
  <div>
    <h1>Pokemon List</h1>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">
        <router-link :to="`/pokemon/${pokemon.name}`">{{ pokemon.name }}</router-link>
      </li>
    </ul>

    <button @click="previousPage" :disabled="meta.offset <= 0">Previous</button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue';
import * as PokeApi from "@/api/poke.api";
import { Pokemon } from "@/types";

export default defineComponent({
  name: "PokemonList",
  data() {
  return {
    pokemonList: [] as Pokemon[],
    meta: {
      limit: 20,
      offset: 0,
    },
  };
},
  methods: {
    async getPokemonList() {
      const { data } = await PokeApi.getPokemonList(this.meta);
      this.pokemonList = data.results;
    },
    nextPage() {
      this.meta.offset += this.meta.limit;
      this.getPokemonList();
    },
    previousPage() {
      if (this.meta.offset > 0) {
        this.meta.offset -= this.meta.limit;
        this.getPokemonList();
      }
    },
  },
  mounted() {
      this.getPokemonList();
  },
});
</script>

