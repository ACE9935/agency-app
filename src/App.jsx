import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AgenceEmaHomepage } from './screens/AgenceEmaHomepage';
import EventPlanning from './pages/EventPlanning';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<AgenceEmaHomepage />} />
        <Route path="/contact" element={<EventPlanning />} />
      </Routes>
    </Router>
  );
}

export default App;
