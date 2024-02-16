import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const authToken = process.env.AUTH_TOKEN;
const baseUrl = process.env.BASE_URL;

export async function httpRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string, 
    queryParams?: Record<string, string | number | boolean>,
    body?: object 
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
        body: body ? JSON.stringify(body) : undefined,
    };

    try {
        const response = await axios((baseUrl+fullUrl), options);
        return response;
    } catch (error) {
        throw error;
    }
}