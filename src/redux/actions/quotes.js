import createRestApiClient from "../../utility/createRestApiClient";

import {
  QUOTES_LOADING,
  QUOTES_SUCCESS,
  QUOTES_FAILED
  //USER_LIST_CLEAR
} from "../constants/Quotes";

const mockApiEndpoint = process.env.REACT_APP_API_BASE_URL;
//const tempAccessToken = localStorage.getItem("auth_token");
const mockApiClient = createRestApiClient().withConfig({
    baseURL: mockApiEndpoint
}).client;

export function fetchQuotes() {
    const header = { "Content-type": `application/json` };
    const endpoint = "/quotes";
    return {
        types: [QUOTES_LOADING, QUOTES_SUCCESS, QUOTES_FAILED],
      promise: () =>
        mockApiClient.get(endpoint, {
          headers: header
        })
    };
}