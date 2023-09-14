import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import Complaint from './Pages/Complaint/Complaint';
import { Dashboard } from '@mui/icons-material';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/register-complaint" exact element={<Complaint/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;