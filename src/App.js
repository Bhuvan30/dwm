import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import Complaint from './Pages/Complaint/Complaint';
import { Dashboard } from '@mui/icons-material';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MapLayout from './Pages/Map/MapLayout';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/signup" exact element={<SignUp/>} />
          <Route path="/map" exact element={<MapLayout/>} />
          <Route path="/register-complaint" exact element={<Complaint/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="*" exact element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;