import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyAXS2eGOGwvokpQlqGi4VPfbp5QO08lrGk')

class NewGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      player_num: 4,
      street: null,
      city: null,
      state: null,
      zip_code: null,
      description: null
    }

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(data){
    this.setState(data)
  }

  handleSliderChange(event, value){
    this.setState({player_num: value})
  }

  handleSubmit(){

    for(let k in this.state){
      if(this.state[k] == null || this.state[k] == ""){
        alert("Make sure you fill out all the fields.")
        return
      }
    }

    var address = this.state.street + ", " + this.state.city + ", " + this.state.state + ", " + this.state.zip_code
    
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application.json'},
      body: JSON.stringify({
        name: this.state.name,
        player_num: this.state.player_num,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zip_code: this.state.zip_code,
        description: this.state.description
      })
    };
     
    fetch('api/createPickUpGame', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  render(){
    return(
      <div style={{marginTop: '4rem'}}>
          <Paper style={{width: '40rem', height: '50rem', margin: 'auto'}} elevation={3}>
              <table style={{marginLeft: '1rem'}}>
                  <tr>
                      <h3 style={{paddingBottom: '2rem'}}>Schedule a Game!</h3>
                  </tr>
                  <tr>
                      <TextField style={{paddingBottom: '3rem', width: '30rem'}} label="Game Name" variant="outlined" onChange={() => this.handleFormChange({name: event.target.value})}/>
                  </tr>
                  <tr>
                      <Typography gutterBottom>Number of Players: {this.state.player_num}</Typography>
                  </tr>
                  <tr>
                      <Slider style={{paddingBottom: '3rem'}} defaultValue={4} aria-labelledby="discrete-slider" step={1} marks min={1} max={20} onChange={this.handleSliderChange}/>
                  </tr>
                  <tr>
                      <Typography gutterBottom>Location</Typography>
                  </tr>
                  <tr>
                      <TextField style={{paddingBottom: '1rem', width: '30rem'}} label="Street" variant="outlined" onChange={() => this.handleFormChange({street: event.target.value})}/>
                  </tr>
                  <tr>
                      <TextField style={{width: '15rem'}} label="City" variant="outlined" onChange={() => this.handleFormChange({city: event.target.value})}/>
                      <TextField style={{width: '5rem'}} label="State" variant="outlined" onChange={() => this.handleFormChange({state: event.target.value})}/>
                      <TextField style={{paddingBottom: '3rem', width: '10rem'}} label="Zip Code" variant="outlined" onChange={() => this.handleFormChange({zip_code: event.target.value})}/>
                  </tr>
                  <tr>
                      <TextField style={{width: '30rem', height: '5rem'}} label="Description" multilinerows={4} variant="outlined" onChange={() => this.handleFormChange({description: event.target.value})}/>
                  </tr>
                  <tr>
                      <Button variant="contained" color="primary" onClick={this.handleSubmit}>SCHEDULE GAME</Button>
                  </tr>
              </table>
          </Paper>
      </div>
    )
  }
}

export default NewGame;
