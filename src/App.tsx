/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import About from "./components/About";
import Tours from "./components/Tours";
import Hotels from "./components/Hotels";
import Itinerary from "./components/Itinerary";
import TourMap from "./components/TourMap";
import Gallery from "./components/Gallery";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-rolex-gold z-50 origin-left"
        style={{ scaleX }}
      />

      <LanguageSwitcher />

      <Hero />
      <About />
      <Tours />
      <Hotels />
      <Itinerary />
      <TourMap />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
