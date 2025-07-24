import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import React from 'react';
import Footer from "./_components/Footer";
import NavBar from "./_components/NavBar";
import "./_styles/globals.css";
// import ZohoPopup from "./_zohoComponents/ZohoPopup";
import ChatBot from "./_zohoComponents/ChatBot";
import ToastProvider from "./_ui/ToastProvider";


const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], });

export const metadata: Metadata = {
 title: {
  template: "%s | Infinite Solutions",
  default: "Welcome | Infinite Solutions",
 },
  description: "Infinite Solutions is a Top IT Company, Helping businesses thrive with tailored IT solutions. From streamlining operations to improving efficiency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        {/* ZC Popup Code Starts */}
        
        {/* ZC Popup Code Ends */}
      </head>
      <body className={`${spaceGrotesk.className} flex flex-col w-full min-h-screen overflow-x-hidden`}>
        <div className="flex-auto"><NavBar/></div>
        <div className="flex-1">
        {children}
        <Footer/>
        </div>
        <ToastProvider/>
        <ChatBot/>
      </body>
    </html>
  );
}
