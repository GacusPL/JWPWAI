import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
import Zad3 from './zad3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lab 5</h1>
        <h2>Zad 1</h2>
        <h3>Warunkowe renderowanie komponentu</h3>
      <ToggleDetails />
      <h2>Zad 2</h2>
      <h4>Wynik</h4>
      <ScoreDisplay score={70}  />
      <h2>Zad 3</h2>
      <h3>Lista zadań</h3> 
      <TaskList />
      <h2>Zad 4</h2>
      <h3>Lista użytkowników</h3>
      <UserList />
      <h2>Zad 5</h2>
      <TimerCounter />
      <Zad3 />
      </header>
    </div>
  );
}

export default App;
