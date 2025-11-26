import {useState} from "react";
import type {SafetyEvent} from "../types/safetyEvent.ts";
import * as React from "react";
import type { SelectChangeEvent } from "@mui/material";
import { useSafetyEvents } from "../context/SafetyContext";

const INITIAL_STATE: SafetyEvent = {
    id: "",
    createdAt: 0,
    unitName: "",
    description: "",
    eventDate: "",
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

    const {addEvent} = useSafetyEvents();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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
        handleChange,
        handleSubmit
    };
};