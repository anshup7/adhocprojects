import './App.css';
import PasswordText from './components/PasswordText';
const passwordString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&_`{|}~';

function App() {
  

  return (
    <>
      <div className="main-container" id="main_container">
        <PasswordText defaultPassword={passwordString} />
      </div>
    </>
  );
}

export default App
