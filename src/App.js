import Header from './components/Header'
import Welcome from './components/Welcome'
import Provider from './components/Provider'
import './App.css';

function App() {
  return (
    <div className="App">      
        <div>
          <Header />
        </div>
        
        <div>
          <Welcome />
        </div>
        <div>
          <Provider />
        </div>
    </div>
  );
}

export default App;
