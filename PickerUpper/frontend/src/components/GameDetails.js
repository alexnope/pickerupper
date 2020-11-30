import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class GameDetails extends React.Component {

    constructor(props){
        super(props);
    }

    renderSelectedGameDetails(){
        if(this.props.game == null){
            return(<p style={{marginLeft: '1rem'}}>No Game Selected</p>)
        } 
        else {
            return(
                <table style={{marginLeft: '1rem'}}>
                    <tr>
                        <Typography gutterBottom>{this.props.game.name}</Typography>
                    </tr>
                    <tr>
                        <Typography gutterBottom>{this.props.game.player_num} Players</Typography>
                    </tr>
                    <tr>
                        <Typography gutterBottom>{this.props.game.street}, {this.props.game.city}, {this.props.game.state}, {this.props.game.zip_code}</Typography>
                    </tr>
                    <tr>
                        <Typography gutterBottom>{this.props.game.description} Players</Typography>
                    </tr>
                </table>
            )
        }
    }

    render(){
        return(
            <div>
                <Paper id='game-details' style={{width: '40rem', height: '50rem', marginLeft: '5rem'}} elevation={3}>
                    <h3 style={{marginLeft: '1rem', paddingTop: '1rem', marginTop: '0rem'}}>Game Details</h3>
                    {this.renderSelectedGameDetails()}
                </Paper>
            </div>
        )
    }
}

export default GameDetails;