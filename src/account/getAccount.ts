import { AxiosResponse } from 'axios';
import { httpRequest } from '../httpMethod/httpRequest';
import * as ResponseType from './accountResponse'
import dotenv from 'dotenv';
dotenv.config();

const accountId = process.env.ACCOUNT_ID;

export async function getAccountDetails(): Promise<{ data: ResponseType.AccountDetails, status: number }> {
    const url = `account/${accountId}`;

    try {
        const response = await httpRequest<ResponseType.AccountDetails>('GET', url);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getAccountFavouriteMovies(page: number = 1): Promise<{ data: ResponseType.MovieAndTV, status: number }> {
    const url = `account/${accountId}/favorite/movies`;

    const queryParams = {
        language: 'en-US',
        page,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getAccountFavouriteTV(page: number = 1): Promise<{ data: ResponseType.MovieAndTV, status: number }> {
    const url = `account/${accountId}/favorite/tv`;

    const queryParams = {
        language: 'en-US',
        page,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getAccountLists(page: number = 1): Promise<{ data: ResponseType.List, status: number }> {
    const url = `account/${accountId}/lists`;

    const queryParams = {
        page,
    };

    try {
        const response = await httpRequest<ResponseType.List>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getAccountRatedMovies(page: number = 1): Promise<{ data: ResponseType.MovieAndTV, status: number }> {
    const url = `account/${accountId}/rated/movies`;

    const queryParams = {
        language: 'en-US',
        page,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getAccountRatedTV(page: number = 1): Promise<{ data: ResponseType.MovieAndTV, status: number }> {
    const url = `account/${accountId}/rated/tv`;

    const queryParams = {
        language: 'en-US',
        page,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getAccountRatedTvEpisodes(page: number = 1): Promise<{ data: ResponseType.Episode, status: number }> {
    const url = `account/${accountId}/rated/tv/episodes`;

    const queryParams = {
        language: 'en-US',
        page,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.Episode>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getAccountWatchlistMovies(page: number = 1): Promise<{ data: ResponseType.MovieAndTV, status: number }> {
    const url = `account/${accountId}/watchlist/movies`;

    const queryParams = {
        language: 'en-US',
        page,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}

export async function getAccountWatchlistTV(page: number = 1): Promise<{ data: ResponseType.MovieAndTV, status: number }> {
    const url = `account/${accountId}/watchlist/tv`;

    const queryParams = {
        language: 'en-US',
        page,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return { data: response.data, status: response.status };
    } catch (error) {
        throw error;
    }
}