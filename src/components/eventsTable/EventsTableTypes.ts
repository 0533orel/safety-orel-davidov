import type {SafetyEvent} from "../../types/safetyEvent.ts";


export interface EventsTableTypes {
    events: SafetyEvent[];
    onViewDetails: (event: SafetyEvent) => void;
    onDelete: (id: string) => void;
}

export interface EventDetailsDialogTypes {
    open: boolean;
    onClose: () => void;
    event: SafetyEvent | null;
}

export interface EventSearchTypes {
    value: string;
    onChange: (value: string) => void;
}


export interface UseSelectableEventsResult {
    selectedIds: string[];
    allSelected: boolean;
    someSelected: boolean;
    toggleSelectRow: (id: string) => void;
    toggleSelectAll: () => void;
    deleteSelected: () => void;
}
