import { AxiosResponse } from 'axios';
import { httpRequest } from '../httpMethod/httpRequest';
import dotenv from 'dotenv';
dotenv.config();

const accountId = process.env.ACCOUNT_ID;

export async function addAccountFavourite(mediaId:number): Promise<{status: number}> {
    const url = `account/${accountId}/favorite`;
    const body = { media_type: 'movie', media_id: mediaId, favorite: true };

    try {
        const response = await httpRequest<{status: number}>('POST', url, body);
        return {status: response.status};
    } catch (error) {
        throw error;
    }
}

export async function addAccountWatchlist(mediaId:number): Promise<{status: number}> {
    const url = `account/${accountId}/watchlist`;
    const body = { media_type: 'movie', media_id: mediaId, watchlist: true };

    try {
        const response = await httpRequest<{status: number}>('POST', url, body);
        return {status: response.status};
    } catch (error) {
        throw error;
    }
}