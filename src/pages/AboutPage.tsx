import React from 'react';
import {Typography, Paper, Divider} from '@mui/material';

const AboutPage: React.FC = () => {
    return (
        <Paper sx={{p: 4, mt: 2}}>
            <Typography variant="h4" gutterBottom>
                אודות מערכת מב"ט
            </Typography>
            <Typography variant="body1">
                מערכת מב"ט (מערכת בטיחות) הינה פלטפורמה לניהול, תיעוד ותחקור אירועי בטיחות בזרוע היבשה.
            </Typography>

            <Divider sx={{my: 2}}/>

            <Typography variant="h6" gutterBottom>
                איך משתמשים במערכת?
            </Typography>
            <ul>
                <li>
                    <Typography variant="body2">
                        <strong>דיווח אירוע:</strong> לחץ על כפתור "דיווח חדש" בדף הבית ומלא את הטופס בשלושה שלבים.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body2">
                        <strong>חיפוש:</strong> ניתן לחפש אירועים בטבלה לפי יחידה, מיקום או מילות מפתח.
                    </Typography>
                </li>
            </ul>
        </Paper>
    );
};

export default AboutPage;