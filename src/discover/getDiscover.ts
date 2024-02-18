import { AxiosError, AxiosResponse } from "axios";
import { MovieListDetails, TvShowListDetails } from "./movieDetails";
import { httpRequest } from "../httpMethod/httpRequest";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.BASE_URL;

export async function getMovieList(page:number): Promise<{data: MovieListDetails, status:number}> {
  const url = `discover/movie`;

  const queryParams = {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: page,
    sort_by: "popularity.desc",
  };

  try {
    const response = await httpRequest<MovieListDetails>(
      "GET",
      url,
      queryParams
    );
    return {data:response.data, status:response.status};
  } catch (err) {
    const error = err as AxiosError<{message:string}>
    const message = {
      message:error.response!.data!.message,
      status:error.status
    }
    throw new Error(JSON.stringify(message));
  }
}

export async function getTvShowlist(page:number): Promise<{data: TvShowListDetails, status:number}> {
  const url = `discover/tv`;
  const queryParams = {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: page,
    sort_by: "popularity.desc",
  };

  try {
    const response = await httpRequest<TvShowListDetails>(
      "GET",
      url,
      queryParams
    );
    return  {data:response.data, status:response.status}
  } catch (error) {
    throw error;
  }
}
