import data from './data/etsy.json'
import './App.css';
import Listing from './components/Listing';

function App() {
  return (
    <Listing items={data} />
  );
}

export default App;
