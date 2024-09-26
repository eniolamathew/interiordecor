export interface IGenrateImagePayload {
    email: string
    description: string
    roomtype: string
    style: string
    color: string
}
export interface IGenrateImageResult {
    jobId: string
}

export interface IGenratedImageResult {
    ID: number
    Imageurl: string
    Jobid: string
    Imagestatus: string
    Useremail: string
}