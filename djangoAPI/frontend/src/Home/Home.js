import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/PickerUpperLogo.png';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand href="#">
                        <img width="140 rem" height="60 rem" src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Brand href="#">Home</Navbar.Brand>
                    <Navbar.Brand href="#">Map</Navbar.Brand>
                    <Navbar.Brand href="#">Add Game</Navbar.Brand>
                </Navbar>
                <h1>This is the home page!</h1>
            </div>
        )
    }
}

export default Home;