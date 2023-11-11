
interface GTMDataLayerObject {
    event: string;
    [key: string]: unknown;
}

declare global {
    interface Window {
        dataLayer: GTMDataLayerObject[];
    }
}

window.dataLayer = window.dataLayer || [];

export function useGtm() {
    const gtmEvent = (eventName: string, eventParams: GTMDataLayerObject) => {
        console.log('gtmEvent', eventName, eventParams);
    };

    return { gtmEvent };
}
