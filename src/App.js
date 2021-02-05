import logo from './logo.svg';
import './App.css';
import { useForm } from './useForm';s

const App = () => {
const [values, handleChange] = useForm({ email: "", password: ""});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <input name="email" value={values.email} onChange={handleChange} />
        <input name="password" type="password" value={values.password} onChange={handleChange} />
    </div>
  );
}

export default App;
