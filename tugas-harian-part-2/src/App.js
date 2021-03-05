import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Nav from './Tugas-15/navbar';
import {NavbarProvider} from "./Tugas-15/navbarContext"

// import FormBuah from './Tugas-9/FormBuah'
// import ListBuah from './Tugas-10/ListBuah'
// import Timer from './Tugas-11/Timer'
//import List from './Tugas-12/UpdateBuah'
//import List2 from './Tugas-13/UpdateBuah2'
//import Buah from './Tugas-14/Buah';

function App() {
  return(
    // <div>
    //   <FormBuah />
    //   <ListBuah />
    //   <Timer /> 
    //   <List/> 
    //   <List2/>
    //   <Buah/>
    // </div>
    <Router>
      <NavbarProvider>
        <Nav />
      </NavbarProvider>
    </Router>
  );
}

export default App;