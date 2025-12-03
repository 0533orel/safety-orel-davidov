import React from 'react';
import {Box, Typography, Card, CardContent, CardActionArea, Container, Grid} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {useNavigate} from 'react-router-dom';


const HomePage: React.FC = () => {
    const navigate = useNavigate()

    return (

        <Container maxWidth='md' sx={{mt: 4, mb:4}}>
            <Box sx={{textAlign: 'center', mb: 6}}>
                <Typography variant='h3' fontWeight='bold' color={'primary'} gutterBottom>
                    ברוכים הבאים למערכת מב"ט
                </Typography>
            </Box>

            <Grid container spacing={2} justifyContent={'center'}>
                <Grid item xs={12} md={5}>
                    <Card
                        sx={{
                            height: '100%',
                            transition: '0.3s',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: 6
                            }
                        }}
                    >
                        <CardActionArea
                            sx={{
                                height: '100%',
                                p: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                            onClick={() => navigate('/new-event')}
                        >
                            <AddCircleOutlineIcon sx={{fontSize: 80, color: '#1976d2', mb: 2}}/>
                            <CardContent sx={{textAlign: 'center'}}>
                                <Typography variant={'h5'} component={'div'} fontWeight={'bold'}>
                                    דיווח אירוע חדש
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Card
                        sx={{
                            height: '100%',
                            transition: '0.3s',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: 6
                            }
                        }}
                    >
                        <CardActionArea
                            sx={{
                                height: '100%',
                                p: 7,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                            onClick={() => navigate('/events')}
                        >
                            <ListAltIcon sx={{fontSize: 80, color: '#1976d2', mb: 2}}/>
                            <CardContent sx={{textAlign: 'center'}}>
                                <Typography variant={'h5'} component={'div'} fontWeight={'bold'}>
                                    יומן אירועים
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>


            </Grid>


        </Container>
    )
}
export default HomePage;