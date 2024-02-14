import { AxiosResponse } from "axios";
import { MovieDetails } from "./discoverDetails";
import { httpRequest } from "../httpMethod/httpRequest";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.BASE_URL;

export async function getMovieList(): Promise<AxiosResponse<MovieDetails>> {
  const url = `discover/movie`;

  const queryParams = {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  };

  try {
    const response = await httpRequest<MovieDetails>(
      "GET",
      url,
      queryParams
    );
    return response;
  } catch (error) {
    console.error("Error fetching account details:", error);
    throw error;
  }
}

export async function getTvShowlist(): Promise<AxiosResponse<MovieDetails>> {
  const url = `discover/tv`;

  const queryParams = {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  };

  try {
    const response = await httpRequest<MovieDetails>(
      "GET",
      url,
      queryParams
    );
    return response;
  } catch (error) {
    console.error("Error fetching account details:", error);
    throw error;
  }
}
