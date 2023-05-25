import './App.css';
import Nav from './Components/NavBar';
import Main from './Components/Main';
// import Grid from './Components/Grid';
// import GridBack from './Components/GridBack';

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Main />
      {/* <Grid rows={5} columns={30}/>
      <div>line breakline breakline breakline breakline breakline breakline breakline break</div> */}
    </div>
  );
}

export default App;
