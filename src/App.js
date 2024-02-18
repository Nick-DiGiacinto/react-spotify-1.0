import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MainComponent from "./components/Main.jsx";
import Sidebar from "./components/Sidebar.jsx";
import UpperList from "./components/UpperList.jsx";
import Player from "./components/Player.jsx";

//Ho convertito il file fornitoci in React come da richiesta. Sono inoltre riuscito ad 
//implementare redux nel progetto ed ho inserito la funzione di poter lasciare dei
// 'mi piace' mediante l'icona a forma di cuore come nello Spotify a cui siamo abituati.
// Ho cercato di rendere la pagina il più simile possibile al file originale ed il player
//cambia dinamicamente il titolo della canzone cliccando sui vari album.
//La funzione search della sidebar non era presente nel js fornitoci, quindi non l'ho implementata,
// ma ne ho lasciato l'aspetto visivo. L'unico cambiamento visivo che ho effettuato riguarda i nomi degli artisti
//che l'api fornisce all'apertura della pagina. Ne ho inseriti un paio di mio gradimento per personalizzare leggermente
//il progetto senza comprometterne la funzionalità.

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
            <h2>Rock classics</h2>
            <MainComponent artist={"queen"} />
            <h2>Epic metal</h2>
            <MainComponent artist={"powerwolf"} />
            <h2>Other artists</h2>
            <MainComponent artist={"Gloryhammer"} />
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