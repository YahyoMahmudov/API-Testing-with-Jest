import axios, { AxiosResponse } from 'axios';
import { AccountDetailsI } from './accountDetailsI'
import * as config from '../config.json';

const baseUrl = config.api.baseUrl;
const authToken = config.api.authToken;
const accountId = config.api.accountId;

export async function getAccountDetails(): Promise<AxiosResponse<AccountDetailsI>> {
    const url = `${baseUrl}account/${accountId}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    };

    try {
        const response: AxiosResponse<AccountDetailsI> = await axios.get(url, options);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}