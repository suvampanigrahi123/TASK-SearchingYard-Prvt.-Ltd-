import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/pages/Home/Home';
import CoursePage from './components/pages/Course/CoursePage';
function App() {
  return (
    <Fragment>
    <Router>
     <Header />
     <Routes>
     <Route path='/' element={<Home/>}   />
     <Route path='/courses' element={<CoursePage/>}   />
     </Routes>
    </Router>
    </Fragment>
  );
}

export default App;
