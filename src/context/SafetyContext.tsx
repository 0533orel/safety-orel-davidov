import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { type SafetyEvent } from '../types/safetyEvent';

interface SafetyContextType {
    events: SafetyEvent[];
    addEvent: (newEvent: SafetyEvent) => void;
}

const SafetyContext = createContext<SafetyContextType | undefined>(undefined);

export const SafetyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [events, setEvents] = useState<SafetyEvent[]>([]);

    const addEvent = (newEvent: SafetyEvent) => {
        setEvents((prevEvents) => [newEvent, ...prevEvents]);
    };

    return (
        <SafetyContext.Provider value={{ events, addEvent }}>
            {children}
        </SafetyContext.Provider>
    );
};

export const useSafetyEvents = () => {
    const context = useContext(SafetyContext);
    if (!context) {
        throw new Error("useSafetyEvents must be used within a SafetyProvider");
    }
    return context;
};