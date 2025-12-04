import type {SafetyEvent} from "../../types/safetyEvent.ts";

export interface EventsListMobileTypes {
    events: SafetyEvent[];
    onViewDetails: (event: SafetyEvent) => void;
    onDelete: (id: string) => void;
}
