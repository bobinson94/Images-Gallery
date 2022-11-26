import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';




const App = () => {
  //useState to make this a controlled input
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
   // prevents the app from reloading once submit is clicked 
  e.preventDefault();
  console.log(e.target[0].value);
}


  return (
    <div className="App">
      < Header title="Images Gallery" />
      < Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
