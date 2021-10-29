import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Button } from '@material-ui/core';

import useStyles from './styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const Example = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <main className={classes.page}>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Material UI Practice Build
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Container>
        </div>
        <div className={classes.buttons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained">
                Primary action
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4} justify='center'>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="image title" />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Card Component
                    </Typography>
                    <Typography>
                      This is an example of a card using a random image from unsplash.com, the paddingTop of the card is set to 56.25% as that is relative to a 16:9 aspect ratio
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Omni Gaellia es dividas in tres partes
        </Typography>

      </footer>
    </>
  );
}

export default Example