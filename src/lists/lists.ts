import dotenv from "dotenv";
import { AxiosResponse } from "axios";
import { httpRequest } from "../httpMethod/httpRequest";
import * as ResponseType from "./listDetails";

dotenv.config();

const sessionId = process.env.SESSION_ID;
const listId = process.env.LIST_ID;

export async function clearItemsFromMovieList(): Promise<AxiosResponse> {
  const url = `list/${listId}/clear`;
  const queryParam: any = {
    session_id: sessionId,
    confirm: true,
  };

  try {
    const response = await httpRequest<ResponseType.Status>("POST", url, queryParam);
    return response
  } catch (error) {
    console.error("Error fetching account details:", error);
    throw error;
  }
}

export async function getListDetails(): Promise<AxiosResponse> {
  const url = `list/${listId}`;
  const queryParam: any = {
    // session_id: sessionId,
    language: "en-US",
    page: 1,
  };

  try {
    const response = await httpRequest<ResponseType.MovieListDetails>(
      "GET",
      url,
      queryParam
    );
    return response;
  } catch (error) {
    console.error("Error fetching account details:", error);
    throw error;
  }
}