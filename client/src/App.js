import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Link, Switch , Route} from "react-router-dom";
import CreateEmployee from "./component/createemployee/CreateEmployee"
import EditeEmployee from "./component/editeemployee/editeemployee"
import EmployeElist from "./component/employeelist/employeelist"

function App() {
  return (
    <div className="App">
      <Router>
        <header className="app-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/'} className="nav-link">MERN STACK - CURD Operation</Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/employeelist'} className="nav-link">Employeelist</Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                   <Switch>
                    <Route exact path="/" component={CreateEmployee}></Route>
                    <Route exact path="/editeemployee" component={EditeEmployee}></Route>
                    <Route exact path="/employeelist" component={EmployeElist}></Route>
                   </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      </Router>
    </div>
  );
}

export default App;
