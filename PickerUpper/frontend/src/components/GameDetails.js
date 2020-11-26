import React from 'react';
import Paper from '@material-ui/core/Paper';

class GameDetails extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Paper id='game-details' style={{width: '40rem', height: '50rem', marginLeft: '5rem'}} elevation={3}>
                    <h3 style={{marginLeft: '1rem', paddingTop: '1rem', marginTop: '0rem'}}>Game Details</h3>
                </Paper>
            </div>
        )
    }
}

export default GameDetails;