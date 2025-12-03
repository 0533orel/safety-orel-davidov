import {useState} from "react";
import type {SafetyEvent} from "../types/safetyEvent.ts";
import * as React from "react";
import type { SelectChangeEvent } from "@mui/material";
import { validateSafetyFormStep, type ValidationErrors } from "../utils/validation";
import {useSafetyEvents} from "../context/safetyContext/useSafetyEvents.ts";


const INITIAL_STATE: SafetyEvent = {
    id: "",
    createdAt: 0,
    unitName: "",
    description: "",
    eventDate: "",
    eventTime: "",
    location: "",
    result: "",
    injurySeverity: "",
    unitActivity: "",
    personalActivity: "",
    category: "",
    weather: "",
    eventSeverity: "",
    recommendations: "",
    coordinates: "",
};

export const useSafetyForm = () => {
    const [formData, setFormData] = useState<SafetyEvent>(INITIAL_STATE);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const {addEvent} = useSafetyEvents();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof SafetyEvent]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors = validateSafetyFormStep(step, formData);
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const eventToSave: SafetyEvent = {
            ...formData,
            id: Date.now().toString(),
            createdAt: Date.now()
        }

        addEvent(eventToSave)

        console.log("Form Submitted:", eventToSave);
        alert(`האירוע נשמר בהצלחה! מספר אירוע: ${eventToSave.id}`);

        setFormData(INITIAL_STATE);
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        validateStep
    };
};