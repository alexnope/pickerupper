import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

class GameMap extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 30.443315, lng: -84.304242 }}>
            {<Marker position={this.props.games[1]} onClick={this.props.handleClick}/>}
            {this.props.games.map( (game, index) => <Marker key={index} position={{lat: game.lat, lng: game.lng}} onClick={() => this.props.handleClick(game)}/>)}
        </GoogleMap>
        ));
          
        return(
            <Paper id='game-details' style={{width: '60rem', height: '50rem', marginLeft: '5rem'}} elevation={3}>
                <MapWithAMarker googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEzN5lYRv4hV47Vmnw4nVsz9DSvx4oljk&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `50rem` }} />} mapElement={<div style={{ height: `100%` }} />}/>
            </Paper>
            
        )
    }
}

export default GameMap;