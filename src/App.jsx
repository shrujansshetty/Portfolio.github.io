import React, { Suspense, lazy } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

// Lazy load heavy sections
const Techstack = lazy(() => import("./Components/Techstack"));
const Project = lazy(() => import("./Components/Projects"));
const Education = lazy(() => import("./Components/Education"));
const LetsConnect = lazy(() => import("./Components/LetsConnect"));
const Footer = lazy(() => import("./Components/Footer"));

function App() {
  return (
    <div>
      <Nav />
      <Home />

      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Techstack />
        <Project />
        <Education />
        <LetsConnect />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
