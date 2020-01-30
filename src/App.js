import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Table, Button, Form, Col, Card, } from 'react-bootstrap';

class App extends Component {
  rowNrID = 0;
  dayDropDownId = 0;
  monthDropDownId = 0;
  yearDropDownId = 0;
  tempFormData = {
    name: "",
    sureName: "",
    address: "",
    postNr: "",
    email: "",
    mobileNr: 0,
    lag: "",
    forening: "",
    birthDay: [{ day: null }, { month: null }, { year: null }]
  }
  state = {
    //Array for the table data.
    listOfTableData: [],
    dropDownDay: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 22, 23, 24, 25, 25, 27, 28, 29, 30],
    dropDownMonth: ["MÅNE", "Januar", "Februar", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "Oktober", "November", "Desember"],
    dropDownYear: [2007, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990],
    lokalForening: ["BERGEN", "ARNA", "VOSS", ".."],
    lag: "HORDALAND",
    forening: "BERGEN"
  }

  // lifecycle hook: values that need to be initialized at every reload.
  componentDidMount = () => {
  }

  // User form submit.
  POST = () => {
    if (this.validateForm()) {
      this.setState(prevState => ({
        listOfTableData: [...prevState.listOfTableData, this.tempFormData]
      }));
      ///////////////////////valid form data tobe sent to a database////////////////////
      console.log("///////DATA: som skal sendes til database////////:\n", this.tempFormData);
    }
  }

  //form validation
  validateForm = () => {
    let isFormValid = true;
    const fd = this.tempFormData;

    if (!(fd.name !== "")) {
      isFormValid = false;
      this.showAlert("Navn");
      return false;
    }
    if (!(fd.sureName !== "")) {
      isFormValid = false;
      this.showAlert("Etternavn");
      return false;
    }

    if (!(fd.address !== "")) {
      isFormValid = false;
      this.showAlert("Adresse");
      return false;
    }
    if (!(this.validatePost(fd.postNr))) {
      isFormValid = false;
      this.showAlert("Post nummer");
      return false;
    }

    if (!(!isNaN(fd.birthDay[0].day - parseFloat(fd.birthDay[0].day)))) {
      isFormValid = false;
      this.showAlert("Dag");
      return false;
    }
    if (!((fd.birthDay[1].month !== "MÅNE") && (!!fd.birthDay[1].month))) {
      isFormValid = false;
      this.showAlert("Måne");
      return false;
    }
    if (!(!isNaN(fd.birthDay[2].year - parseFloat(fd.birthDay[2].year)))) {
      isFormValid = false;
      this.showAlert("År");
      return false;
    }

    if (!(this.validateEmail(fd.email))) {
      isFormValid = false;
      this.showAlert("Mail");
      return false;
    }
    if (!(this.validateMobileNr(fd.mobileNr))) {
      isFormValid = false;
      this.showAlert("Mobil nummer");
      return false;
    }

    if (!((fd.lag !== "LAG") && (!!fd.lag))) {
      isFormValid = false;
      this.showAlert("Lag");
      return false;
    }
    if (!((fd.forening !== "LOKALFORENING") && (!!fd.forening))) {
      isFormValid = false;
      this.showAlert("Lokal forening");
      return false;
    }

    return isFormValid; // if any field in form, is missing data: isFormValidated = false.
  }

  //show error message
  showAlert = (message) => {
    alert(message + " Mangler! \nVennligst fyll ut " + message + ".");
  }

  // post validation,
  validatePost = (postNr) => {
    let isParsable;
    let is4CharsLong;
    try {
      isParsable = !isNaN(postNr - parseFloat(postNr));
      is4CharsLong = postNr.toString().length === 4;
      if (isParsable && is4CharsLong) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  // standard regExp for email.
  validateEmail = (email) => {
    const emailRegXP = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:" +
      "[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])" +
      "*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|" +
      "[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e" +
      "-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])";
    if (email.match(emailRegXP)) {
      return true;
    } else {
      return false;
    }
  }

  validateMobileNr = (mobileNr) => {
    let isParsable = true;
    try {
      parseInt(mobileNr);
    } catch (error) {
      isParsable = false;
    }
    let is8Chars = (mobileNr.toString().length === 8);
    if (is8Chars && isParsable) {
      return true;
    } else {
      return false;
    }
  }

  //update temporary table data (pre post)
  setValue = (event) => {
    const controlId = event.target.id;
    const value = event.target.value;
    switch (controlId) {
      case "formName": { this.tempFormData.name = value; break; }
      case "formSurName": { this.tempFormData.sureName = value; break; }
      case "formAddress": { this.tempFormData.address = value; break; }
      case "formPostNr": { this.tempFormData.postNr = value; break; }
      case "formDay": { this.tempFormData.birthDay[0].day = value; break; }
      case "formMonth": { this.tempFormData.birthDay[1].month = value; break; }
      case "formYear": { this.tempFormData.birthDay[2].year = value; break; }
      case "formEmail": { this.tempFormData.email = value; break; }
      case "formMobile": { this.tempFormData.mobileNr = value; break; }
      case "formLag": {
        this.tempFormData.lag = value;
        if (value !== "LAG") {
          this.setState({ lag: value });
        }
        break;
      }
      case "formLokalForening": {
        this.tempFormData.forening = value;
        if (value !== "LOKALFORENING") {
          this.setState({ forening: value });
        }
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }

  ///render view
  render() {
    return (
      <div className="gridprimaryContainer container">
        <div>
          {/* ///////////////Registration form///////////////// */}
          <Card bg="secondary" text="white" style={{ width: '100%' }}>
            <Card.Header><h3>Registrering</h3></Card.Header>
            <Card.Body>
              <Form>
                <Form.Label><h4>Personalia</h4></Form.Label>
                {/* first-name : last-name */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formName">
                    <Form.Control onChange={this.setValue} type="text" placeholder="FORNAVN" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formSurName">
                    <Form.Control onChange={this.setValue} type="text" placeholder="ETTERNAVN" />
                  </Form.Group>
                </Form.Row>

                {/* address : post-number */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formAddress">
                    <Form.Control onChange={this.setValue} type="text" placeholder="ADRESSE" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formPostNr">
                    <Form.Control onChange={this.setValue} type="number" placeholder="POST NUMMER" />
                  </Form.Group>
                </Form.Row>

                {/* date-of-birth */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formDay">
                    <Form.Control as="select" onChange={this.setValue}>
                      <option>DAG</option>
                      {this.state.dropDownDay.map(item => <option key={this.dayDropDownId++}>{item}</option>)};
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formMonth">
                    <Form.Control as="select" onChange={this.setValue}>
                      {this.state.dropDownMonth.map(item => <option key={this.monthDropDownId++}>{item}</option>)};
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formYear">
                    <Form.Control as="select" onChange={this.setValue}>
                      <option>ÅR</option>
                      {this.state.dropDownYear.map(item => <option key={this.yearDropDownId++}>{item}</option>)};
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                {/* epost : mobile */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formEmail">
                    <Form.Control onChange={this.setValue} type="email" placeholder="E-POST" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formMobile">
                    <Form.Control onChange={this.setValue} type="number" placeholder="MOBIL" />
                  </Form.Group>
                </Form.Row>
                <h6> Du tilhører laget « {this.state.lag} », og foreningen
                 « {this.state.forening} »  vil du velge et annet lag?, angi her.</h6>
                {/* fylkeslag : lokalforening */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formLag">
                    <Form.Control as="select" onChange={this.setValue}>
                      <option>LAG</option>
                      <option>HORDALAND</option>
                      <option>NORDLAND</option>
                      <option>OSLO</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formLokalForening">
                    <Form.Control as="select" onChange={this.setValue}>
                      <option>LOKALFORENING</option>
                      <option>Første Lag:</option>
                      <option>Andre Lag:</option>
                      <option>Tredje Lag: </option>
                    </Form.Control>
                  </Form.Group>

                </Form.Row>
                {/* submit button add type="submit" when done*/}
                <Button onClick={this.POST} variant="success" style={{ width: '15rem' }}>
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
                <td onClick={this.test} >{row.name}</td>
                <td>{row.sureName}</td>
                <td>{row.address}</td>
                <td>{row.postNr}</td>
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