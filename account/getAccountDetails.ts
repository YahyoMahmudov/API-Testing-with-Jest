import axios, { AxiosResponse } from 'axios';
import { AccountDetailsI } from './accountDetailsI'
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = process.env.BASE_URL;
const authToken = process.env.AUTH_TOKEN;
const accountId = process.env.ACCOUNT_ID;

export async function httpRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string
): Promise<AxiosResponse<T>> {
    const options = {
        method,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
    };

    try {
        const response = await axios(url, options);
        return response;
    } catch (error) {
        console.error(`Error making ${method} request to ${url}:`, error);
        throw error;
    }
}

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