import { Inter } from "next/font/google";
import { Suspense } from "react";
import Toastify from "./components/ui/toastify/Toastify"; 
import Loading from "./loading";
import "./globals.css";
import ChildrenWrapper from "./childrenWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'roomify.org',
  description: 'An Interior Design app',
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
            <Toastify>
              <ChildrenWrapper>
                {children}
              </ChildrenWrapper>
            </Toastify>
          </Suspense>
      </body>
    </html>)
}