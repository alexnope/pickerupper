import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

class Map extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
            {<Marker position={this.props.games[1]} onClick={this.props.handleClick}/>}
            {this.props.games.map( (game, index) => <Marker key={index} position={game.coordinates} onClick={() => this.props.handleClick(game)}/>)}
        </GoogleMap>
        ));
          
        return(
            <Paper id='game-details' style={{width: '60rem', height: '50rem', marginLeft: '5rem'}} elevation={3}>
                <MapWithAMarker googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXS2eGOGwvokpQlqGi4VPfbp5QO08lrGk&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `50rem` }} />} mapElement={<div style={{ height: `100%` }} />}/>
            </Paper>
            
        )
    }
}

export default Map;