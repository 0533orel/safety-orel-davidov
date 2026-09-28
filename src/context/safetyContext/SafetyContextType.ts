import { type SafetyEvent } from '../../types/safetyEvent';

export interface SafetyContextType {
    events: SafetyEvent[];
    loadMore: () => Promise<void>;
    hasMore: boolean;
    addEvent: (newEvent: SafetyEvent) => Promise<SafetyEvent>;
    updateEvent: (id: number, updateEvent: SafetyEvent) => Promise<SafetyEvent>;
    deleteEvent: (id: number) => void;
    loading: boolean
    error: string | null
}
