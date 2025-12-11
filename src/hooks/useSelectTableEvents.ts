import { useState, useMemo } from 'react';
import type { SafetyEvent } from '../types/safetyEvent';
import type {UseSelectableEventsResult} from "../components/eventsTable/EventsTableTypes.ts";


export const useSelectTableEvents = (
    events: SafetyEvent[],
    onDelete: (id: number) => void
): UseSelectableEventsResult => {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const allIds = useMemo(() => events.map((e) => e.id), [events]);

    const allSelected = selectedIds.length === events.length;
    const someSelected = selectedIds.length > 0 && !allSelected;

    const toggleSelectRow = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        setSelectedIds(allSelected ? [] : allIds);
    };

    const deleteSelected = () => {
        if (selectedIds.length === 0) return;

        const confirmDelete = window.confirm(
            selectedIds.length === events.length
                ? 'למחוק את כל האירועים?'
                : selectedIds.length === 1
                    ? `למחוק אירוע מספר ${selectedIds[0]}?`
                    : `למחוק ${selectedIds.length} אירועים שנבחרו?`
        );
        if (!confirmDelete) return;

        selectedIds.forEach((id) => onDelete(id));
        setSelectedIds([]);
    };

    return {
        selectedIds,
        allSelected,
        someSelected,
        toggleSelectRow,
        toggleSelectAll,
        deleteSelected,
    };
};
