// App.jsx
import React, { useState, useEffect } from "react";
// import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UseRef2 from "./components/UseRef2";
import Memo from "./components/Memo";
import UseMemo from "./components/UseMemo";
import ItemList from "./components/Usecallback";
import FocusInput from "./components/UseRef";
// import HomePage from './components/HomePage';
// import AboutPage from './components/About';
// import ContactPage from './components/Contact';
// import Navbar from './components/Navbar';
// Lazy load the components
// const HomePage = lazy(() => import("./components/HomePage"));
// const AboutPage = lazy(() => import("./components/About"));
// const ContactPage = lazy(() => import("./components/Contact"));

const App = () => {
  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [ContactPage, setContactPage] = useState(null);

  useEffect(() => {
    // Preload HomePage component
    import("./components/HomePage").then((module) =>
      setHomePage(()=>module.default)
    );
  }, []);

  const loadHomePage = () => {
    import("./components/HomePage").then((module) =>
      setHomePage(()=>module.default)
    );
  };

  const loadAboutPage = () => {
    import("./components/About").then((module) =>
      setAboutPage(()=>module.default)
    );
  };

  const loadContactPage = () => {
    import("./components/Contact").then((module) =>
      setContactPage(()=>module.default)
    );
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={loadHomePage}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={loadAboutPage}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={loadContactPage}>Contact</Link>
            </li>
          </ul>
        </nav>{" "}
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Routes>
            <Route path="/" element={HomePage ? <HomePage /> : <div>Loading...</div>} />
            {/* <Route path="/" element={<Memo />} /> */}
            {/* <Route path="/" element={<UseMemo />} /> */}
            {/* <Route path="/" element={<ItemList />} /> */}
            {/* <Route path="/" element={<FocusInput />} /> */}
            {/* <Route path="/" element={<UseRef2 />} /> */}
            <Route path="/about" element={AboutPage ? <AboutPage /> : <div>Loading...</div>} />
            <Route path="/contact" element={ContactPage ? <ContactPage /> : <div>Loading...</div>} />
          </Routes>
        {/* </Suspense> */}
      </div>
    </Router>
  );
};

export default App;
