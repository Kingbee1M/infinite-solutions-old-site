"use client";
import { useEffect, useState } from "react";
import GettingStarted from "../_components/GettingStarted";
import Hiring from "../_components/Hiring";
import JobComponent from "../_components/JobComponent";
//import EmptyJob from "../_components/Emptyjob";
import Filter from "../_ui/Filter";
import PageHero from "../_ui/PageHero";
import bg from '@/public/assets/career-bg.png'
import ZohoCampaignForm from "../_zohoComponents/ZohoCampaignForm";

export default function Career() {
  type Job = {
    title: string;
    location: string;
    type: string;
    description: string;
  };
  
  // eslint-disable-next-line
  const [jobs, setJob] = useState<Job[]>([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "ZC_Forms_Popup";
    script.src = "https://campaigns.zoho.com/js/optin.min.js";
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof window.loadZCPopup === "function") {
        window.loadZCPopup(
          "3z4aa37e2c836b13e4f313ca0bc222dbd0d460fbd96387f758b701231bec5626ca",
          "ZCFORMVIEW",
          "3z06dc33e22e0b98ae45670c145581a085"
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <PageHero bg={bg}>Careers</PageHero>
      <Hiring/>
      <Filter/>
      {jobs.map((job, index) => <JobComponent job={job} key={index}/>)}
      <GettingStarted />
      <ZohoCampaignForm/>
    </>
  );
}
