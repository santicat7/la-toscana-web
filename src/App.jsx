import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import LaToscana from './pages/LaToscana';
import LaChacra from './pages/LaChacra';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {

useEffect(() => {

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {

if(entry.isIntersecting){
entry.target.classList.add("visible");
}

});

},{
threshold:0.15
});

reveals.forEach((el)=>observer.observe(el));

},[]);

return (
<Router>

<ScrollToTop />

<Navbar />

<main>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/la-toscana" element={<LaToscana />} />
<Route path="/la-chacra" element={<LaChacra />} />
<Route path="/servicios" element={<Services />} />
<Route path="/galeria" element={<Gallery />} />
<Route path="/contacto" element={<Contact />} />
</Routes>

</main>

<a
href="https://wa.me/59899779639?text=Hola!%20Quisiera%20consultar%20disponibilidad%20para%20un%20evento."
target="_blank"
rel="noopener noreferrer"
className="whatsapp-float"
>
<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" />
</a>

<Footer />

</Router>
);
}

export default App;