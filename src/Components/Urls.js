import { API_KEY } from "./Constants/Constants";

export const Originals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const Actions = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const Horror = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const Comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const Romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const Documentary = `discover/movie?api_key=${API_KEY}&with_genres=99`;
export const Trending = `trending/all/week?api_key=${API_KEY}&language=en-US`;