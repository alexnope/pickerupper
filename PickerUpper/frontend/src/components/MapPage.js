import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GameDetails from './GameDetails';
import Map from './Map';
  

class MapPage extends React.Component {

    constructor(props) {
        super(props);
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
                            <Map />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default MapPage;