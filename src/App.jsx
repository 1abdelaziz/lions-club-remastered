import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import EventsPage from './pages/EventsPage.jsx';
import NotFound from './pages/404.jsx';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}