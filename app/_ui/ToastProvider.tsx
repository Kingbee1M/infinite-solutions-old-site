"use client";

import React from 'react'
import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <div>
      <Toaster
      position="top-center"
      containerStyle={{margin: "8px"}}
      toastOptions={{
        success: {
          duration: 3000
        },
        error: {
          duration: 5000
        },
        style: {
          padding: '5px',
          background: "#ffffff",
          color: "var(--color-grey-700)"
        }
      }
      }/>
    </div>
  )
}
