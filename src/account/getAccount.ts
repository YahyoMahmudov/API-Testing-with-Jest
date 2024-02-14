import { AxiosResponse } from 'axios';
import { AccountDetailsI } from './accountDetailsI'
import { httpRequest } from '../httpMethod/httpRequest';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = process.env.BASE_URL;
const accountId = process.env.ACCOUNT_ID;

export async function getAccountDetails(): Promise<AxiosResponse<AccountDetailsI>> {
    const url = `${baseUrl}account/${accountId}`;

    try {
        const response = await httpRequest<AccountDetailsI>('GET', url);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}

export async function getAccountFavourites(): Promise<AxiosResponse<AccountDetailsI>> {
    const url = `${baseUrl}account/${accountId}?language=en-US&page=1&sort_by=created_at.asc`;

    const queryParams = {
        language: 'en-US',
        page: 1,
        sort_by: 'created_at.asc'
    };

    try {
        const response = await httpRequest<AccountDetailsI>('GET', url, queryParams);
        return response;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
}