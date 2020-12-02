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
                        <Tab label="Home" href="/home"/>
                        <Tab label="Map" href="/map"/>
                        <Tab label="Schedule Game" href="/game"/>
                    </Tabs>
                </AppBar>
                <table style={{marginLeft: '3rem', width: '100rem'}}>
                    <tr>
                        <h1>Picker Upper</h1>
                    </tr>
                    <tr>
                        <p>Picker Upper is a web application made for sport lovers. It's a place where anyone can schedule a pick up game, of any sport, for others to see and join if they want.</p>
                    </tr>
                    <tr>
                        <h4>Getting Started</h4>
                    </tr>
                    <tr>
                        <ol>
                            <li>Clone this project into your device</li>
                            <li>Open the "PickerUpper" folder, and run the following command to start the server: <strong>python manage.py runserver</strong></li>
                            <li>Open the "frontend" folder, and type the following command to install all required dependencies: <strong>npm install</strong></li>
                            <li>Copy the link given and paste it in your browser (make sure to append "/home" at the end of the url)</li>
                            <li>Enjoy the web app!</li>
                        </ol>
                    </tr>
                    <tr>
                        <p>If you wish to make changes to the application, make sure to go to the "frontend" folder, and run the command npm run dev. This command will run Webpack in development mode (do this after step 3).</p>
                    </tr>
                    <tr>
                        <h4>Problem To Solve</h4>
                    </tr>
                    <tr>
                        <p>The problem we aim to solve is lack of information and communication between people planning a pick up game, and potential players. Traditionally, players would become aware of the existance of pick up games through word of mouth, or finding one by luck. This made it very hard for players to find games, especially players that were new in town (or just staying temporarily), didn't know many people, or just getting into the sport. We wanted to create a resource where players could not easily find pick up games to join, but also start their own. Thus, we created Picker Upper.</p>
                    </tr>
                    <tr>
                        <h4>Python Libraries</h4>
                    </tr>
                    <tr>
                        <ul>
                            <li>django</li>
                            <li>djangorestframework</li>
                        </ul>
                    </tr>
                    <tr>
                        <h4>Resoruces Used</h4>
                    </tr>
                    <tr>
                        <ul>
                            <li>React</li>
                            <li>Google Cloud Platform</li>
                        </ul>
                    </tr>
                    <tr>
                        <h4>Separation of Work</h4>
                    </tr>
                    <tr>
                        <ul>
                            <li><strong>Andrés Aguilar:</strong> Built the entire front end of the application, as well as all of the setting and configuration of the django project to work with javascript and React.</li>
                            <li><strong>Alex No:</strong> Handled the database operations. Created serializers to check for validity of requests from the front end to the back end, as well as the views required to handle those requests and return a response.</li>
                        </ul>
                    </tr>
                </table>
                
                
            </div>
        )
    }
}

export default HomePage;