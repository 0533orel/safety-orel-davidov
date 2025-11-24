import {useState} from "react";
import type {SafetyEvent} from "../types/safetyEvent.ts";
import * as React from "react";

const INITIAL_STATE: SafetyEvent = {
    unitName: "",
    description: "",
    eventDate: "",
    location: "בחר/י",
    result: "בחר/י",
    injurySeverity: "בחר/י",
    unitActivity: "בחר/י",
    personalActivity: "בחר/י",
    category: "בחר/י",
    weather: "בחר/י",
    eventSeverity: "בחר/י",
    recommendations: "",
};

export const useSafetyForm = () => {
    const [formData, setFormData] = useState<SafetyEvent>(INITIAL_STATE);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement |
            HTMLTextAreaElement
        >
    ) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("האירוע נשמר!");
    };

    return {
        formData,
        handleChange,
        handleSubmit
    };
};