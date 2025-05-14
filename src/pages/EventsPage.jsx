import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo from '../assets/images/logo.png';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import SimpleHero from '../components/SimpleHero/SimpleHero.jsx';
import ToolBar from '../components/ToolBar/ToolBar.jsx';
import CardsContainer from '../components/CardsContainer/CardsContainer.jsx';
import EventCard from '../components/EventCard/EventCard.jsx';
import PromoBanner from '../components/PromoBanner/PromoBanner.jsx';

export default function EventsPage() {
    const events = [
        {
          img: {
            src: "https://placehold.co/600x400?text=Don+du+Sang",
            alt: "Don du Sang"
          },
          title: "Don du Sang",
          date: new Date(2025, 2, 15),
          startTime: new Date(0, 0, 0, 9, 0),
          endTime: new Date(0, 0, 0, 13, 0),
          location: "Faculté des Sciences Ben M'Sick",
          description: "Le CLUB LIONS FSBM organise le don du sang, un événement essentiel pour soutenir les besoins de notre communauté en produits sanguins...",
          link: "/evenements/don-du-sang.html"
        },
        {
          img: {
            src: "https://placehold.co/600x400?text=Dépistage+de+Diabète",
            alt: "Dépistage de Diabète"
          },
          title: "Dépistage de Diabète",
          date: new Date(2025, 3, 10),
          startTime: new Date(0, 0, 0, 10, 0),
          endTime: new Date(0, 0, 0, 16, 0),
          location: "Faculté des Sciences Ben M'Sick",
          description: "Notre CLUB LIONS FSBM organisera une action de dépistage du diabète destinée à sensibiliser le public...",
          link: "/evenements/depistage-diabete.html"
        },

        {
          img: {
            src: "https://placehold.co/600x400?text=Opération+Vêtements+Chauds",
            alt: "Opération Vêtements Chauds et Caravane Sociale"
          },
          title: "Opération Vêtements Chauds et Caravane Sociale",
          date: new Date(2025, 10, 25),
          startTime: new Date(0, 0, 0, 9, 0),
          endTime: new Date(0, 0, 0, 17, 0),
          location: "Quartiers défavorisés de Casablanca",
          description: "Notre club organise une Opération Vêtements Chauds et Caravane Sociale. Cette initiative a pour but d'apporter chaleur...",
          link: "/evenements/operation-vetements-chauds.html"
        },
        {
          img: {
            src: "https://placehold.co/600x400?text=Journée+Mondiale+de+la+Femme",
            alt: "Opération Journée Mondiale de la Femme"
          },
          title: "Opération Journée Mondiale de la Femme",
          date: new Date(2025, 2, 8),
          startTime: new Date(0, 0, 0, 10, 0),
          endTime: new Date(0, 0, 0, 16, 0),
          location: "Faculté des Sciences Ben M'Sick",
          description: "Le 08 Mars 2025, à l'occasion de la Journée Mondiale de la Femme, notre club est fier d'organiser une série d'activités...",
          link: "/evenements/journee-femme.html"
        },
        {
          img: {
            src: "https://placehold.co/600x400?text=Panier+Ramadan",
            alt: "Opération Panier Ramadan"
          },
          title: "Opération Panier Ramadan",
          date: new Date(2025, 3, 1),
          startTime: new Date(0, 0, 0, 9, 0),
          endTime: new Date(0, 0, 0, 17, 0),
          location: "Quartiers défavorisés de Casablanca",
          description: "À l'occasion du mois sacré de Ramadan, notre club lance l'Opération Panier Ramadan pour apporter aide et soutien...",
          link: "/evenements/panier-ramadan.html"
        },
        {
          img: {
            src: "https://placehold.co/600x400?text=Rénovation+Mosquée",
            alt: "Rénovation d'une Mosquée"
          },
          title: "Rénovation d'une Mosquée",
          date: new Date(2025, 6, 15),
          startTime: new Date(0, 0, 0, 9, 0),
          endTime: new Date(0, 0, 0, 17, 0),
          location: "Mosquée Al Nour, Casablanca",
          description: "Notre club entreprend la rénovation d'une mosquée locale afin de préserver ce lieu de culte et de rassemblement communautaire...",
          link: "/evenements/renovation-mosquee.html"
        },
        {
          img: {
            src: "https://placehold.co/600x400?text=Sensibilisation+Bucco-Dentaire",
            alt: "Sensibilisation Bucco-Dentaire"
          },
          title: "Sensibilisation Bucco-Dentaire",
          date: new Date(2025, 5, 20),
          startTime: new Date(0, 0, 0, 10, 0),
          endTime: new Date(0, 0, 0, 15, 0),
          location: "Écoles primaires de Casablanca",
          description: "Dans le cadre de notre mission de sensibilisation, notre club organise une journée dédiée à l’hygiène bucco-dentaire...",
          link: "/evenements/sensibilisation-bucco-dentaire.html"
        },
        {
          img: {
            src: "https://placehold.co/600x400?text=Sensibilisation+à+l'Environnement",
            alt: "Sensibilisation à l'Environnement"
          },
          title: "Sensibilisation à l'Environnement",
          date: new Date(2025, 4, 5),
          startTime: new Date(0, 0, 0, 10, 0),
          endTime: new Date(0, 0, 0, 13, 0),
          location: "Faculté des Sciences Ben M’Sick",
          description: "À l’occasion de la Journée Mondiale de l’Environnement, notre club met en œuvre une action de sensibilisation écologique...",
          link: "/evenements/sensibilisation-environnement.html"
        },
        {
          img: {
            src: "https://placehold.co/600x400?text=Activité+Enfants+Orphelins",
            alt: "Activité avec les Enfants Orphelins"
          },
          title: "Activité avec les Enfants Orphelins",
          date: new Date(2025, 6, 10),
          startTime: new Date(0, 0, 0, 10, 0),
          endTime: new Date(0, 0, 0, 16, 0),
          location: "Orphelinat Dar Al Atfal",
          description: "Nous organisons une journée spéciale d’activités ludiques, éducatives et artistiques avec les enfants orphelins...",
          link: "/evenements/activite-enfants-orphelins.html"
        },
    ];

    const [filteredEvents, setFilteredEvents] = useState(events);

    const [toolbarBtnsdata, setToolbarBtnsdata] = useState([
        {
            label: "Tous les Événements",
            filterFn: () => events,
            isActive: true,
        },
        {
            label: "Événements Passés",
            filterFn: () => events.filter(event => event.date < new Date()),
            isActive: false,
        },
        {
            label: "Événements à Venir",
            filterFn: () => events.filter(event => event.date >= new Date()), 
            isActive: false,
        }
    ]);

    function handleButtonClick(index, buttonsData) {
        const newToolbarBtnData = buttonsData.map((dt, i) => {
            if(index == i)
                return {...dt, isActive: true};
            return {...dt, isActive: false}
        })

        setToolbarBtnsdata(newToolbarBtnData);
        setFilteredEvents(buttonsData[index].filterFn());
    }

    function handleFilterClearing() {
        const newToolbarBtnData = toolbarBtnsdata.map((dt, index) => {
            if(index == 0)
                return {...dt, isActive: true}
            return {...dt, isActive: false}
        })

        setToolbarBtnsdata(newToolbarBtnData);
        setFilteredEvents(events);
    }

    function onSearchChange(e) {
        const text = e.currentTarget.value.toLowerCase();

        setFilteredEvents(events.filter(event => 
            event.title.toLowerCase().includes(text) || event.description.toLowerCase().includes(text)
        ))
    }   

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

            <SimpleHero
                title="Nos Événements Marquants"
                paragraph="Tout au long de l’année, notre club organise une variété d’événements solidaires, culturels et éducatifs pour renforcer les liens communautaires et promouvoir nos valeurs humanitaires. Rejoignez-nous pour vivre ces moments forts."
            />

            <main className='container'>
                <ToolBar
                    buttons={
                        toolbarBtnsdata.map((dt, index) => 
                            <button 
                                key={index}
                                type='button'
                                className={`btn ${ dt.isActive ? "btn-primary" : "btn-outline-primary"}`}
                                onClick={() => handleButtonClick(index, toolbarBtnsdata)}
                            >
                                {dt.label}
                            </button>
                        )
                    }

                    search={{
                        name: "events-search",
                        id: "events-search",
                        placeholder: "Trouver des évenements",
                        onChange: onSearchChange,
                    }}
                />

                <section className='events'>
                    {filteredEvents.length > 0 ? (
                        <CardsContainer>
                            {filteredEvents.map((event, index) => (
                                <EventCard {...event} key={index} />
                            ))}
                        </CardsContainer>
                    ) : (
                        <div className="clear-filter d-flex flex-column align-items-center justify-content-center my-3">
                            <p className="text-center">Aucun événement ne correspond à votre recherche.</p>
                            <button 
                                className='btn btn-outline-dark'
                                type="button"
                                onClick={handleFilterClearing}
                            >
                                Réinitialiser la recherche
                            </button>
                        </div>
                    )}
                </section>

                <PromoBanner 
                    className='event-idea'
                    title="Avez-vous une idée d'événement ?"
                    paragraph="Si vous avez une idée d'événement que vous aimeriez nous proposer, n'hésitez pas à nous contacter. Nous sommes toujours ouverts à de nouvelles idées et nous sommes impatients de découvrir comment nous pouvons travailler ensemble pour organiser des événements qui font une différence positive dans notre communauté."
                    ctaButtons={[
                        <Link to="contact/" className='btn btn-outline-primary'>Contactez-nous</Link>
                    ]}
                />
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