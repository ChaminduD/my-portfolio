import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import FrontendProjects from './Components/AllProjects/FrontendProjects/FrontendProjects.jsx';
import WebDesignProjects from './Components/AllProjects/WebDesignProjects/WebDesignProjects.jsx';
import UiUxProjects from './Components/AllProjects/UiUxProjects/UiUxProjects.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import ScrollToHash from './Components/ScrollToHash.jsx';

function App() {
  return (
    <>
      <Router basename="/my-portfolio">
        <ScrollToTop/>
        <ScrollToHash/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects/frontend" element={<FrontendProjects/>} />
          <Route path="/projects/webdesign" element={<WebDesignProjects/>} />
          <Route path="/projects/uiux" element={<UiUxProjects/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
