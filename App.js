import React, {useState, useEffect} from 'react';
import Body from './Body'
import FormComponent from './Form'
import NavbarComponent from './Navbar'
import './App.css'

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      //.then(text => console.log(text))
      
      //.then((res) => res.json())
      .then((data) => setData(data.message))
  }, []);
  
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Body></Body> 
      <FormComponent></FormComponent>
    </>
  );
};

export default App;