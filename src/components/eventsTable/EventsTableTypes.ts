import type {SafetyEvent} from "../../types/safetyEvent.ts";


export interface EventsTableTypes {
    events: SafetyEvent[];
    onViewDetails: (event: SafetyEvent) => void;
    onDelete: (id: number) => void;
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
    selectedIds: number[];
    allSelected: boolean;
    someSelected: boolean;
    toggleSelectRow: (id: number) => void;
    toggleSelectAll: () => void;
    deleteSelected: () => void;
}
