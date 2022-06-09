import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Tick from './Components/Tick';
import Login from './LoginForm/Login';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Notion from './Pages/Notion';
import Reports from './Pages/Reports';
import Suport from './Pages/Suport';
import Team from './Pages/Team';
import Register from './LoginForm/Register'   

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/crong-blog" element={<Home />} />
          <Route path="/crong-blog" element={<Home/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/notion" element={<Notion/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/suport" element={<Suport/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
