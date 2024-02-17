import { httpRequest } from '../httpMethod/httpRequest';
import * as ResponseType from './movieListResponse'

export async function getNowPlayingMovies(page: number = 1): Promise<{ data: ResponseType.MovieList, status: number }> {
    const url = `/movie/now_playing`;

    const queryParams = {
        language: 'en-US',
        page
    };

    try {
        const response = await httpRequest<ResponseType.MovieList>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getPopularMovies(page: number = 1): Promise<{ data: ResponseType.MovieList, status: number }> {
    const url = `/movie/popular`;

    const queryParams = {
        language: 'en-US',
        page
    };

    try {
        const response = await httpRequest<ResponseType.MovieList>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getTopRatedMovies(page: number = 1): Promise<{ data: ResponseType.MovieList, status: number }> {
    const url = `/movie/top_rated`;

    const queryParams = {
        language: 'en-US',
        page
    };

    try {
        const response = await httpRequest<ResponseType.MovieList>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getUpcomingMovies(page: number = 1): Promise<{ data: ResponseType.MovieList, status: number }> {
    const url = `/movie/upcoming`;

    const queryParams = {
        language: 'en-US',
        page
    };

    try {
        const response = await httpRequest<ResponseType.MovieList>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}