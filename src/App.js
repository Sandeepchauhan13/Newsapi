// import React, { Component } from 'react'
import React, {useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// export default class App extends Component {

const App=()=> {


 const  pageSize= 5;
 const  apiKey=process.env.REACT_APP_NEWS_API
   

 const [mode, setMode]= useState('light');
 const removeBodyClasses=()=>{
   document.body.classList.remove('bg-light')
   document.body.classList.remove('bg-dark')
   document.body.classList.remove('bg-warning')
   document.body.classList.remove('bg-danger')
   document.body.classList.remove('bg-success')
 }
 const toggleMode= (cls)=>{
   removeBodyClasses();
   document.body.classList.add('bg-'+cls)
  if(mode=== 'light'){

     setMode('dark');
     document.body.style.backgroundColor='#080a31';
     // showAlert("Dark mode has been enabled","success");
   }
   else{
     setMode('light');
     document.body.style.backgroundColor='white';
     // showAlert("Light mode has been enabled","success");
   }
 }



  // render() {
    
    return (
      <div>
         <BrowserRouter>
        <Navbar   toggleMode={toggleMode} mode={mode}/>
        
        
      <Routes>
  <Route exact path='/' element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>}></Route>
  <Route exact path='/business' element={<News key="business" pageSize={pageSize} apiKey={apiKey} country="in" category="business"/>}></Route>
  <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment"/>}></Route>
  <Route exact path='/general' element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>}></Route>
  <Route exact path='/health' element={<News key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health"/>}></Route>
  <Route exact path='/science' element={<News key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science"/>}></Route>
  <Route exact path='/sports' element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports"/>}></Route>
  <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology"/>}></Route>

  {/* <Route exact path='/' element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>}></Route>
  <Route exact path='/business' element={<News key="business" pageSize={pageSize} apiKey={apiKey} country="in" category="business"/>}></Route>
  <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment"/>}></Route>
  <Route exact path='/general' element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>}></Route>
  <Route exact path='/health' element={<News key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health"/>}></Route>
  <Route exact path='/science' element={<News key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science"/>}></Route>
  <Route exact path='/sports' element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports"/>}></Route>
  <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology"/>}></Route>
   */}
 
        {/* <News  pageSize={pageSize} country="in" category="science"/> */}
  {/* <Redirect to ='/' /> */}
  </Routes>
        </BrowserRouter>
      </div>
    )
  // }
}
export default App;
