import React, { Suspense } from "react";
import Preloader from "./Components/preLoader";
import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load the components
const Home = React.lazy(() => import("./Home"));
const ContactUs = React.lazy(() => import("./contactUs"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const Kitchen = React.lazy(() => import("./services/kitchen"));
const Floor = React.lazy(() => import("./services/floor"));

const App = () => {
  return (
    <Router>
      <main className="main-content">
        <Suspense fallback={<Preloader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/floor" element={<Floor />} />
            {/* Define other routes that you need */}
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;