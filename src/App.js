import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;