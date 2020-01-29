import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Table, Button, Form, Col, Card, Row } from 'react-bootstrap';

class App extends Component {
  rowNrID = 0;
  state = {
    lag: "HORDALAND",
    lokalForening: "BERGEN",
    //Array for the table data.
    listOfTableData: [
      {
        name: "Gebi",
        sureName: "Beshir",
        address: "Wiers jensens vei 32",
        post: "0533",
        email: "gebi9@hotmail.com", mobileNr: 46781314,
        lag: "HORDALAND",
        forening: "BERGEN"
      },
    ]
  }

  // lifecycle hook that will run everytime this component is reloaded/starts
  componentDidMount = () => {

  }

  // User form submit.
  submit = () => {
    console.log('ok////:');
    alert('You are registered!');
  }
  ///render view
  render() {
    return (
      <div className="gridprimaryContainer container">

        <div>
          {/* ///////////////Registration form///////////////// */}
          <Card bg="secondary" text="white" style={{ width: '100%' }}>
            <Card.Header><h3>Registrasjon</h3></Card.Header>
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
                  <Form.Group as={Col} controlId="formGridPostNr">
                    <Form.Control className="postNrField" placeholder="POST NUMMER" />
                  </Form.Group>
                </Form.Row>

                {/* date-of-birth */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridDay">
                    <Form.Control as="select">
                      <option>DAG</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridMonth">
                    <Form.Control as="select">
                      <option>MÅNE</option>
                      <option>Jan</option>
                      <option>Feb</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridYear">
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
                  <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Control className="postNrField" placeholder="MOBIL" />
                  </Form.Group>
                </Form.Row>
                <h6> Du tilhører laget « {this.state.lag} », vil du velge et annet lag?, angi her.</h6>
                {/* fylkeslag : lokalforening */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridLag">
                    <Form.Control as="select">
                      <option>{this.state.lag}</option>
                      <option>HORDALAND</option>
                      <option>OSLO</option>
                      <option>NORDLAND</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLokalForening">
                    <Form.Control as="select">
                      <option>{this.state.lokalForening}</option>
                      <option>BERGEN</option>
                      <option>ARNA</option>
                      <option>SANDSLI</option>
                      <option>SANDVIKKEN</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                {/* submit button */}
                <Button onClick={this.submit} variant="success" type="submit" style={{ width: '15rem' }}>
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
              <th>Lag</th>
              <th>Forening</th>
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
                <td>{row.lag}</td>
                <td>{row.forening}</td>
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