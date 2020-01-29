import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  ButtonToolbar, Table, Button, Form, Col, Card
} from 'react-bootstrap';
import { FormRow } from 'react-bootstrap/Form';

class App extends Component {
  rowNrID = 0;
  state = {
    //Array for the table data.
    listOfTableData: [
      { name: "Gebi", sureName: "Beshir", address: "Wiers jensens vei 32", post: "0533", email: "gebi9@hotmail.com", mobileNr: 46781314 },

    ]
  }

  // lifecycle hook that will run everytime this component is reloaded/starts
  componentDidMount = () => {

  }

  ///render view
  render() {
    return (
      <div className="gridprimaryContainer container">

        <div>
          {/* ///////////////Registration form///////////////// */}
          <Card bg="secondary" text="white" style={{ width: '100%' }}>
            <Card.Header><h3>Kunde register</h3></Card.Header>
            <Card.Body>
              <br />
              <Form>

                <Form.Label><h4>Personalia</h4></Form.Label>
                {/* first-name : last-name */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFornavn">
                    <Form.Control className="nameField" placeholder="FORNAVN" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEtternavn">
                    <Form.Control className="surNameField" placeholder="ETTERNAVN" />
                  </Form.Group>
                </Form.Row>

                {/* address : post-number */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Control className="addressField" placeholder="ADRESSE" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEtternavn">
                    <Form.Control className="postNrField" placeholder="POST NUMMER" />
                  </Form.Group>
                </Form.Row>

                {/* date-of-birth */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select">
                      <option>DAG</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select">
                      <option>MÅNE</option>
                      <option>Jan</option>
                      <option>Feb</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select">
                      <option>ÅR</option>
                      <option>1991</option>
                      <option>2017</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                {/* epost : mobile */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="E-POST" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEtternavn">
                    <Form.Control className="postNrField" placeholder="MOBIL" />
                  </Form.Group>
                </Form.Row>
                {/* submit button */}
                <Button onClick={this.getDataFromAPI} variant="success" type="submit" style={{ width: '15rem' }}>
                  Bli Frivillig
                 </Button>
              </Form>
              {/* ///////////////Registration form end///////////////// */}
            </Card.Body>
          </Card>
        </div>
        {/* ////////////Table start///////////////////// */}
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Fornavn</th>
              <th>Etternavn</th>
              <th>Adresse</th>
              <th>Post</th>
              <th>E-Post</th>
              <th>Mobil</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listOfTableData.map(row => (
              <tr key={this.rowNrID++} >
                <td>{row.name}</td>
                <td>{row.sureName}</td>
                <td>{row.address}</td>
                <td>{row.post}</td>
                <td>{row.email}</td>
                <td>{row.mobileNr}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* ////////////Table end///////////////////// */}
      </div>
    );
  }
}
export default App;