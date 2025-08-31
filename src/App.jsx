import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() { // here function app is a component that consist of jsx code - js + html
  const name = "SGR"

  // return can only return single element, so for multiple element we have to assign them into a single parent. Either in div or in <> ..... </> or <React.Fragment>...... </React.Fragment>

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/contact' element= {<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// We can define js things above return statement and use html things inside return. 
// We can use js feature inside the return statement by using {..} inside the return statement
// We write every codes here and then it get communicated to index.html file from main.jsx file.
// We will define each and every paths using <Route/>.
