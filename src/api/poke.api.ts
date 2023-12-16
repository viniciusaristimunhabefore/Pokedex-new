import axios, { AxiosResponse } from 'axios';
import { POKE_API_URL } from "@/constants";
import { Meta, Params, PokemonApiResponse } from "@/types";

export const getPokemonList = (meta: Meta, params?: Params): Promise<AxiosResponse<PokemonApiResponse>> => {
    return axios.get<PokemonApiResponse>(`${POKE_API_URL}/pokemon`, {
        params: {
            limit: meta.limit,
            offset: meta.offset,
            ...params
        }
    });
};

export const getPokemonDetail = (name: string): Promise<AxiosResponse<any>> => {
    return axios.get(`${POKE_API_URL}/pokemon/${name}`);
}