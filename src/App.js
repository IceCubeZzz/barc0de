import logo from './logo.svg';
import './App.css';


const signInWithGoogle = () => {};

const SignIn = () => {
  <main>
    <button onClick={signInWithGoogle}>Sign in With Google</button>
  </main>
}

function App() {
  return (
    <div className="App">
      <header>
    <button onClick={SignIn}>Sign In</button>
      </header>
    </div>
  );
}

export default App;
