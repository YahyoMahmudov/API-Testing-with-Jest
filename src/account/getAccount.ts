import { AxiosResponse } from 'axios';
import { httpRequest } from '../httpMethod/httpRequest';
import * as ResponseType from './accountResponse'
import dotenv from 'dotenv';
dotenv.config();

const accountId = process.env.ACCOUNT_ID;

export async function getAccountDetails(): Promise<AxiosResponse> {
    const url = `account/${accountId}`;

    try {
        const response = await httpRequest<ResponseType.AccountDetails>('GET', url);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function getAccountFavouriteMovies(): Promise<AxiosResponse> {
    const url = `account/${accountId}/favorite/movies`;

    const queryParams = {
        language: 'en-US',
        page: 1,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function getAccountFavouriteTV(): Promise<AxiosResponse> {
    const url = `account/${accountId}/favorite/tv`;

    const queryParams = {
        language: 'en-US',
        page: 1,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function getAccountLists(): Promise<AxiosResponse> {
    const url = `account/${accountId}/lists`;

    const queryParams = {
        page: 1,
    };

    try {
        const response = await httpRequest<ResponseType.List>('GET', url, queryParams);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function getAccountRatedMovies(): Promise<AxiosResponse> {
    const url = `account/${accountId}/rated/movies`;

    const queryParams = {
        language: 'en-US',
        page: 1,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function getAccountRatedTV(): Promise<AxiosResponse> {
    const url = `account/${accountId}/rated/tv`;

    const queryParams = {
        language: 'en-US',
        page: 1,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function getAccountRatedTvEpisodes(): Promise<AxiosResponse> {
    const url = `account/${accountId}/rated/tv/episodes`;

    const queryParams = {
        language: 'en-US',
        page: 1,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.Episode>('GET', url, queryParams);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function getAccountWatchlistMovies(): Promise<AxiosResponse> {
    const url = `account/${accountId}/watchlist/movies`;

    const queryParams = {
        language: 'en-US',
        page: 1,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function getAccountWatchlistTV(): Promise<AxiosResponse> {
    const url = `account/${accountId}/watchlist/tv`;

    const queryParams = {
        language: 'en-US',
        page: 1,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<ResponseType.MovieAndTV>('GET', url, queryParams);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}