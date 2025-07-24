"use server";

import { ContactData } from "../_types/type";


export async function sendContactRequest(data:ContactData) {
  const url = 'https://igs-backend.onrender.com/api/contact';

  const subData = data.isSubscribe == "true" ? true : false
  
  const contactData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    subscribe: subData,
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });

    if (!response.ok) {
      throw new Error(`Request Failed. Status code: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Request sent successfully!', responseData);
  } catch (error) {
    if(error instanceof Error) {
      throw new Error(error.message)
    }else {
      throw new Error('An unknown error occurred.');
    }
  }
  return { success: true, message: "Form submitted successfully!" };
}


