import { useContext } from 'react';
import { SafetyContext } from './SafetyContext';

export const useSafetyEvents = () => {
    const ctx = useContext(SafetyContext);
    if (!ctx) throw new Error("useSafetyEvents must be used inside SafetyProvider");
    return ctx;
};
