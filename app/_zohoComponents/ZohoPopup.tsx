"use client";

import Script from 'next/script';

const ZohoPopup = () => {
  const initializeZohoPopup = () => {
    if (typeof loadZCPopup === 'function') {
      loadZCPopup(
        '3z4aa37e2c836b13e4f313ca0bc222dbd0d460fbd96387f758b701231bec5626ca',
        'ZCFORMVIEW',
        '3z06dc33e22e0b98ae45670c145581a085'
      );
    } else {
      console.error('loadZCPopup is not defined yet.');
    }
  };

  return (
    <>
      {/* Load the external Zoho script and call the function on load */}
      <Script
        id="ZC_Forms_Popup"
        src="https://campaigns.zoho.com/js/optin.min.js"
        strategy="lazyOnload"
        onLoad={initializeZohoPopup} // Initialize the popup once the script is loaded
      />
    </>
  );
};

export default ZohoPopup;
