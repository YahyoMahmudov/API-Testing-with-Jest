import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const authToken = process.env.AUTH_TOKEN;

export async function httpRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string, 
    queryParams?: Record<string, string | number>
): Promise<AxiosResponse<T>> {
    let fullUrl = url;

    if (queryParams) {
        const queryString = Object.entries(queryParams)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&');
        fullUrl += `?${queryString}`;
    }
    
    const options = {
        method,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
    };

    try {
        const response = await axios(fullUrl, options);
        return response;
    } catch (error) {
        console.error(`Error making ${method} request to ${fullUrl}:`, error);
        throw error;
    }
}