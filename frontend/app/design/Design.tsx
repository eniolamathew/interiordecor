"use client"
import React, { ChangeEvent, useState } from 'react'
import "./design.css"
import TextareaContainer from '../components/ui/textarea/TextareaContainer'
import ButtonWrapper from '../components/ui/buttons/ButtonWrapper';
import designApiData from '@/shared/data/designApiData';
import { IGenratedImageResult, IGenrateImagePayload } from '@/models/design';
import { Designcontianer, Designdisplay, Designwrapper, Designinfo, Infobody, Infofooter }from "./DesignStyles"
import { saveAs } from 'file-saver';
import Roomtype  from './Roomtype';
import Loading from '../loading';
import Roomstyle from './Roomstyle';
import Roomcolor from './Roomcolor';
import UserAuthManager from '@/shared/data/UserAuthManager';
import Image from 'next/image';

const Design = () => {
  const email = UserAuthManager.getEmail()!;
  const [isGenerating, setIsGenerating] = useState(false);
  const [isdisabled, setIsdisabled] = useState<boolean>(false)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const [generatedImage, setGeneratedImage] = useState<IGenratedImageResult | null >(null)
  const [jobId, setJobId] = useState<string>("")
  const [hasErrors, setHasErrors] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    description: "",
    roomtype: "",
    style: "",
    color: "",
  });

  const [formErrors, setFormErrors] = useState({
    description: "",
    roomtype: "",
    style: "",
    color: "",
  });

  const clearErrors = () => {
    setFormErrors({
      description: "",
      roomtype: "",
      style: "",
      color: "",
    });
    setIsGenerating(false)
    setGeneratedImage(null)
    setImageLoaded(false)
  };

  interface FormData {
    description: string;
    roomtype: string;
    style: string;
    color: string;
  }
  
  interface FormErrors {
    description?: string;
    roomtype?: string;
    style?: string;
    color?: string;
  }

  const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
    clearErrors();
  };

  const onRoomChange = (roomtype: string) => {
    setFormData({ ...formData, roomtype });
    clearErrors();
  };

  const handleUpload = ()=>{

  }

  const validateFields = () => {
    const errors: FormErrors = {};
    const fields: Array<{ field: keyof FormData, message: string }> = [
        { field: "description", message: "Description cannot be null" },
        { field: "roomtype", message: "Select a room type" },
        { field: "style", message: "Style Preference cannot be null" },
        { field: "color", message: "Colour Preference cannot be null" },
    ];
    fields.forEach(({ field, message }) => {
      if (formData[field].trim().length === 0) {
        errors[field] = message;
      }
    });
  
    setFormErrors({ ...formErrors, ...errors });
  
    if (Object.keys(errors).length === 0) {
        setIsdisabled(true)
        setHasErrors(false)
        setIsGenerating(true)
        generateImage(formData, email)
    }
    else{
        setHasErrors(true)
    }
  };

  async function generateImage(formData: FormData, email:string) {
    try {
      const payload: IGenrateImagePayload = {...formData, email}
      const result = await designApiData.generateImage(payload);
      if (result?.success) {
        const jobId: string = result.payload!.jobId;
        setJobId(jobId);
  
        if (jobId) {
          const generatedImageResult = await pollForGeneratedImage(jobId);
          setGeneratedImage(generatedImageResult);
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
  
  // Polling function to repeatedly check the image generation status
  async function pollForGeneratedImage(jobId: string, interval: number = 4000, timeout: number = 24000): Promise<IGenratedImageResult> {
    const startTime = Date.now();
  
    return new Promise<IGenratedImageResult>((resolve, reject) => {
      const checkStatus = async () => {
        try {
          const result = await designApiData.getGeneratedImageById(jobId);
          if (result?.success && result.payload?.Imagestatus.toLowerCase() === "complete") {
            resolve(result.payload);
          } else if (Date.now() - startTime >= timeout) {
            reject(new Error('Polling timed out.'));
          } else {
            setTimeout(checkStatus, interval);
          }
        } catch (error) {
          reject(error);
        }
      };
  
      checkStatus();
    });
  }

 const handleDownload = () => {
    const fileName = `img-${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}-${String(new Date().getHours()).padStart(2, '0')}-${String(new Date().getMinutes()).padStart(2, '0')}-${String(new Date().getSeconds()).padStart(2, '0')}.png`;
    saveAs(generatedImage!.Imageurl, fileName); 
 };

  return (<>
   <div className='design'>
    <Designcontianer >
        <Designwrapper >
            <Designinfo className='designinfo shaded_border'>
                <div className='infoheader'> 
                    <div className='title'>Design Customizer</div>
                </div>
                <Infobody className='infobody'>
                    <Roomstyle                         
                        value={formData.style}
                        error={formErrors.style}
                        isdisabled={isdisabled}
                        onChange={ handleChange("style") }
                    />
                    <Roomcolor                       
                        color={formData.color}
                        error={formErrors.color}
                        isdisabled={isdisabled}
                        onChange={ handleChange("color") }
                    />
                
                    <div className="mt-1 mb-1">
                       <Roomtype
                            error={formErrors.roomtype}
                            disable={isdisabled}
                            handleRoomChange={onRoomChange}
                        />
                    </div>
                    <div className="mb-1">
                    <TextareaContainer
                        label={"Description"}
                        value={formData.description}
                        rows={8}
                        error={formErrors.description}
                        disabled={ isdisabled }
                        onChange={ handleChange("description") }
                    />
                    </div>
                </Infobody>
                <Infofooter className='infofooter'>
                    <ButtonWrapper 
                        width={"100%"}
                        height={"100%"}
                        margin={"0rem 0rem"}
                        text={"Generate Design"}
                        onClick={(e) => { e.preventDefault()
                            validateFields()
                            setGeneratedImage(null)
                            setImageLoaded(false)
                        }}
                    />
                </Infofooter>
            </Designinfo>
            {/* </div> */}

            <Designdisplay className='designdisplay'>
            { imageLoaded &&
                <div className='downloadIcon flex flex-center' onClick={handleDownload}>
                    <Image
                        src="https://roomify.org/download-solid.svg"
                        alt="Upload Icon"
                        className="upload-icon"
                        width={25}
                        height={25}
                        style={{ maxWidth:"25px", 
                            maxHeight:"25px", 
                            objectFit:"cover", 
                            marginRight: "6px",
                            filter: "brightness(0) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(62%) contrast(100%)",
                        }}
                        loading="lazy"   
                    /><span style={{width: "5rem"}}>Download</span>
                </div>
                }
                {isGenerating && !hasErrors && (
                    <div className='center-content'>
                    {generatedImage === null ? (<Loading />) : 
                        (<div className='image-container'>
                            <img
                                src={generatedImage.Imageurl} 
                                alt="Generated Image"
                                className={`${!imageLoaded ? 'imgisloading' : ''}`}
                                loading='lazy'
                                onLoad={()=>{ setImageLoaded(true) 
                                    setIsdisabled(false)
                                }}
                            />
                            {!imageLoaded && (
                                <div className='img-loading-overlay'>
                                    <Loading />
                                </div>
                            )}
                        </div>
                    )}
                    </div>
                )}
                </Designdisplay>
        </Designwrapper>
    </Designcontianer>
  </div>
  </>
  )
}

export default Design;