import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { HowWeWork } from './pages/HowWeWork';
import { CaseStudies } from './pages/CaseStudies';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Start } from './pages/Start';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how-we-work" element={<HowWeWork />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="start" element={<Start />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
