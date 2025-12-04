import React, {type ReactNode, useEffect, useState} from "react";
import type {SafetyEvent} from "../../types/safetyEvent.ts";
import {SafetyContext} from "./SafetyContext.ts";

const STORAGE_KEY = 'safety-events-db'

export const SafetyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [events, setEvents] = useState<SafetyEvent[]>(() => {
        const savedEvens = localStorage.getItem(STORAGE_KEY);
        if(savedEvens){
            try {
                return JSON.parse(savedEvens)
            } catch (error) {
                console.error("Failed to parse events from local storage", error);
                return []
            }
        }
        return []
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
    }, [events]);

    const addEvent = (newEvent: SafetyEvent) => {
        setEvents((prevEvents) => [newEvent, ...prevEvents])
    }

    const deleteEvent = (id: string) => {
        setEvents((prevEvents) => prevEvents.filter(event => event.id !== id));
    };

    const clearEvents = () => {
        setEvents([])
        localStorage.removeItem(STORAGE_KEY)
    }

    return(
        <SafetyContext.Provider value={{events, addEvent, clearEvents, deleteEvent}}>
            {children}
        </SafetyContext.Provider>
    )
}
