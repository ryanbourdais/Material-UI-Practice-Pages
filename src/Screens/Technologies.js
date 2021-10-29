import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const Technologies = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h2" align="center" className={classes.SubTitle}>
                Welcome to my technologies! <hr className={classes.Bar2}/>
            </Typography>
            <main>
                <div align="center">
                    <Typography variant='h5'>
                        A list of technologies that I have a working knowledge of:
                    </Typography>
                    <Typography>
                        JavaScript
                    </Typography>
                    <Typography>
                        React
                    </Typography>
                    <Typography>
                        React Native
                    </Typography>
                    <Typography>
                        Material UI
                    </Typography>
                    <Typography>
                        Python
                    </Typography>
                    <Typography>
                        HTML5
                    </Typography>
                    <Typography>
                        CSS
                    </Typography>
                    <Typography>
                        Java
                    </Typography>
                    <Typography>
                        C#
                    </Typography>
                    <Typography>
                        ASP.Net Razor
                    </Typography>
                    <Typography>
                        Moodle
                    </Typography>
                    <Typography>
                        SalesForce
                    </Typography>
                </div>
            </main>

        </>
    );
}

export default Technologies