export interface Meta {
    limit: number;
    offset: number;
}

export interface Params {
    [key: string]: any;
}

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonApiResponse {
    results: Pokemon[];
}

export interface PokemonDetails {
    name: string;
    sprites: {
      front_default: string;
    };
    height: number;
    weight: number;
    abilities: {
      ability: {
        name: string;
      }
    }[];
  }