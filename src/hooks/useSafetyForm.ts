import { useState } from "react";
import type { SafetyEvent } from "../types/safetyEvent.ts";
import * as React from "react";
import type { SelectChangeEvent } from "@mui/material";
import { validateSafetyFormStep, type ValidationErrors } from "../utils/validation";
import { useSafetyEvents } from "../context/safetyContext/useSafetyEvents.ts";

const INITIAL_STATE: SafetyEvent = {
    id: 0,
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

export const useSafetyForm = (initialData?: SafetyEvent) => {
    const [formData, setFormData] = useState<SafetyEvent>(initialData || INITIAL_STATE);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const { addEvent, updateEvent } = useSafetyEvents();


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
    ) => {
        const { name } = e.target;
        const inputElement = e.target as HTMLInputElement;
        if (inputElement.type === 'file' && inputElement.files && inputElement.files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                [name]: inputElement.files![0]
            }));
        } else {
            const value = e.target.value;
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        if (errors[name as keyof SafetyEvent]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const setFieldValue = (name: keyof SafetyEvent, value: unknown) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const eventToSave: SafetyEvent = {
            ...formData,
            createdAt: formData.createdAt || Date.now()
        }

        try {
            if (formData.id && formData.id > 0) {
                await updateEvent(formData.id, eventToSave);
                alert('האירוע עודכן בהצלחה!');
            } else {
                const savedEvent = await addEvent(eventToSave)
                alert(`האירוע נשמר בהצלחה! מספר אירוע: ${savedEvent.id}`);
                setFormData(INITIAL_STATE);
            }
        } catch (error) {
            console.error("Failed to submit form:", error);
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        validateStep,
        setFieldValue,
    };
};