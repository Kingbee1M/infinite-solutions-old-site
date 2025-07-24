
declare function setupSF(
  formId: string,
  viewType: string,
  isMobile?: boolean,
  theme?: string,
  isPopup?: boolean,
  zIndex?: string
): void;

declare function loadZCPopup(
  formId: string,
  viewType: string,
  uniqueId: string
): void;

declare global {
  interface Window {
    loadZCPopup: (formId: string, viewType: string, campaignId: string) => void;
    setupSF: (
      formId: string,
      viewType: string,
      isPopup?: boolean,
      theme?: string,
      position?: boolean,
      delay?: string
    ) => void;
  }
}


export {};