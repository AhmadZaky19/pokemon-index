import axios from "../../utils/axios";

export const getAllDataPokemon = (limit) => {
  return {
    type: "GET_ALL_DATA_POKEMON",
    payload: axios.get(`pokemon?limit=${limit}&offset=0`),
  };
};

export const getDataPokemon = (name) => {
  return {
    type: "GET_DATA_POKEMON",
    payload: axios.get(`pokemon/${name}/`),
  };
};
