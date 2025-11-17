import './App.css';
import Counter from './Counter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import LayoutEffectExample from './layoutEffectExample';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Laboratorium 6</h1>
        <h3>Zad 1</h3>
        <Counter />
        <h3>Zad 2</h3>
        <PrimeCalculator />
        <h3>Zad 3</h3>
        <FormReducer />
        <h3>Zad 4</h3>
        <div>
          <ThemeProvider>
            <ThemeSwitcher />
          </ThemeProvider>
        </div>
        <h3>Zad 5</h3>
        <LayoutEffectExample />
      </header>
    </div>
  );
}

export default App;
