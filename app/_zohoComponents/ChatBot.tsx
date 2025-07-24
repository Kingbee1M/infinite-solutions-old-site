"use client"

import React, { useEffect } from 'react';
// import { RiCustomerService2Line } from 'react-icons/ri';

export default function ChatBot() {
  useEffect(() => {
    // Add the Zoho SalesIQ initialization script
    const inlineScript = document.createElement('script');
    inlineScript.type = 'text/javascript';
    inlineScript.innerHTML = `
      window.$zoho=window.$zoho || {};
      $zoho.salesiq=$zoho.salesiq || { ready: function() {} };
    `;
    document.body.appendChild(inlineScript);

    // Add the Zoho SalesIQ widget script
    const script = document.createElement('script');
    script.id = 'zsiqscript';
    script.src = 'https://salesiq.zohopublic.com/widget?wc=siq00d706c339a42366f00d310a95ddeeb607aef53807d6f9d81118ce46361848b3';
    script.defer = true;
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(inlineScript);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div></div>
    // <div className="absolute bottom-0 right-0 lg:right-8 p-2 bg-green-200 border border-red-200 rounded-full hover:cursor-pointer">
    //   <RiCustomerService2Line className="h-6 w-6 font-bold text-primary"/>
    //   <p className='absolute -top-1 right-0 py-[3px] px-1 bg-red-500 text-white text-[5px] rounded-full'>1</p>
    // </div>
  );
}
