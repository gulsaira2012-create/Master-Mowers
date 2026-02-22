import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Preloader from "./Components/preLoader";
import "./App.css";

/** Lazy pages */
const Home = lazy(() => import("./Pages/Home"));
const ContactUs = lazy(() => import("./Pages/ContactInfo"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Services = lazy(() => import("./Pages/Services"));


export default function App() {
  return (
    <Router>

      <main className="main-content">
        <Suspense fallback={<Preloader />}>
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/contact" element={<ContactUs />} />
           <Route path="/about" element={<AboutUs />} />
           <Route path="/services" element={<Services />} />

          <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}