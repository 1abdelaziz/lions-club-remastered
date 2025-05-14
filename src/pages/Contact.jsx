import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import logo from '../assets/images/logo.png';

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import SimpleHero from "../components/SimpleHero/SimpleHero.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import InfoBox from "../components/InfoBox/InfoBox.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";

export default function Contact() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    })

    const faqItems = [
        {
          question: "Qu'est-ce que le Lions Club ?",
          answer: "C'est une organisation communautaire dédiée à l'entraide, au service humanitaire et au développement local à travers des actions concrètes, modernes et solidaires."
        },
        {
          question: "Comment puis-je devenir membre du club ?",
          answer: "Il vous suffit de nous contacter via notre formulaire de contact ou de participer à l’une de nos réunions ouvertes. Un membre du club vous guidera dans les étapes à suivre."
        },
        {
          question: "Quels types d'actions menez-vous ?",
          answer: "Nous organisons des campagnes de sensibilisation, des collectes de fonds, des événements éducatifs et des actions solidaires locales et internationales."
        },
        {
          question: "Puis-je faire un don sans être membre ?",
          answer: "Absolument. Nous acceptons les dons ponctuels ou réguliers via notre site web sécurisé. Chaque contribution compte."
        },
        {
          question: "Vos événements sont-ils ouverts au public ?",
          answer: "Oui, de nombreux événements sont ouverts à tous. Suivez notre actualité pour ne rien manquer !"
        }
    ];

    const infoBoxes = [
        {
          icon: <FaMapMarkerAlt />,
          title: "Adresse",
          paragraph: "Faculté des Sciences Ben M'Sik, Casablanca, Maroc"
        },
        {
          icon: <FaEnvelope />,
          title: "Email",
          paragraph: "lionsclubfsbm@gmail.com"
        },
        {
          icon: <FaPhone />,
          title: "Téléphone",
          paragraph: "+212 6 12 34 56 78"
        }
    ];

    return (
        <>
            <Header
                id="main-header"
                logo={{src: logo, alt: "Lions Club"}}
                brand={<span className="brand-name">Lions <span className="inner">Club</span></span>}
            >
                <Link to="/" className="link navlink">Accueil</Link>
                <Link to="/about" className="link navlink">A propos</Link>
                <Link to="/events" className="link navlink">Evénements</Link>
                <Link to="/contact" className="link navlink">Contact</Link>
                <Link to="/contact#form" className="btn btn-warning fw-bold">Rejoindre</Link>
            </Header>
            
            <SimpleHero
                title="Prenez contact avec nous"
                paragraph="Des questions, des idées, ou envie de rejoindre le Lions Club ? Nous serions ravis de vous entendre. Remplissez le formulaire ci-dessous ou contactez-nous directement."
                ctaButtons={[
                    <button
                        onClick={() => document.querySelector(".faq > h2").scrollIntoView({behavior: "smooth"})}
                        className="btn btn-outline-light" 
                        key="faq-btn"
                    >
                        Consulter la FAQ
                    </button>
                ]}
            />


            <main className='container my-1 py-5'>
                <section className="faq" data-aos="fade-up">
                    <h2 className='text-center py-3'>FAQ du Lions Club</h2>
                    <p className='text-center px-5'>
                        Nous sommes heureux de vous aider en répondant à vos questions. 
                        Si vous n'arrivez pas à trouver votre réponse dans notre FAQ, 
                        n'hésitez pas à nous contacter directement. Nous sommes impatients de vous entendre !
                    </p>

                    <FAQ faqItems={faqItems} />
                </section>


                <section className="contact-section my-3 row">
                    <section className='col' data-aos="fade-up">
                        <h2 className='my-5'>Informations de contact</h2>
                        <div className='container d-flex flex-column'>
                            {infoBoxes.map((infobox, index) => 
                                <InfoBox {...infobox} key={index} />
                            )} 
                        </div>
                    </section>

                    <section id='form' className='col' data-aos="fade-up">
                        <h2 className='my-5'>Contactez-nous</h2>
                        <ContactForm 
                            onSubmit={() => {alert("done")}}
                        />
                    </section>
                </section>

                <iframe 
                    data-aos="fade-up"
                    className='my-5'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.939646355421!2d-7.621651684442595!3d33.57901188053414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdacf80c1c9f4e17%3A0x6e2e5f1f9c7a8c2e!2sFacult%C3%A9%20des%20Sciences%20Ben%20M&#39;Sik!5e0!3m2!1sfr!2sma!4v1644441442216!5m2!1sfr!2sma" 
                    width="100%" 
                    height="450" 
                    loading="lazy"
                ></iframe>
            </main>

            <Footer
                logo={{src: logo, alt: "Lions Club logo"}}
                brand={<span className="brand-name">Lions <span className="text-white">Club</span></span>}
                paragraph="Nous sommes une organisation de jeunes motivés à impacter notre communauté positivement."
                socialMediaLinks={[
                    <Link key="facebook" to="https://www.facebook.com" className="text-white link me-3"><FaFacebook className='fs-5'/></Link>,
                    <Link key="instagram" to="https://www.instagram.com" className="text-white link me-3"><FaInstagram className='fs-5'/></Link>,
                    <Link key="twitter" to="https://www.twitter.com" className="text-white link me-3"><FaTwitter className='fs-5'/></Link>,
                    <Link key="linkedin" to="https://www.linkedin.com" className="text-white link"><FaLinkedin className='fs-5'/></Link>,
                ]}        
                quickLinks={[
                    <Link key="home" to="/" className="text-white text-decoration-none link">Accueil</Link>,
                    <Link key="about" to="/about" className="text-white text-decoration-none link">À propos</Link>,
                    <Link key="events" to="/events" className="text-white text-decoration-none link">Événements</Link>,
                    <Link key="contact" to="/contact" className="text-white text-decoration-none link">Contact</Link>
                ]}
                address="Faculté des Sciences Ben M'Sik, Casablanca, Maroc"
                mail="lionsclubfsbm@gmail.com"
                phone="+212612345678"
                importantLinks={[
                    <Link key="join" to="/contact#form" className="text-white text-decoration-none link">Rejoignez-nous</Link>,
                    <Link key="donate" to="/contact#form" className="text-white text-decoration-none link">Faire un don</Link>,
                ]}   
            />
        </>
    )
}