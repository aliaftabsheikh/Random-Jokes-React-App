import './App.css';
import { useRef, useState } from 'react';
import useRandomJoke from './useRandomJoke';
// import {TextField} from '@mui/material/TextField';
import { Grid, Paper, Button } from '@mui/material';
// import image1 from "./images/HAHA.jpg"
function App() {

  const firstNameRef = useRef()
  const lastNameRef = useRef()

  const [firstName, setfirstName] = useState('Ali')
  const [lastName, setlastName] = useState('Aftab')


  const joke = useRandomJoke(firstName, lastName)


  const addJoke = (e) => {
    e.preventDefault()
    setfirstName(firstNameRef.current.value);
    setlastName(lastNameRef.current.value)
  }

   const paperStyle = { padding: 20, height: "100%", margin: "10px auto 0px auto", width: "550px" }

  return (
    <div className="App">
      <Grid align = "center">
        <Paper elevation={10} style={paperStyle}>
          {/* <img className='bg' src={image1} alt="Image" /> */}
         
        <h1 className = "heading" >" Random Jokes " </h1><span>😂😂</span>
        <h2 className = "para">{joke}</h2>
         
        <form>
          <input type="text" placeholder='First Name' ref={firstNameRef} />
          <input type="text" placeholder='Last Name' ref = {lastNameRef} />
          <br/>
          <Button style = {{marginTop : "5px"}}  variant="contained" onClick = {addJoke}> Generate Joke</Button>
        </form>
       
        </Paper>
      </Grid>


      {/*//! <center>
        <h1>Random Joke</h1>
        <h2>{joke}</h2>
        <form>
          <input type="text" placeholder='First Name' ref={firstNameRef} />
          {/* <Input type="text" label="FirstName" placeholder="Enter a Email" fullWidth required ref ={lastNameRef}/> 
          <TextField id="filled-basic" label="Filled" variant="filled" ref = {lastNameRef} /> 
          <TextField id="standard-basic" label="Standard" variant="standard" ref={lastNameRef} />

          <input type="text" placeholder='Last Name' ref = {lastNameRef} />
          <button onClick={addJoke}>Generate Joke</button>
        </form>
      </center> */}
    </div>
  );
}

export default App;
