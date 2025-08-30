import cache from 'memory-cache'
import { apiBaseUrl } from '../../config/index'

export interface IMicroserviceApiError {
    property: string | undefined
    errors: string[]
}

export interface IMicroserviceApiResult<T> {
    pageCount: number
    totalItems: number
    success: boolean | undefined
    statusCode: number
    errors: IMicroserviceApiError[] | undefined
    payload: T | undefined
}

interface PricePoint {
    pricePoint: number
    productCount: number;
}


export interface IPaging {
    pageNo: number
    pageSize: number
}

export interface IFilter {
    column: string
    comparator: string
    value?: string | null
    startValue?: string
    endValue?: string
}

export interface IDataActions {
    paging: IPaging
    sortBy: string
    sortAscending: boolean
    filters: IFilter[]
    attributes: string
    brands: string
    categories: string
    freeGift: boolean
}

class MicroserviceApi {
    _baseUrl: string;

    constructor(baseUrl: string) {
        this._baseUrl = baseUrl
    }

    private serialize(params: any) {
        let result: any = [];
        if (Object.keys(params).length > 0) {
            let count = 0;
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    const keyValue = params[key];
                    if (keyValue !== null) {
                        switch (keyValue.constructor.name) {
                            case 'Object':
                                (Object).entries(keyValue).map(([k, v]) => {
                                    if (typeof v === "object") {
                                        for (var prop in v) {
                                            result.push(`${key}[${count}].${prop}=${(v as any)[prop]}`);
                                        }
                                        count++;
                                    } else {
                                        result.push(`${key}.${encodeURIComponent(k)}=${encodeURIComponent(v as any)}`);
                                    }
                                    return v;
                                }); break;
                            case 'Array':
                                (Object).entries(keyValue).map(([k, v]) => {
                                    if (typeof v === "object") {
                                        for (var prop in v) {
                                            result.push(`${key}[${count}].${prop}=${(v as any)[prop]}`);
                                        }
                                        count++;
                                    } else {
                                        result.push(`${key}.${encodeURIComponent(k)}=${encodeURIComponent(v as any)}`);
                                    }
                                    return v;
                                });
                                break;
                            default:
                                result.push(`${encodeURIComponent(key)}=${encodeURIComponent(keyValue)}`);
                        }
                    }
                }
            }
            return result.join('&');
        } else {
            return result;
        }
    }

    private async _processAsync<T>(method: string, targetApiUrl: string, body: object | undefined | string, headers: any): Promise<IMicroserviceApiResult<T>> {
        var b: string | null = null;
        if (typeof body === 'string') {
            b = body;
        }
        if (typeof body === 'object') {
            b = JSON.stringify(body);
        }

        if (!headers) {
            headers = {
            }
        }
        try {
            var result = await fetch(this._baseUrl + targetApiUrl, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Correlation-Id': cache.get('X-Correlation-Id'),
                    'apiKey': process.env.FRONTEND_APIKEY,
                    ...headers
                },
                body: b
            })
            if (result.status == 200 || result.status == 400) {
                let payload = await result.json() as IMicroserviceApiResult<T>
                if (result.status == 400) {
                    console.log(targetApiUrl)
                    throw result
                  
                }
                payload.statusCode = result.status
                return payload
            }
            if (result.status == 401 || result.status == 403) {
                var payload = {} as IMicroserviceApiResult<T>
                payload.statusCode = result.status
                payload.success = false
                payload.errors = [];
                payload.errors[0] = {} as IMicroserviceApiError;
                payload.errors[0].property = "General"
                payload.errors[0].errors = []
                payload.errors[0].errors[0] = "Unauthorised"
                return payload
            }
            throw `Api ${method} failed ${result.status} ${this._baseUrl + targetApiUrl} ${await result.text()}`
        } catch (e) {
            throw e
        }
    }

    async postAsync<T>(targetApiUrl: string, body?: object | string, headers?: any): Promise<IMicroserviceApiResult<T>> {
        return await this._processAsync<T>("POST", targetApiUrl, body, headers);
    }

    async deleteAsync<T>(targetApiUrl: string, body?: object | string, headers?: any): Promise<IMicroserviceApiResult<T>> {
        return await this._processAsync<T>("DELETE", targetApiUrl, body, headers);
    }

    async putAsync<T>(targetApiUrl: string, body?: object | string, headers?: any): Promise<IMicroserviceApiResult<T>> {
        return await this._processAsync<T>("PUT", targetApiUrl, body, headers);
    }

    async getAsync<T>(targetApiUrl: string, body?: any, headers?: any, dataActions?: IDataActions): Promise<IMicroserviceApiResult<T>> {
        var ser = (dataActions ? "?" + this.serialize(dataActions) : "")
        return (await this._processAsync<T>("GET", targetApiUrl + ser, body, headers));
    }



}

export default new MicroserviceApi(apiBaseUrl)