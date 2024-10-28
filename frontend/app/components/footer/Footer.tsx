import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterLinksContainer,
  FooterLink,
  SocialMediaContainer,
  SocialIconLink,
  FooterLeftSection,
  FooterRightSection,
  FooterBottom,
} from './FooterStyles';
import Image from 'next/image';
import { useAuth } from "../../../shared/context/AuthContext";

const Footer = () => {
  let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV;
    const { isLightMode } = useAuth();
    const socialMediaIcons = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      src: `${url}/facebook-brands-solid.svg`,
      alt: "Facebook Icon",
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      src: `${url}/x-twitter-brands-solid.svg`,
      alt: "Twitter Icon",
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      src: `${url}/instagram-brands-solid.svg`,
      alt: "Instagram Icon",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      src: `${url}/linkedin-brands-solid.svg`,
      alt: "LinkedIn Icon",
    },
    {
      label: "TikTok",
      href: "https://tiktok.com",
      src: `${url}/tiktok-brands-solid.svg`,
      alt: "TikTok Icon",
    },
  ];
  
  return (
    <FooterContainer $isLightMode={isLightMode}>
      <FooterWrapper>
        <FooterLeftSection style={{ width: "35vw"}}>
            <FooterLogo $isLightMode={isLightMode} ></FooterLogo>
            <SocialMediaContainer>
            {socialMediaIcons.map(({ label, href, src, alt }) => (
              <SocialIconLink
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer" 
                aria-label={label}
              >
                <Image
                    src={src}
                    alt={alt}
                    width={25}
                    height={25}
                    style={{
                        maxWidth: "25px",
                        maxHeight: "25px",
                        marginRight: "6px",
                        textAlign: "center",
                        filter: "brightness(0) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(62%) contrast(100%)"
                    }}
                    loading="lazy"
                />
              </SocialIconLink>
            ))}
            </SocialMediaContainer>

        </FooterLeftSection>
        <FooterRightSection>
            <FooterLinksContainer>
            <FooterLink href="#">Company</FooterLink>
            <FooterLink href="#">Solutions</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            </FooterLinksContainer>
        </FooterRightSection>
      </FooterWrapper>
      <FooterBottom>
        &copy; 2023 - {new Date().getFullYear()} Roomify, Inc. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;