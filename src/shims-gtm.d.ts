import { GTMDataLayerObject } from './useGtm';

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $gtmEvent: (name: string, params: GTMDataLayerObject) => void;
    }
}