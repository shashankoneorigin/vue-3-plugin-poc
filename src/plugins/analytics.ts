// src/useGtm.ts

interface GTMDataLayerObject {
    event: string;
    [key: string]: unknown;
}

declare global {
    interface Window {
        dataLayer: GTMDataLayerObject[];
    }
}

// Set up a global dataLayer array
window.dataLayer = window.dataLayer || [];

export function useGtm() {
    // Push events to the dataLayer
    const gtmEvent = (eventName: string, eventParams: GTMDataLayerObject) => {
        console.log('gtmEvent', eventName, eventParams);
    };

    return { gtmEvent };
}
