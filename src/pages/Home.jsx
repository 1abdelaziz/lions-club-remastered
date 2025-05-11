import { FaArrowRight, FaFacebook, 
         FaInstagram, FaTwitter, FaLinkedin,} from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import heroBackground from "../assets/images/logo.png";

import Header from "../components/Header/Header.jsx";
import MainHero from "../components/MainHero/MainHero.jsx";
import FeatureSection from "../components/FeatureSection/FeatureSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CardContainer from "../components/CardContainer/CardContainer.jsx";
import EventCard from "../components/EventCard/EventCard.jsx";

export default function Home() {
    const featuredEvents = [
        {
            img: {
            src: 'https://placehold.co/600x600',
            alt: 'Participants cleaning the beach during the community event'
            },
            title: 'Nettoyage de Plage',
            date: new Date(2025, 4, 15), // May 15, 2025
            startTime: new Date(2025, 4, 15, 9, 0), // 09:00 AM
            endTime: new Date(2025, 4, 15, 12, 0), // 12:00 PM
            location: 'Plage Ain Diab, Casablanca',
            description: 'Une journée dédiée à la protection de l’environnement avec des bénévoles.',
            link: '/evenements/nettoyage-plage'
        },
        {
            img: {
            src: 'https://placehold.co/600x600',
            alt: 'Conférence sur le leadership avec des jeunes'
            },
            title: 'Conférence Leadership Jeune',
            date: new Date(2025, 5, 5), // June 5, 2025
            startTime: new Date(2025, 5, 5, 14, 0), // 2:00 PM
            endTime: new Date(2025, 5, 5, 17, 0), // 5:00 PM
            location: 'Hôtel Kenzi Tower, Casablanca',
            description: 'Inspirez-vous des leaders communautaires et développez vos compétences.',
            link: '/evenements/leadership-jeune'
        },
        {
            img: {
            src: 'https://placehold.co/600x600',
            alt: 'Volunteers planting trees during reforestation campaign'
            },
            title: 'Campagne de Reboisement',
            date: new Date(2025, 5, 12), // June 12, 2025
            startTime: new Date(2025, 5, 12, 8, 30), // 08:30 AM
            endTime: new Date(2025, 5, 12, 13, 0), // 01:00 PM
            location: 'Forêt de Bouskoura',
            description: 'Agissez pour le climat en plantant des arbres avec nous.',
            link: '/evenements/reboisement'
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
                <Link to="#" className="btn btn-warning fw-bold">Rejoindre</Link>
            </Header>
            <MainHero 
                background={{src: heroBackground, alt: "Hero background"}}
                title="Bienvenue au Club de la Faculté"
                paragraph="Rejoignez une communauté académique dynamique et restez informé des événements, actualités et opportunités."
                ctaButtons={
                    <>
                    <a href="/rejoindre" className="btn btn-warning fw-bold">Rejoindre</a>
                    <a href="/a-propos" className="btn btn-outline-light fw-bold">En savoir plus</a>
                    </>
                }
            />

            <main className="container">
                <FeatureSection
                    title="Ensemble pour un monde meilleur"
                    paragraph="Depuis sa création, le Lions Club FSBM rassemble des étudiants engagés et solidaires autour de causes humanitaires essentielles. Nous croyons au pouvoir de la jeunesse pour bâtir une société plus juste et plus humaine."
                    img={{
                        src: "https://placehold.co/600x600",
                        alt: "Membres du club en action",
                        right: true, // image à droite
                    }}
                    ctaLinks={[
                        <Link to="/a-propos" className="link" key="1">Découvrir le club <FaArrowRight /></Link>,
                    ]}
                />

                <FeatureSection
                    title="Des actions concrètes tout au long de l’année"
                    paragraph="Que ce soit à travers des campagnes de dons, des visites aux enfants hospitalisés ou des collectes alimentaires, notre club est toujours en mouvement pour servir notre communauté avec cœur et détermination."
                    img={{
                        src: "https://placehold.co/600x900",
                        alt: "Action solidaire du club",
                        right: false, // image à gauche
                    }}
                    ctaLinks={[
                        <Link to="/actions" className="link" key="1">Voir nos actions <FaArrowRight /></Link>,
                    ]}
                />

                <section className="featured-events my-5">
                    <h2 className='text-center'>Événements en vedette</h2>

                    <CardContainer>
                        {featuredEvents.map((event, index) => 
                            <EventCard {...event} key={index} />
                        )}
                    </CardContainer>
                </section>
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
                    <Link to="/upcoming-events" className="text-white text-decoration-none link">Événements à venir</Link>,
                    <Link to="/join-us" className="text-white text-decoration-none link">Rejoignez-nous</Link>,
                    <Link to="/donate" className="text-white text-decoration-none link">Faire un don</Link>,
                ]}   
            />
        </>
    )
}