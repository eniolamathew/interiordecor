import { IMicroserviceApiError, IMicroserviceApiResult } from "../shared/api/microserviceApi";

export interface ISignUpPayload {
    email: string
    password: string
}

export interface ILoginPayload extends ISignUpPayload {}

export interface IProfilePayload {
    email: string
    fullname: string
    useraddress: string
    postcode: string
}

export interface ILoginResult {
    accesstoken: string,
    isUserConfirmed: boolean
}

export interface ISignUpResult {
    message: string
}

export interface IGetUserByIdResult {
    id: number,
    email: string,
    subscribed: boolean,
    createdat: string
}

export type IGetUsersResult = IGetUserByIdResult[]

export interface IGetUserProfileByEmailResult {
    Id: number,
    Fullname: string,
    Email: string,
    Useraddress: string,
    Postcode: string,
}

export interface IResetPassword {
    email: string,
    password: string,
    token: string,
}

export interface IChangePassword {
    email: string,
    oldpassword: string,
    newpassword: string,
}