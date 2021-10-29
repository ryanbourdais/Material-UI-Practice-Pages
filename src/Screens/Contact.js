import React from 'react';
import { CssBaseline, Typography} from '@material-ui/core';
import { LocalPhone, Email, Home, LinkedIn, GitHub} from '@material-ui/icons';

import useStyles from './styles'

const Contact = () => {
    const classes = useStyles();
    return (
        <>
         <CssBaseline />
            <main className={classes.page}>
                <div className={classes.container}>
                    <Typography variant="h1">
                        Welcome to my Contact page!
                    </Typography>
                    <Typography variant="h6">
                    <LocalPhone className={classes.contactIcons}/>
                    (504) 913-9177
                    </Typography>
                    <Typography variant="h6">
                    <Email className={classes.contactIcons}/>   
                    ryanbourdais@outlook.com
                    </Typography>
                    <Typography variant="h6">
                        <Home className={classes.contactIcons} />
                        2403 Brightside Drive, Unit 4, 70820, Baton Rouge, LA
                    </Typography>
                    <Typography variant="h6">
                        <LinkedIn className={classes.contactIcons} />
                        www.linkedin.com/in/ryan-bourdais-20a4b4221/
                    </Typography>
                    <Typography variant="h6">
                        <GitHub className={classes.contactIcons} />
                        github.com/ryanbourdais
                    </Typography>
                </div>
            </main>
        </>
    );
}

export default Contact