import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GameDetails from './GameDetails';
import GameMap from './GameMap';

class MapPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            selectedGame: null
        };

        this.handlePinClick = this.handlePinClick.bind(this);
    }

    async componentDidMount() {
        fetch("../api/getPickUpGames")
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            this.setState({games: data})
          });
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
                            <GameMap games={this.state.games} handleClick={this.handlePinClick}/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default MapPage;