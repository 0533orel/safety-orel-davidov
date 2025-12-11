import React, {type ReactNode, useEffect, useState} from "react";
import type {SafetyEvent} from "../../types/safetyEvent.ts";
import {SafetyContext} from "./SafetyContext.ts";
import {createFormData} from "../../utils/formHelpers.tsx";

const API_URL = "http://localhost:3000/api/events"

export const SafetyProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [events, setEvents] = useState<SafetyEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(API_URL)
                if (!response.ok) {
                    throw new Error("Failed to fetch events")
                }
                const data = await response.json()

                setEvents(data)
            } catch (err) {
                console.error('Error loading events:', err)
                setError("לא הצלחנו לטעון את האירועים מהשרת.");
            } finally {
                setLoading(false)
            }
        };

        fetchEvents()
    }, []);

    const addEvent = async (newEvent: SafetyEvent): Promise<SafetyEvent> => {
        try {
            const isMultipart = !!newEvent.image;
            const body = isMultipart ? createFormData(newEvent) : JSON.stringify(newEvent)
            const headers: HeadersInit = isMultipart ? {} : {'Content-Type': 'application/json'}
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: headers,
                body: body
            })

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save event');
            }

            const savedEvent = await response.json()
            setEvents((prevEvents) => [savedEvent, ...prevEvents])

            return savedEvent
        } catch (err) {
            console.error("Error saving event:", err);
            alert("שגיאה בשמירת האירוע בשרת");
            throw err;
        }
    }

    const updateEvent = async (id: number, updatedEvent: SafetyEvent): Promise<SafetyEvent> => {
        try {
            const isMultipart = !!updatedEvent.image;

            const body = isMultipart ? createFormData(updatedEvent) : JSON.stringify(updatedEvent);
            const headers: HeadersInit = isMultipart ? {} : { 'Content-Type': 'application/json' };

            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: headers,
                body: body
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update event');
            }

            const savedEvent = await response.json();

            const normalizedEvent = { ...savedEvent, id: Number(savedEvent.id) };

            setEvents((prevEvents) => prevEvents.map(event => event.id === id ? normalizedEvent : event));
            return normalizedEvent;
        } catch (err) {
            console.error("Error updating event:", err);
            alert("שגיאה בעדכון האירוע בשרת");
            throw err;
        }
    }

    const deleteEvent = async (id: number) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete event')
            }

            setEvents((prevEvents) => prevEvents.filter(event => event.id !== id))
        } catch (err) {
            console.error('Error deleting event:', err)
            alert("לא הצלחנו למחוק את האירוע מהשרת.");
        }
    };


    return (
        <SafetyContext.Provider value={{events, addEvent, updateEvent, deleteEvent, loading, error}}>
            {children}
        </SafetyContext.Provider>
    )
}
