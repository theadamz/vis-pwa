import { LocalStorageKey } from "@/types/enum";
import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    RawAxiosRequestHeaders,
} from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    LocalStorageKey.ACCESS_TOKEN
);
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.responseType = "json";

// interceptors
axios.interceptors.request.use(
    (request) => {
        const accessToken = localStorage.getItem(LocalStorageKey.ACCESS_TOKEN);
        if (accessToken) {
            request.headers["Authorization"] = accessToken;
        }

        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

type axiosCustomProps = {
    url: string;
    method?: "get" | "post" | "put" | "delete";
    contentType?:
        | "application/x-www-form-urlencoded"
        | "application/json"
        | "multipart/form-data"
        | null;
    responseType?: "json";
    timeout?: number;
    data?: any;
};

export async function axiosCustom({
    url,
    method = "get",
    contentType = "application/json",
    responseType = "json",
    timeout = 30000,
    data = null,
}: axiosCustomProps): Promise<AxiosResponse<any, any>> {
    const headers: RawAxiosRequestHeaders = {};

    if (!contentType) {
        headers["Content-Type"] = contentType; // application/x-www-form-urlencoded
    }

    return axios.request({
        url: url,
        method: method,
        headers: headers,
        responseType: responseType,
        timeout: timeout,
        validateStatus() {
            return true;
        },
        data: data,
    } as AxiosRequestConfig);
}
