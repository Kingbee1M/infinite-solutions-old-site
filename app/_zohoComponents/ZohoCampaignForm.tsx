"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import bg from "@/public/assets/frame-bg.jpg"

const ZohoCampaignForm: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Zoho iframe script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://campaigns.zoho.com/js/zc.iframe.js";
    document.body.appendChild(script);

    return () => {
      // Clean up the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative lg:pt-5 w-full h-auto hide-scrollbar">
      <Image src={bg} fill alt="bg" className="object-center -z-10" />
      <iframe
        id="iframewin"
        width="100%"
        height="100%"
        src="https://eojx-cmpzourl.maillist-manage.com/ua/Optin?od=11287eccd7bb10&zx=1341197f7&tD=113526031608747a9&sD=11352603160876b07"
        className="w-full h-full hide-scrollbar"
        allowFullScreen

      ></iframe>
    </div>
  );
};

export default ZohoCampaignForm;
