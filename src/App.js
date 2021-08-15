//import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Widget from './components/Widgets';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed />

      {/* Widget */}
      <Widget/>
    </div>
  );
}

export default App;
