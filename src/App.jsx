import './App.css';
import Header from './components/Header';
import KanbanBoard from './Pages/status';
import User from './Pages/user';
import Priority from './Pages/priority';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
       <Routes>
       <Route path = "/status" element={<KanbanBoard />} />
       <Route path = "/user" element={<User />} />
       <Route path = "/priority" element={<Priority />} />
       </Routes>
  </BrowserRouter>
  );
}

export default App;
