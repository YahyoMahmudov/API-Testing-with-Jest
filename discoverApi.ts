import axios, { AxiosResponse } from 'axios';
// require('dotenv').config();
import 'dotenv/config'
const apiKey = process.env.API_KEY;


interface MovieData {
    results: any;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

async function fetchData(): Promise<AxiosResponse<MovieData>> {
  const url =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        `Bearer ${apiKey}`,
    },
  };

  try {
    const response: AxiosResponse<MovieData> = await axios.get(url, options);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

fetchData().then((data) => console.log(data));

export default fetchData;
