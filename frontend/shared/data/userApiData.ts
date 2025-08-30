import { ILoginResult, IGetUserByIdResult, ISignUpPayload, ISignUpResult, IGetUsersResult, IResetPassword, IProfilePayload, IChangePassword, IGetUserProfileByEmailResult } from "../../models/user";
import  { IMicroserviceApiResult } from "../api/api.i"
import nextjsApi from "../api/nextjsApi"
import { useAuth } from "../context/AuthContext";
import UserAuthManager from "./UserAuthManager";

class UserData {
    
    apiUrl = process.env.NEXT_PUBLIC_USER_API_BASE_URL;
    publicapiUrl = process.env.NEXT_PUBLIC_USER_PUBLIC_API_BASE_URL;

    _baseUrl = `${this.apiUrl}`;
    _baseUnprotectedUrl = `${this.publicapiUrl}`;


    // _baseUnprotectedUrl = ":7071/user";
    // _baseUrl = ":7071/user/api";

    public async loginAsync(email: string, password: string): Promise<IMicroserviceApiResult<ILoginResult>> {
        let result = await nextjsApi.postAsync<ILoginResult>(this._baseUnprotectedUrl + "/login", { email: email, password: password })
        return result
    }

    public async registerUserAsync(registration: ISignUpPayload): Promise<IMicroserviceApiResult<ISignUpResult>> {
        let result =  await nextjsApi.postAsync<ISignUpResult>(this._baseUnprotectedUrl + "/signup", registration)
        return result
    }

    public async requestPasswordReset(email: string): Promise<IMicroserviceApiResult<string>> {
        let result =  await nextjsApi.postAsync<string>(this._baseUnprotectedUrl + "/requestpasswordreset", {email})
        return result
    }

    public async resetPassword(resetPayload: IResetPassword): Promise<IMicroserviceApiResult<string>> {
        let result =  await nextjsApi.postAsync<string>(this._baseUnprotectedUrl + "/resetpassword", resetPayload)
        return result
    }

    public async getUserById(id:number): Promise<IMicroserviceApiResult<IGetUserByIdResult>> {
        const accessToken =  UserAuthManager.getToken();
        let result = await nextjsApi.getAsync<IGetUserByIdResult>(this._baseUrl + "/user" + id, { Authorization: `Bearer ${accessToken}` } )
        return result
    }

    public async getUsers(): Promise<IMicroserviceApiResult<IGetUsersResult>> {
        const accessToken =  UserAuthManager.getToken();
        let result = await nextjsApi.getAsync<IGetUsersResult>(this._baseUrl + "/users", { Authorization: `Bearer ${accessToken}` } )
        return result
    }

    public async cretaeUserProfile(profileData: IProfilePayload): Promise<IMicroserviceApiResult<IGetUserByIdResult>> {
        const accessToken =  UserAuthManager.getToken();
        let result = await nextjsApi.postAsync<IGetUserByIdResult>(this._baseUrl + "/userprofile", profileData , { Authorization: `Bearer ${accessToken}` } )
        return result
    }

    public async updateUserProfile(profileData: IProfilePayload): Promise<IMicroserviceApiResult<IGetUserByIdResult>> {
        const accessToken =  UserAuthManager.getToken();
        let result = await nextjsApi.putAsync<IGetUserByIdResult>(this._baseUrl + "/updateuserprofile", profileData , { Authorization: `Bearer ${accessToken}` } )
        return result
    }

    public async changePassword(changePasswordPayload: IChangePassword): Promise<IMicroserviceApiResult<string>> {
        const accessToken =  UserAuthManager.getToken();
        let result =  await nextjsApi.postAsync<string>(this._baseUrl + "/changepassword", changePasswordPayload, { Authorization: `Bearer ${accessToken}` })
        return result
    }

    public async getUserProfileByEmail(email:string): Promise<IMicroserviceApiResult<IGetUserProfileByEmailResult>> {
        let emailString =  `email=${email}`;
        const accessToken =  UserAuthManager.getToken();
        let result = await nextjsApi.getAsync<IGetUserProfileByEmailResult>(this._baseUrl + "/userprofilebyemail?" + emailString, { Authorization: `Bearer ${accessToken}` } )
        return result
    }
}

export default new UserData();