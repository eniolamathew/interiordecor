import { IGenratedImageResult, IGenrateImagePayload, IGenrateImageResult, IUpdateStatusResult } from "../../models/design";
import  { IMicroserviceApiResult } from "../api/api.i"
import nextjsApi from "../api/nextjsApi"
import UserAuthManager from "./UserAuthManager";

class DesignData {
    apiUrl = process.env.NEXT_PUBLIC_DESIGN_API_BASE_URL;
    publicapiUrl = process.env.NEXT_PUBLIC_DESIGN_PUBLIC_API_BASE_URL;

    _baseUrl = `${this.apiUrl}`;
    _baseUnprotectedUrl = `${this.publicapiUrl}`;

    public async updatestatus(payload: IGenrateImagePayload): Promise<IMicroserviceApiResult<IUpdateStatusResult>> {
        let result =  await nextjsApi.postAsync<IUpdateStatusResult>(this._baseUnprotectedUrl + "/updatestatus", payload)
        return result
    }

    public async generateImage(payload: IGenrateImagePayload): Promise<IMicroserviceApiResult<IGenrateImageResult>> {
        const accessToken =  UserAuthManager.getToken();
        let result =  await nextjsApi.postAsync<IGenrateImageResult>(this._baseUrl + "/generate", payload, { Authorization: `Bearer ${accessToken}` })
        return result
    }

    public async getGeneratedImageById(jobId:string): Promise<IMicroserviceApiResult<IGenratedImageResult>> {
        const accessToken =  UserAuthManager.getToken();
        let result = await nextjsApi.getAsync<IGenratedImageResult>(`${this._baseUrl}/getgeneratedimage/${jobId}`, { Authorization: `Bearer ${accessToken}` } )
        return result
    }

    public async getGeneratedImagesByEmail(email:string): Promise<IMicroserviceApiResult<IGenratedImageResult[]>> {
        const accessToken =  UserAuthManager.getToken();
        let result = await nextjsApi.getAsync<IGenratedImageResult[]>(`${this._baseUrl}/getimagesbyemail/${email}`, { Authorization: `Bearer ${accessToken}` } )
        return result
    }
}

export default new DesignData();