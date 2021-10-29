import React from 'react';
import { CssBaseline, Typography} from '@material-ui/core';
import useStyles from './styles'

const About = () => {
    const classes = useStyles();
    return (
        <>
         <CssBaseline />
            <main className={classes.page}>
                <div className={classes.container}>
                    <Typography variant="h1">
                        Welcome to my About page!
                    </Typography>
                </div>
            </main>
        </>
    );
}

export default About