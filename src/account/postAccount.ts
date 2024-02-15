import { AxiosResponse } from 'axios';
import { httpRequest } from '../httpMethod/httpRequest';
import * as ResponseType from './accountResponse'
import dotenv from 'dotenv';
dotenv.config();

const accountId = process.env.ACCOUNT_ID;

export async function addAccountFavourite(): Promise<AxiosResponse> {
    const url = `account/${accountId}/favorite`;
    const body = { media_type: 'movie', media_id: 550, favorite: true };

    try {
        const response = await httpRequest<ResponseType.Status>('POST', url, body);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function addAccountWatchlist(): Promise<AxiosResponse> {
    const url = `account/${accountId}/watchlist`;
    const body = { media_type: 'movie', media_id: 940551, watchlist: true };

    try {
        const response = await httpRequest<ResponseType.Status>('POST', url, body);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}