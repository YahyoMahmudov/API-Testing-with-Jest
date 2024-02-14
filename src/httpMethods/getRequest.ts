import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const authToken = process.env.AUTH_TOKEN;

export async function getRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string, 
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