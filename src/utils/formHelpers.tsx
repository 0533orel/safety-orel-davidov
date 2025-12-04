import { CIVILIAN_AREA, HAS_CASUALTIES } from "../data/formOptions";

export const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

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