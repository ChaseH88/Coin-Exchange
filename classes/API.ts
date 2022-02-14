import axios, { AxiosInstance } from 'axios';

export enum Endpoint {
  GET_COINS = "/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
}

export interface APIResponse {
  success: boolean;
  data?: any;
  error?: string;
  token?: string;
  hasAccount?: boolean;
}

export interface AxiosResponse {
  config: {
    method: string;
    timeout: number;
    baseURL: string;
    url: string;
  };
  request: XMLHttpRequest;
  response: {
    data: APIResponse;
    headers: object;
    status: number;
    statusText: string;
  };
  isAxiosError: boolean;
  toJSON: () => void;
  data: APIResponse;
}

interface APIImplementation {
  get(endpoint: Endpoint): Promise<any>;
}

class API implements APIImplementation {
  protected baseURL = "https://4zvwsvs8.api.sanity.io/v1";

  protected api: AxiosInstance = axios.create({
    baseURL: this.baseURL,
    timeout: 1000 * 60 // one minute
  });

  constructor(baseURL?: string) {
    if (baseURL) {
      this.baseURL = baseURL;
    }
  }

  /**
   * This is the app's main get method.
   * @method GET
   * @param endpoint - The API endpoint
   * @returns An object containing success and the data
   */
  public async get(endpoint: Endpoint | string): Promise<any> {
    try {
      return this.handleSuccess(
        (await this.api.get(endpoint)) as AxiosResponse
      );
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Handle the API Success
   * @param response - The Axios response
   */
  private handleSuccess(res: AxiosResponse): APIResponse {
    return res?.data;
  }

  /**
   * Handle the error
   * @param error - the error that was caught
   */
  private handleError(error_: any): APIResponse {
    const error: AxiosResponse = { ...error_ };
    return error?.response?.data;
  }
}

export default API;
