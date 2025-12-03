import { type SafetyEvent } from "../types/safetyEvent";
import { checkIfHasCasualties, checkEventVenue } from "./formHelpers";


export type ValidationErrors = Partial<Record<keyof SafetyEvent, string>>;

export const validateSafetyFormStep = (step: number, formData: SafetyEvent): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    const checkRequired = (field: keyof SafetyEvent, message = "שדה חובה") => {
        if (!formData[field] || formData[field].toString().trim() === "") {
            newErrors[field] = message;
        }
    };

    switch (step) {
        case 0:
            checkRequired("unitName", "נא להזין שם יחידה");
            checkRequired("eventDate", "נא לבחור תאריך");
            checkRequired("eventTime", "נא לבחור שעה");
            checkRequired("location", "נא לבחור מיקום");

            if (formData.eventDate && formData.eventTime) {
                const selectedDateTime = new Date(`${formData.eventDate}T${formData.eventTime}`);
                const now = new Date();

                if (selectedDateTime > now) {
                    newErrors.eventTime = "לא ניתן לדווח על שעה עתידית";
                }
            }
            if (checkEventVenue(formData.location)) {
                if (!formData.coordinates || formData.coordinates.trim() === "") {
                    newErrors.coordinates = 'נא להזין נקודות ציון';
                }
                else {
                    const coordinatesRegex = /^\d{6}\/\d{6}$/;

                    if (!coordinatesRegex.test(formData.coordinates)) {
                        newErrors.coordinates = 'פורמט שגוי. חובה להזין 6 ספרות/6 ספרות (לדוגמה: 123456/810000)';
                    }
                }
            }
            break;

        case 1:
            checkRequired("unitActivity");
            checkRequired("personalActivity");
            checkRequired("category");
            checkRequired("weather");
            break;

        case 2:
            checkRequired("description", "נא לפרט את תיאור האירוע");
            checkRequired("eventSeverity");
            checkRequired("result");

            if (checkIfHasCasualties(formData.result)) {
                checkRequired("injurySeverity", "נא לציין את חומרת הפגיעה");
            }
            break;
    }

    return newErrors;
};