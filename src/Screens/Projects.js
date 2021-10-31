import React from 'react';
import { Button, CssBaseline, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import useStyles from './styles'

const Projects = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <main className={classes.page}>
                <div className={classes.container}>
                    <Typography variant="h1">
                        Welcome to my Projects page!
                    </Typography>
                </div>
                <div align="center">
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4} justify="center">
                            <Grid item xs={12} sm={6} md={5}>
                                <Card className={classes.progProj}>
                                    <CardMedia className={classes.cardMedia} image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" title="image title" />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            nGen
                                        </Typography>
                                        <Typography>
                                            A social media platform built to connect students with professionals in careers that they are considering pursuing.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="https://github.com/Fireleaf123/3380-Class-project">Repository</Button>
                                    </CardActions>
                                </Card>
                                <Card className={classes.progProj}>
                                    <CardMedia className={classes.cardMedia} image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" title="image title" />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Pong Clone
                                        </Typography>
                                        <Typography>
                                            A clone of the popular game "pong" built in python using turtles.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="https://github.com/ryanbourdais/pong-clone">Repository</Button>
                                    </CardActions>
                                </Card>
                                <Card className={classes.progProj}>
                                    <CardMedia className={classes.cardMedia} image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" title="image title" />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Folder Cleaner
                                        </Typography>
                                        <Typography>
                                            A python script designed for cleaning temp, downloads, and recycle bin folders
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="https://github.com/ryanbourdais/FolderCleaner">Repository</Button>
                                    </CardActions>
                                </Card>
                                <Card className={classes.progProj}>
                                    <CardMedia className={classes.cardMedia} image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" title="image title" />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Number Guesser
                                        </Typography>
                                        <Typography>
                                            A short game written in python for learning to use random within a python app.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="https://github.com/ryanbourdais/NumberGuesser">Repository</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Ryan Bourdais
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Designed using React and Material UI in 2021    
                </Typography>

            </footer>
        </>
    );
}

export default Projects