import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class HomePage extends React.Component {

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
                <p>This is the home page!</p>
            </div>
        )
    }
}

export default HomePage;