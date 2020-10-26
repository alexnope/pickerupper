import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Navbar expand="lg" variant="dark" bg="dark">
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