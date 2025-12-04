import React from 'react';
import {
    Stack,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    IconButton,
    Tooltip,
    Checkbox,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { truncate } from '../../utils/formHelpers';
import type { EventsTableTypes } from './EventsTableTypes.ts';
import { useSelectableEvents } from '../../hooks/useSelectableEvents';

const EventsListMobile: React.FC<EventsTableTypes> = ({ events, onViewDetails, onDelete }) => {
    const {
        selectedIds,
        allSelected,
        someSelected,
        toggleSelectRow,
        toggleSelectAll,
        deleteSelected,
    } = useSelectableEvents(events, onDelete);

    if (events.length === 0) {
        return (
            <Typography align="center" color="text.secondary" sx={{ mt: 2 }}>
                לא נמצאו אירועים תואמים.
            </Typography>
        );
    }

    return (
        <>
            <Box display="flex" justifyContent="flex-end" gap={1} mb={1}>
                <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    disabled={selectedIds.length === 0}
                    onClick={deleteSelected}
                >
                    מחק אירועים נבחרים
                </Button>

                <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onChange={toggleSelectAll}
                    sx={{ alignSelf: 'center' }}
                />
            </Box>

            <Stack spacing={2}>
                {events.map((event) => {
                    const checked = selectedIds.includes(event.id);

                    return (
                        <Card
                            key={event.id}
                            sx={{ borderRadius: 2, boxShadow: 3, position: 'relative' }}
                        >
                            <Checkbox
                                checked={checked}
                                onChange={() => toggleSelectRow(event.id)}
                                sx={{ position: 'absolute', top: 4, left: 4 }}
                            />

                            <Tooltip title="מחק אירוע">
                                <IconButton
                                    sx={{
                                        position: 'absolute',
                                        top: 40,
                                        left: 4,
                                        color: 'darkred',
                                    }}
                                    onClick={() => onDelete(event.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>

                            <CardContent>
                                <Typography variant="subtitle2" color="text.secondary">
                                    אירוע #{event.id}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>מועד:</strong> {event.eventDate} {event.eventTime}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>יחידה:</strong> {event.unitName}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>מיקום:</strong> {event.location}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>חומרה:</strong> {event.eventSeverity}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    <strong>תיאור:</strong> {truncate(event.description)}
                                </Typography>
                            </CardContent>

                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={() => onViewDetails(event)}
                                >
                                    פרטים
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </Stack>
        </>
    );
};

export default EventsListMobile;
