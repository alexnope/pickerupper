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
                {title: 'Game One', coordinates: {lat: 26.648840, lng: -80.192157}}, 
                {title: 'Game Two', coordinates: {lat: 29.662400, lng: -82.355838}}
            ],
            selectedGame: null
        };

        this.handlePinClick = this.handlePinClick.bind(this);
    }

    getGames(){
        console.log('Getting games from DB');
    }

    handlePinClick(game){
        console.log('Game ' + game.title + ' clicked.');
        this.setState({selectedGame: game})
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