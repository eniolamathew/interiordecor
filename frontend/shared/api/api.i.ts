export interface IMicroserviceApiResult<T> {
    success: boolean | undefined
    statusCode: number
    errors: any | undefined
    payload: T | undefined
}