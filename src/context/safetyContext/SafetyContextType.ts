import { type SafetyEvent } from '../../types/safetyEvent';

export interface SafetyContextType {
    events: SafetyEvent[];
    addEvent: (e: SafetyEvent) => void;
    clearEvents: () => void;
}
