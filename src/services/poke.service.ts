import { Meta, Params, PokemonApiResponse } from "@/types";
import * as pokeApi from "@/api/poke.api";


export const getPokemonList = async (meta: Meta, params?: Params): Promise<PokemonApiResponse> => {
    try {
        const response = await pokeApi.getPokemonList(meta, params);
        return response.data; 
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getPokemonDetail = async (name: string): Promise<any> => {
    try {
        const response = await pokeApi.getPokemonDetail(name);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}