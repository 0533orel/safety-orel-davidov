import React, {useState} from 'react';
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Typography,
    IconButton,
    Tooltip,
    Checkbox,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {truncate} from '../../utils/formHelpers';
import type {EventsListMobileTypes} from './EventsListMobileTypes';

const EventsListDesktop: React.FC<EventsListMobileTypes> = ({events, onViewDetails, onDelete}) => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    if (events.length === 0) {
        return (
            <Typography align="center" color="text.secondary" sx={{mt: 2}}>
                לא נמצאו אירועים תואמים.
            </Typography>
        );
    }

    const allIds = events.map((e) => e.id);
    const allSelected = selectedIds.length === events.length;
    const someSelected = selectedIds.length > 0 && !allSelected;

    const handleToggleRow = (id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const handleToggleAll = () => {
        if (allSelected) {
            setSelectedIds([]);
        } else {
            setSelectedIds(allIds);
        }
    };

    const handleDeleteSelected = () => {
        if (selectedIds.length === 0) return;

        const confirmDelete = window.confirm(
            `האם אתה בטוח שברצונך למחוק ${selectedIds.length} אירועים שנבחרו?`
        );
        if (!confirmDelete) return;

        selectedIds.forEach((id) => onDelete(id));
        setSelectedIds([]);
    };

    const handleDeleteAll = () => {
        const confirmDelete = window.confirm(
            `האם אתה בטוח שברצונך למחוק את כל ${events.length} האירועים מהטבלה?`
        );
        if (!confirmDelete) return;

        events.forEach((event) => onDelete(event.id));
        setSelectedIds([]);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 1,
                    mb: 1.5,
                }}
            >
                <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    disabled={selectedIds.length === 0}
                    onClick={handleDeleteSelected}
                >
                    מחק נבחרים
                </Button>

                <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={handleDeleteAll}
                >
                    מחק כל האירועים
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3} sx={{borderRadius: 2}}>
                <Table
                    sx={{
                        minWidth: 900,
                        '& th': {fontWeight: 'bold', bgcolor: 'primary.main', color: 'white'},
                        '& th, & td': {
                            textAlign: 'center',
                            border: '1px solid',
                            borderColor: 'divider',
                            px: 1,
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={allSelected}
                                    indeterminate={someSelected}
                                    onChange={handleToggleAll}
                                    sx={{
                                        color: (theme) => theme.palette.primary.contrastText,
                                        '&.Mui-checked': {
                                            color: (theme) => theme.palette.primary.contrastText,
                                        },
                                        '&.MuiCheckbox-indeterminate': {
                                            color: (theme) => theme.palette.primary.contrastText,
                                        },
                                    }}
                                />
                            </TableCell>
                            <TableCell>מספר אירוע</TableCell>
                            <TableCell>תאריך</TableCell>
                            <TableCell>יחידה</TableCell>
                            <TableCell>מיקום</TableCell>
                            <TableCell>קטגוריה</TableCell>
                            <TableCell>חומרה</TableCell>
                            <TableCell>תוצאות</TableCell>
                            <TableCell width="20%">תיאור קצר</TableCell>
                            <TableCell>פרטים</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {events.map((event) => {
                            const isSelected = selectedIds.includes(event.id);

                            return (
                                <TableRow key={event.id} hover>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isSelected}
                                            onChange={() => handleToggleRow(event.id)}
                                        />
                                        <Tooltip title="מחק אירוע">
                                            <IconButton
                                                sx={{color: 'orangered'}}
                                                onClick={() => onDelete(event.id)}
                                            >
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>

                                    <TableCell>{event.id}</TableCell>

                                    <TableCell>
                                        {event.eventDate} {event.eventTime}
                                    </TableCell>

                                    <TableCell>{event.unitName}</TableCell>
                                    <TableCell>{event.location}</TableCell>
                                    <TableCell>{event.category}</TableCell>
                                    <TableCell>{event.eventSeverity}</TableCell>
                                    <TableCell>{event.result}</TableCell>

                                    <TableCell title={event.description}>
                                        {truncate(event.description)}
                                    </TableCell>

                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() => onViewDetails(event)}
                                        >
                                            פרטים
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default EventsListDesktop;
