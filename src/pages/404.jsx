import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import Footer from '../components/Footer/Footer.jsx';
import logo from '../assets/images/logo.png';
import AOS from 'aos';
import { useEffect } from 'react';


export default function NotFound() {
    useEffect(() => {
        AOS.init({duration: 1000, once: false})
    })

    return (    
        <>
            <main className="min-vh-100 d-flex flex-column justify-content-center align-items-center" data-aos="fade-up">
                <div className="text-center">
                    <div className="display-1 text-warning mb-4">404</div>
                    <h1 className="display-3 fw-bold mb-2">Page introuvable</h1>
                    <p className="fs-5 mb-4 px-3">
                        Désolé, nous n'avons pas pu trouver la page que vous cherchez.
                        Il est possible qu'elle ait été déplacée ou qu'elle n'existe pas.
                    </p>
                    <Link 
                        to="/" 
                        className="btn btn-warning fw-bold px-4 py-2"
                    >
                        Retourner sur la page d'accueil
                    </Link>
                </div>
            </main>
            
            <Footer
                logo={{src: logo, alt: "Lions Club logo"}}
                brand={<span className="brand-name">Lions <span className="text-white">Club</span></span>}
                paragraph="Nous sommes une organisation de jeunes motivés à impacter notre communauté positivement."
                socialMediaLinks={[
                    <Link to="https://www.facebook.com" className="text-white link me-3"><FaFacebook className='fs-5'/></Link>,
                    <Link to="https://www.instagram.com" className="text-white link me-3"><FaInstagram className='fs-5'/></Link>,
                    <Link to="https://www.twitter.com" className="text-white link me-3"><FaTwitter className='fs-5'/></Link>,
                    <Link to="https://www.linkedin.com" className="text-white link"><FaLinkedin className='fs-5'/></Link>,
                ]}        
                quickLinks={[
                    <Link to="/" className="text-white text-decoration-none link">Accueil</Link>,
                    <Link to="/about" className="text-white text-decoration-none link">À propos</Link>,
                    <Link to="/events" className="text-white text-decoration-none link">Événements</Link>,
                    <Link to="/contact" className="text-white text-decoration-none link">Contact</Link>
                ]}
                address="Faculté des Sciences Ben M'Sik, Casablanca, Maroc"
                mail="lionsclubfsbm@gmail.com"
                phone="+212612345678"
                importantLinks={[
                    <Link to="/contact#form" className="text-white text-decoration-none link">Rejoignez-nous</Link>,
                    <Link to="/contact#form" className="text-white text-decoration-none link">Faire un don</Link>,
                ]}   
            />        
        </>
    )
}