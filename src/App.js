import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MainComponent from "./components/Main.jsx";
import Sidebar from "./components/Sidebar.jsx";
import UpperList from "./components/UpperList.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={0} md={4} lg={3} className="p-0 ">
            <Sidebar />
          </Col>

          <Col xs={12} md={8} lg={9}>
            <UpperList />
            <h2>Your favourites</h2>
            <MainComponent artist={"queen"} />
            <h2>Most liked</h2>
            <MainComponent artist={"annihilator"} />
            <h2>Other artists</h2>
            <MainComponent artist={"dissection"} />
          </Col>
        </Row>
      </Container>
      <footer>
        <Player />
      </footer>
    </div>
  );
}

export default App;