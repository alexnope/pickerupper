import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

class NewGame extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
          <Paper style={{width: '40rem', height: '50rem', margin: 'auto'}} elevation={3}>
              <table style={{marginLeft: '1rem'}}>
                  <tr>
                      <h3>Schedule a Game!</h3>
                  </tr>
                  <tr>
                      <TextField style={{width: '30rem'}} label="Game Name" variant="outlined" />
                  </tr>
                  <tr>
                      <Typography id="discrete-slider" gutterBottom>Number of Players</Typography>
                  </tr>
                  <tr>
                      <Slider defaultValue={4}  aria-labelledby="discrete-slider" valueLabelDisplay="auto" step={1} marks min={1} max={20}/>
                  </tr>
                  <tr>
                      <Typography id="discrete-slider" gutterBottom>Location</Typography>
                  </tr>
                  <tr>
                      <table>
                          <tr>
                              <TextField style={{width: '30rem'}} label="Street" variant="outlined" />
                          </tr>
                          <tr>
                              <TextField style={{width: '15rem'}} label="City" variant="outlined" />
                              <TextField style={{width: '5rem'}} label="State" variant="outlined" />
                              <TextField style={{width: '10rem'}} label="Zip Code" variant="outlined" />
                          </tr>
                      </table>
                  </tr>
                  <tr>
                      <TextField style={{width: '30rem', height: '5rem'}} label="Description" multilinerows={4} variant="outlined"/>
                  </tr>
                  <tr>
                      <Button variant="contained" color="primary" href="/map" >SCHEDULE GAME</Button>
                  </tr>
              </table>
          </Paper>
      </div>
    )
  }
}

export default NewGame;
