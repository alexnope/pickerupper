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
            games: [
                {name: 'Game One', 
                coordinates: {lat: 26.648840, lng: -80.192157}, 
                player_num: 6,
                description: "This is a sample game. This is a sample game. This is a sample game. This is a sample game. This is a sample game. ", 
                street: "2216 Widener Ter",
                city: "Wellington",
                state: "FL",
                zip_code: "33414"
                },
                {name: 'Game Two', 
                coordinates: {lat: 29.662400, lng: -82.355838}, 
                player_num: 18,
                description: "This is a sample game. This is a sample game. This is a sample game. This is a sample game. This is a sample game. ", 
                street: "2216 Widener Ter",
                city: "Gainesville",
                state: "FL",
                zip_code: "33414"
                }
            ],
            selectedGame: null
        };

        this.handlePinClick = this.handlePinClick.bind(this);
    }

    getGames(){
        console.log('Getting games from DB');
    }

    handlePinClick(game){
        this.setState({selectedGame: game})
    }

    render(){
        return (
            <div>
                <AppBar position="static">
                    <Tabs>
                        <Tab label="Home" href="/home"/>
                        <Tab label="Map" href="/map"/>
                        <Tab label="Schedule Game" href="/game"/>
                    </Tabs>
                </AppBar>
                <table style={{marginTop: '2rem'}}>
                    <tr>
                        <td>
                            <GameDetails game={this.state.selectedGame}/>
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