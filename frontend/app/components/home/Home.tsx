"use client"
import React, { ChangeEvent, useState } from 'react';
import {
    HomeWrapper,
    HomeContainer,
    ContentWrapper,
    MaxWidth,
    HomeContent,
    EmailWrapper,
    ButtonWrapper,
    SignUpContainer,
    Email,
    GetStarted,
    Text1,
    Text2,
    Text3,
    Text4,
} from './HomeStyles';
import ButtonContainer from '../ui/buttons/HomeUiButton';
import InputContainer from '../ui/emailInput/InputContainer';
import { useRouter } from 'next/navigation'
import HomeNavbar from '../navbar/HomeNavbar';

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<string>("");

  const validateEmail =()=> {
    const emailRegex  = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/
    if(email.length === 0){
      setInvalidEmail("Please Enter a Valid Email Address")
    }
    else if (!emailRegex.test(email)) {
      setInvalidEmail("Please Enter a Valid Email Address")
    }
    else{
      router.push(`/signup?email=${email}`);
    }
  }

  return (
    <>
    <HomeNavbar/>

    <HomeWrapper>
      <HomeContainer $background={"https://roomify.org/backgroundImage.jpg"}>
        <ContentWrapper>
          <MaxWidth>
            <HomeContent>
              <Text1>Transform your interior design in seconds with AI.</Text1>
              <Text2>Create your dream space effortlessly, using <span>AI</span></Text2>
              <Text3>Starts at £4.99. Cancel at any time.</Text3>
              <Text4>Ready to create? Enter your email to signup or restart your membership.</Text4>
              <SignUpContainer >
                <EmailWrapper >
                    <Email >
                      <div style={{ display: "flex", alignItems: 'center', justifyContent:'center', width:'30rem'}}>
                        <InputContainer
                            label={"Email Address"}
                            value={email}
                            obscureText={false}
                            autoComplete={false}
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>{ 
                              setEmail(e.target.value)
                              setInvalidEmail("")
                            }}
                            disabled={false}
                            error={invalidEmail}
                        />
                      </div>
                    </Email>
                  </EmailWrapper>
                  <ButtonWrapper>
                    <GetStarted >
                      <ButtonContainer 
                          text={"Get Started"}
                          icon={true}
                          onClick={(e)=>{ e.preventDefault()
                            validateEmail()
                          }}  
                        />
                    </GetStarted>
                </ButtonWrapper>
              </SignUpContainer >
            </HomeContent>
          </MaxWidth>
        </ContentWrapper>
      </HomeContainer>
    </HomeWrapper>
  </>);
}
