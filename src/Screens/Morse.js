import React from 'react';
import { Component } from 'react';
import { Typography, Input } from '@material-ui/core';      

import morseCode from './MorseCode';

class Morse extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            output: ""
        }
    }
MorseConvert(input){
    let output = ""
    let morseArray = input.split("")
    for (let i = 0; i < morseArray.length; i++){
        if(morseArray[i].toUpperCase() === " "){
            output += "\xa0/\xa0"
        }
        else {
            output += morseCode[morseArray[i].toUpperCase()]     
        }
    }
    this.setState({output, input})
}

render() {

    return (
        <>
        <div className="container" style={{backgroundColor:"#d3d3d3"}}>
            <div className="row">
                <div className="col-sm-12">
                    <Typography variant="h1" style={{marginLeft:'50px'}}>Morse Code Translator</Typography>
                    <div>
                    <Input style={{marginLeft:'50px', width:'80%'}} onChange={(e)=>this.MorseConvert(e.target.value)} />
                    <hr />
                    </div>
                    <div style={{backgroundColor:'gray'}}>
                    <Typography variant="h3" style={{marginLeft:'50px'}}>original: {this.state.input}</Typography>
                    <Typography variant="h3" style={{marginLeft:'50px'}}>morse: {this.state.output}</Typography>
                    </div>
                </div>
            </div>
        </div>
        <footer>
        <Typography variant='h6' align='center' gutterBottom>
          List of invalid Characters:
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          ! @ # $ % ^ * ( ) _ - + = \ . , / ' " ; : ?
        </Typography>

      </footer>
      </>
    )
}
}

export default Morse;