import { eventClock } from "../contract/eventClock";
import { CIVILIAN_AREA, HAS_CASUALTIES } from "../data/formOptions";
import type {SafetyEvent} from "../types/safetyEvent.ts";

export const getCurrentDate = () => eventClock().slice(0, 10);
export const getCurrentTime = () => eventClock().slice(11);

export const checkIfHasCasualties = (resultValue: string): boolean => {
    return resultValue.includes(HAS_CASUALTIES);
};

export const checkEventVenue = (resultValue: string): boolean => {
    return resultValue.includes(CIVILIAN_AREA);
};

export const truncate = (text: string | undefined, max: number = 25) => {
    if (!text) return '';
    return text.length > max ? text.slice(0, max) + '...' : text;
};

export const createFormData = (event: SafetyEvent & { deleteImage?: boolean }): FormData => {
    const formData = new FormData();

    (Object.keys(event) as (keyof SafetyEvent)[]).forEach(key => {
        const value = event[key];
        if (key === 'image' && value instanceof File) {
            formData.append('image', value);
        }
        else if (value !== undefined && value !== null && key !== 'image' && key !== 'deleteImage' && key !== 'id' && key !== 'createdAt' && key !== 'imagePath') {
            formData.append(key, value.toString());
        }
    });

    if (event.deleteImage) {
        formData.append('deleteImage', 'true');
    }

    return formData
}