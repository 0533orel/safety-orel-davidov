import {CIVILIAN_AREA, HAS_CASUALTIES} from "../data/formOptions.ts";

export const formatDateTimeLocal = () => {
    const date = new Date();

    const pad = (n: number) => n.toString().padStart(2, "0");

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const checkIfHasCasualties = (resultValue: string): boolean => {
    return resultValue.includes(HAS_CASUALTIES);
};

export const checkEventVenue = (resultValue: string): boolean => {
    return resultValue.includes(CIVILIAN_AREA);
};



