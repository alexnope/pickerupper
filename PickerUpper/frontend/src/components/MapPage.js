import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GameDetails from './GameDetails';
import Map from './Map';
  

class MapPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [{lat: -34.397, lng: 150.644}, {lat: 26.648840, lng: -80.192157}, {lat: 29.662400, lng: -82.355838}]
        }
        this.handlePinClick = this.handlePinClick.bind(this);
    }

    getGames(){
        console.log('Getting games from DB');
    }

    handlePinClick(){
        console.log('MARKER CLICKED from MapPage.js');
    }

    render(){
        return (
            <div>
                <AppBar position="static">
                    <Tabs>
                        <Tab label="Home" />
                        <Tab label="Map" />
                        <Tab label="Schedule Game" />
                    </Tabs>
                </AppBar>
                <table style={{marginTop: '2rem'}}>
                    <tr>
                        <td>
                            <GameDetails />
                        </td>
                        <td>
                            <Map games={this.state.games} handleClick={this.handlePinClick}/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default MapPage;