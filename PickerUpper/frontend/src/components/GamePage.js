import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NewGame from './NewGame';

class GamePage extends React.Component {

    constructor(props) {
        super(props);
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
                <p>This is the game page!</p>
                <NewGame />
            </div>
        )
    }
}

export default GamePage;