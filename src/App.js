import React from 'react';
import {Route} from 'react-router-dom';
import {CssBaseline, AppBar, Typography, Toolbar, Button, ButtonGroup} from '@material-ui/core';
import { Code } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import Home from './Screens/Home';
import About from './Screens/About';
import Projects from './Screens/Projects';
import Contact from './Screens/Contact';
import Example from './Screens/Example';
import Technologies from './Screens/Technologies';
import useStyles from './Screens/styles';

function App() {
  const classes = useStyles();
  return <div className="App">
    <CssBaseline />
            <AppBar position="relative" color="secondary">
                <Toolbar >
                    <Code className={classes.icons} />
                    <Typography variant="h6" style={{ marginLeft: '10px' }}>
                        Ryan Bourdais
                    </Typography>
                </Toolbar>
            </AppBar>
            <div id="Button-Group" align="center" className={classes.buttons}>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button><Link to="/" className={classes.links}>Home</Link></Button>
                        <Button><Link to="/example" className={classes.links}>Example</Link></Button>
                        <Button><Link to="/projects" className={classes.links}>Projects</Link></Button>
                        <Button><Link to="/contact" className={classes.links}>Contact</Link></Button>
                        <Button><Link to="/about" className={classes.links}>About</Link></Button>
                        <Button><Link to="/Technologies" className={classes.links}>Technologies</Link></Button>
                    </ButtonGroup>
                    <hr className={classes.Bar1}/>
                </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/example" component={Example} />
      <Route exact path="/technologies" component={Technologies} />
      
    </div>
}

export default App;