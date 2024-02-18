import dotenv from "dotenv";
import { AxiosResponse } from "axios";
import { httpRequest } from "../httpMethod/httpRequest";
import * as ResponseType from "./listDetails";
import { MovieListDetails ,Status} from "./listDetails";

dotenv.config();

const sessionId = process.env.SESSION_ID;

export async function getMovieListDetails(listId:number, page:number=1): Promise<{data:MovieListDetails, status:number}> {
    const url = `list/${listId}`;
    const queryParam: any = {
      language: "en-US",
      page,
    };
  
    try {
      const response = await httpRequest<MovieListDetails>(
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




export async function clearItemsFromMovieList(listId:number): Promise<{data:Status, status:number }> {
  const url = `list/${listId}/clear`;
  const queryParam: any = {
    session_id: sessionId,
    confirm: true,
  };

  try {
    const response = await httpRequest<Status>("POST", url, queryParam);
    return response
  } catch (error) {
    throw error;
  }
}

