import logo from './logo.svg';
import './App.css';
import Balance from './components/Balance';
import Shop from './components/Shop';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <AddEmployee />
        <Employee />
      </Container>

    </div>
  );
}

export default App;
