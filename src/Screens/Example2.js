import React from 'react';
import { Typography, Button, ButtonGroup } from '@material-ui/core';

import useStyles from './styles'

const Example2 = () => {
 const classes = useStyles();
    return (
        <>
        <body style={{overflow:'hidden'}}>
            <main>
                <div style={{backgroundImage:'url("https://cdn.wallpapersafari.com/9/19/wkeJtK.jpg")'}}>
                    <Typography variant='h1' style={{color:'#04D9D9', position: 'relative', top:'100px', left:'50px'}}>
                        Take a chill pill
                    </Typography>
                    <hr  style={{width:'580px', position:'relative', top:'100px', right:'400px'}} />  
                    <Typography style={{position:'relative', color:'#04D9D9', top:'100px', left:'80px'}}>
                        and let Ryan design your website for you
                    </Typography>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" style={{position:'relative', top:'280px', left:'1150px'}}>
                        <Button href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={{margin:'10px',  height:'50px' }}>Click Me!</Button>
                        <Button href='https://www.youtube.com/watch?v=WqSTXuJeTks' style={{margin:'10px',  height:'50px'}}>No, Click Me!</Button>
                    </ButtonGroup>
                   <div style={{height:'900px'}} />
                    
                </div>
            </main>
        </body>
        
        </>
    )
}

export default Example2;