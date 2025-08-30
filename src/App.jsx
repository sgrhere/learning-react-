function App() { // here function app is a component that consist of jsx code - js + html
  const name = "SGR"
  
// return can only return single element, so for multiple element we have to assign them into a single parent. Either in div or in <> ..... </> or <React.Fragment>...... </React.Fragment>

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>We are learning React.</h2>
    </div>
  );
}

export default App;

// We can define js things above return statement and use html things inside return. 
// We can use js feature inside the return statement by using {..} inside the return statement
// We write every codes here and then it get communicated to index.html file from main.jsx file.
