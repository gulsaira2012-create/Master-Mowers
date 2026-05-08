import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Preloader from "./Components/preLoader";
import "./App.css";

/** Lazy pages */
const Home = lazy(() => import("./Pages/Home"));
const ContactUs = lazy(() => import("./Pages/ContactInfo"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Services = lazy(() => import("./Pages/Services"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogContent = lazy(() => import("./Components/BlogContent"));
const BlogContent2 = lazy(() => import("./Components/BlogContent2"));


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
           <Route path="/blog" element={<Blog />} />
           <Route
             path="/blog/mower-wont-start-brisbane"
             element={<BlogContent />}
           />
           <Route
             path="/blog/ride-on-mower-repair-brisbane-cost"
             element={<BlogContent2 />}
           />
          <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}
