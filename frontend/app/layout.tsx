import { Inter } from "next/font/google";
import { Suspense } from "react";
import Toastify from "./components/ui/toastify/Toastify"; 
import Loading from "./loadingComp";
import "./globals.css";
import ChildrenWrapper from "./childrenWrapper";
import SVGSprite from "@/shared/svg/SVGSprite";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Roomify - AI-Powered Interior Design',
  description: 'Roomify is an innovative AI-powered platform that helps you design and visualize your dream spaces with ease. Explore personalized designs for bedrooms, living rooms, kitchens, and more, tailored to your preferences.',
  keywords: [
    'Roomify',
    'Interior Design',
    'AI Interior Design',
    'Home Decor',
    'Room Planner',
    'Custom Room Designs',
    'Living Room Design',
    'Bedroom Design',
    'Kitchen Design',
    'Bathroom Design',
    'Office Design',
    'Interior Design Ideas',
  ],
  author: 'Roomify Team',
  robots: 'index, follow',
  openGraph: {
    title: 'Roomify - AI-Powered Interior Design',
    description: 'Design your dream spaces with Roomify, an AI-powered interior design platform offering tailored solutions for all your home decor needs.',
    url: 'https://roomify.org',
    type: 'website',
    images: [
      {
        url: 'https://pub-803b1a4a98804df48cd54488ec5dd376.r2.dev/roomify.png',
        width: 1200,
        height: 630,
        alt: 'Roomify - AI-Powered Interior Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roomify - AI-Powered Interior Design',
    description: 'Discover personalized interior design ideas for your dream spaces with Roomify.',
    site: '@roomify',
    creator: '@roomify',
    image: 'https://pub-803b1a4a98804df48cd54488ec5dd376.r2.dev/roomify-lightmode.png',
  },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://pub-803b1a4a98804df48cd54488ec5dd376.r2.dev" />
        <link rel="preconnect" href="https://pub-803b1a4a98804df48cd54488ec5dd376.r2.dev" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
          <Suspense fallback={<Loading />}>
            <SVGSprite />
            <Toastify>
              <ChildrenWrapper>
                {children}
              </ChildrenWrapper>
            </Toastify>
          </Suspense>
      </body>
    </html>)
}