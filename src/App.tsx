import React, { useState } from "react";
import { useFadeInOnScroll } from "./hooks/useFadeInOnScroll";
import { NavBar } from "./components/common/NavBar";
import { Footer } from "./components/common/Footer";
import { ContactModal } from "./components/common/ContactModal";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  useFadeInOnScroll();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const toAbout = () => scrollTo("about");
  const toContact = () => scrollTo("contact");

  return (
    <div className="bg-gray-900">
      <NavBar />
      <main>
        <Hero onCTAPrimary={toAbout!} onCTASecondary={toContact!} />
        <About />
        <Skills />
        <Contact onOpen={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
