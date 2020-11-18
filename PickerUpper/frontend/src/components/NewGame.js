import React from 'react';
//import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewGame extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Enter a New Pick-Up Game!</h1>
        <Form>
          <Form.Group controlID = "formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type = "name" placeholder = "Enter name" />
          </Form.Group>

          <Form.Group controlID = "formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type = "location" placeholder = "Enter the location" />
        </Form.Group>

        <Form.Group controlID = "formSport">
          <Form.Label>Sport</Form.Label>
          <Form.Control type = "sport" placeholder = "Enter the sport" />
        </Form.Group>

        <Form.Group controlID = "formPlayers">
          <Form.Label>Number of Players</Form.Label>
            <Form.Control as = "select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlID = "formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as = "textarea" rows = {3} />
          </Form.Group>

          <Button variant = "primary" type = "submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default NewGame;
