import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;


const App = () => {
  //useState to make this a controlled input
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
   // prevents the app from reloading once submit is clicked 
  e.preventDefault();
  console.log(word);
  fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    // catches any error that may occur while fetching the api
    .catch((err) => {
      console.log(err);
    })
}



  return (
    <div className="App">
      < Header title="Images Gallery" />
      < Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
