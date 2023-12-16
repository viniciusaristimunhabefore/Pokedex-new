<template>
    <div>  
        <h1>Pokemon Detail</h1>
        <div v-if="pokemon">
            <h2>{{ pokemon.name }}</h2>
            <img v-if="pokemon.sprites" :src="pokemon.sprites.front_default" alt="Pokemon image">
            <p>Height: {{ pokemon.height }}</p>
            <p>Weight: {{ pokemon.weight }}</p>
            <p>Abilities:</p>
            <ul>
            <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
                {{ ability.ability.name }}
            </li>
            </ul>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import * as PokeApi from "@/api/poke.api";
import { PokemonDetails } from "@/types";

export default defineComponent({
  name: "PokemonDetail",
  data() {
    return {
      pokemon: {} as PokemonDetails,
    };
  },
  methods: {
    async getPokemon() {
      const pokemonName = this.$route.params.name;
      if (typeof pokemonName === 'string') {
        const { data } = await PokeApi.getPokemonDetail(pokemonName);
        this.pokemon = data;
      } 
    },
  },
  mounted() {
    this.getPokemon();
  },
});
</script>
  
  