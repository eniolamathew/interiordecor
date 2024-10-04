import { IMicroserviceApiResult } from "./api.i"
import config  from "../../windowConfig";

export interface INextJsApiError{
    property: string | undefined
    errors: string[]
}

export interface INextJsApiExption {
    errors: INextJsApiError[]
    payload: any
}

class NextJsApi {
    resolvePort(root:string, path:string) {
        if (root.endsWith("/")) {
            throw "Url must not end with /";
        }
        return root + path;
    }

    async processAsync<T>(method: string, targetApiUrl: string, body: object | undefined | string, headers: any, extractPayload: boolean = true): Promise<IMicroserviceApiResult<T>> {
        let url = this.resolvePort('',targetApiUrl);

        // Remove the body for GET requests
        const fetchOptions: RequestInit = {
            method: method,
            mode: 'cors',
            credentials: 'same-origin', 
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        };

        // Only include the body for methods that allow it (POST, PUT, DELETE)
        if (method !== "GET" && body) {
            fetchOptions.body = JSON.stringify(body);
        }

        var result = await fetch(url, fetchOptions);

        let json = await result.json();
        if (result.status == 400) {
            console.log("NextJsApi targetApiUrl : "+JSON.stringify(json))
            throw json
        }
        if (result.status == 200) {
            let payload = json as T
            if(extractPayload){
                return (payload as any).payload
            }
            return (payload as any)
        }
        if (result.status == 401) {
            throw { errors: json.errors, payload: json.payload } as INextJsApiExption
        }

        if (result.status > 401 && result.status< 499) {
            let payload = json as T
            return (payload as any)
        }
    
        if (result.status > 499 && result.status< 600) {
            let payload = json as T
            return (payload as any)
        }

        throw `Api Post failed ${result.status} ${targetApiUrl} ${await result.text()}`
    }

    async postAsync<T>(targetApiUrl: string, body: any = undefined, headers: any = undefined, extractPayload: boolean = false): Promise<IMicroserviceApiResult<T>> {        
        return await this.processAsync<T>("POST", targetApiUrl, body, headers, extractPayload);
    }

    async deleteAsync<T>(targetApiUrl: string, body: any = undefined, headers: any = undefined, extractPayload: boolean = false): Promise<IMicroserviceApiResult<T>> {
        return await this.processAsync<T>("DELETE", targetApiUrl, body, headers, extractPayload);
    }

    async putAsync<T>(targetApiUrl: string, body: any= undefined, headers: any = undefined, extractPayload: boolean = false): Promise<IMicroserviceApiResult<T>> {
        return await this.processAsync<T>("PUT", targetApiUrl, body, headers, extractPayload);
    }

    async getAsync<T>(targetApiUrl: string, headers: any = undefined, extractPayload: boolean = false): Promise<IMicroserviceApiResult<T>>{
        return (await this.processAsync<T>("GET", targetApiUrl, undefined, headers, extractPayload));
    }
}

export default new NextJsApi()