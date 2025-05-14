import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { FaHeart, FaHandshake, FaBalanceScale, } from 'react-icons/fa';
import { Link, Navigate } from "react-router-dom";

import logo from "../assets/images/logo.png";
import { useEffect } from 'react';
import AOS from 'aos';

import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import SimpleHero from '../components/SimpleHero/SimpleHero.jsx';
import CardsContainer from '../components/CardsContainer/CardsContainer.jsx';
import SimpleCard from '../components/SimpleCard/SimpleCard.jsx';
import FeatureSection from '../components/FeatureSection/FeatureSection.jsx';
import MemberCard from '../components/MemberCard/MemberCard.jsx';
import Timeline from "../components/Timeline/Timeline.jsx";
import { TimelineItem } from "../components/Timeline/Timeline.jsx";

export default function About() {
    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    }, [])

    const coreValues = [
        {
          icon: <FaHeart />,
          title: "Compassion",
          paragraph: "Nous agissons avec bienveillance et empathie envers ceux qui en ont le plus besoin."
        },
        {
          icon: <FaHandshake />,
          title: "Engagement",
          paragraph: "Nous nous investissons pleinement pour améliorer la vie dans notre communauté."
        },
        {
          icon: <FaBalanceScale />,
          title: "Intégrité",
          paragraph: "Nous œuvrons avec honnêteté, transparence et responsabilité dans toutes nos actions."
        }
    ];
      
    const members = [
        {
          img: {
            src: "https://placehold.co/600x600",
            alt: "Aya Mabchour"
          },
          name: "Aya Mabchour",
          title: "Présidente",
          description: "Responsable des activités et des décisions stratégiques. Représente le club lors d'événements et réunions.",
          linkedin: "",
          facebook: "",
          instagram: "",
          twitter: ""
        },
        {
          img: {
            src: "https://placehold.co/600x600",
            alt: "Hamza Sabir"
          },
          name: "Hamza Sabir",
          title: "Vice Président",
          description: "Assiste la présidente et la remplace en son absence.",
          linkedin: "",
          facebook: "",
          instagram: "",
          twitter: ""
        },
        {
          img: {
            src: "https://placehold.co/600x600",
            alt: "Aya Naraki"
          },
          name: "Aya Naraki",
          title: "Chargée de suivi",
          description: "Suit les actions et réunions, rédige les procès-verbaux.",
          linkedin: "",
          facebook: "",
          instagram: "",
          twitter: ""
        },
        {
          img: {
            src: "https://placehold.co/600x600",
            alt: "Assia Omari"
          },
          name: "Assia Omari",
          title: "Chargée d'effectif",
          description: "Suit les inscriptions des nouveaux membres et gère le processus d'accueil.",
          linkedin: "",
          facebook: "",
          instagram: "",
          twitter: ""
        },
        {
          img: {
            src: "https://placehold.co/600x600",
            alt: "Asmaa Ezzagel"
          },
          name: "Asmaa Ezzagel",
          title: "Responsable Marketing",
          description: "Gestion des réseaux sociaux et création de contenu.",
          linkedin: "",
          facebook: "",
          instagram: "",
          twitter: ""
        },
        {
          img: {
            src: "https://placehold.co/600x600",
            alt: "Hajar Othmane"
          },
          name: "Hajar Othmane",
          title: "Trésorière",
          description: "Responsable des finances et du budget.",
          linkedin: "",
          facebook: "",
          instagram: "",
          twitter: ""
        },
        {
          img: {
            src: "https://placehold.co/600x600",
            alt: "Assiya Kharbouch"
          },
          name: "Assiya Kharbouch",
          title: "Secrétaire générale",
          description: "Gère les documents et les communications.",
          linkedin: "",
          facebook: "",
          instagram: "",
          twitter: ""
        },
        {
          img: {
            src: "https://placehold.co/600x600",
            alt: "Karima Laglil"
          },
          name: "Karima Laglil",
          title: "Responsable d'organisation",
          description: "Organise des événements ou des actions.",
          linkedin: "",
          facebook: "",
          instagram: "",
          twitter: ""
        }
    ];

    const milestones = [
        {
          "date": {
            "datetime": "2018-01-01",
            "text": "Novembre 2018"
          },
          "title": "Fondation de Lions FSBM",
          "paragraph": "Le club Lions FSBM a été fondé à la Faculté des Sciences Ben M’Sik, avec pour mission d'améliorer la communauté locale à travers des actions concrètes et solidaires."
        },
        {
          "date": {
            "datetime": "2022-12-01",
            "text": "Décembre 2022"
          },
          "title": "Collecte de sang",
          "paragraph": "Une opération de don du sang a été organisée pour soutenir les besoins de la communauté, avec des conditions sûres et encadrées."
        },
        {
          "date": {
            "datetime": "2023-11-01",
            "text": "Novembre 2023"
          },
          "title": "Visite à un orphelinat à Mohammedia",
          "paragraph": "Visite d’un orphelinat avec distribution de vêtements et de denrées alimentaires pour améliorer le quotidien des enfants."
        },
        {
          "date": {
            "datetime": "2023-10-01",
            "text": "Octobre 2023"
          },
          "title": "Caravane humanitaire vers Caronique-El Jadida",
          "paragraph": "Organisation d’une caravane humanitaire vers trois villages, avec distribution de vivres, vêtements et produits de première nécessité à 200 familles."
        },
        {
          "date": {
            "datetime": "2024-04-01",
            "text": "Ramadan 2024"
          },
          "title": "Distribution de Ftours solidaires",
          "paragraph": "Distribution de paniers repas pour le Ftour à Casablanca durant le mois sacré du Ramadan."
        },
        {
          "date": {
            "datetime": "2025-03-08",
            "text": "8 Mars 2025"
          },
          "title": "Célébration de la Journée Internationale des Droits des Femmes",
          "paragraph": "Organisation d’activités autour du 8 mars, incluant des témoignages, conférences et ateliers de bien-être et d’autonomisation des femmes."
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
            title="À propos de notre club"
            paragraph="Depuis sa fondation, le Lions Club de Remastered incarne les valeurs de solidarité, d'engagement et de service. Découvrez notre histoire, notre mission et les personnes qui donnent vie à nos actions."
            ctaButtons={[
                <button
                    className="btn btn-warning"
                    type="button"
                    onClick={() => document.querySelector(".our-history > h2").scrollIntoView({behavior: "smooth"})}
                    key="1"
                >
                    Notre histoire
                </button>,
                <button
                    className="btn btn-outline-light ms-2"
                    type="button"
                    onClick={() => document.querySelector(".members > h2").scrollIntoView({behavior: "smooth"})}
                    key="2"
                >
                    Rencontrer notre équipe
                </button>
            ]}
        />

        <main className='container'>
            <section className="my-5 py-5 core-values" data-aos="fade-up">
                <h2 className='text-center'>Our Core Values</h2>
                <CardsContainer>
                    {coreValues.map((value, index) =>
                        <SimpleCard {...value} key={index} />
                    )}
                </CardsContainer>
            </section>

            <FeatureSection
                title="Notre Mission"
                paragraph="Notre mission est de bâtir un monde plus solidaire à travers des actions concrètes et un engagement humain. Le Lions Club se donne pour objectif de répondre aux besoins essentiels des communautés locales en mobilisant les ressources, les bénévoles et les partenaires nécessaires. Nous croyons fermement que chaque petit geste peut engendrer un grand changement. En promouvant des valeurs de respect, d'intégrité et de service désintéressé, nous visons à inspirer les générations présentes et futures à s'impliquer activement dans la vie citoyenne. Servir n’est pas simplement un devoir pour nous, c’est une vocation profondément ancrée dans notre ADN."
                img={{
                    src: "https://placehold.co/600x900",
                    alt: "Membres du club en action communautaire",
                    right: false,
                }}
                ctaLinks={[
                    <Link to="/actions" className="link" key="1">Découvrir nos engagements <FaArrowRight /></Link>,
                ]}
            />

            <FeatureSection
                title="Notre Impact"
                paragraph="Depuis notre création, nous avons mené des dizaines de campagnes de solidarité, offert une aide directe à des familles dans le besoin, et sensibilisé la jeunesse aux valeurs du vivre-ensemble. Chaque action entreprise par notre club est guidée par l'envie d'apporter une différence tangible et durable. Nous travaillons main dans la main avec les collectivités, les écoles et les associations pour maximiser notre portée et renforcer les liens sociaux. Notre impact ne se mesure pas uniquement en chiffres, mais surtout en sourires partagés, en espoirs ravivés, et en histoires de vie transformées. Chaque mission accomplie est une victoire collective."
                img={{
                    src: "https://placehold.co/600x900",
                    alt: "Statistiques de l'impact social du club",
                    right: true,
                }}
                ctaLinks={[
                    <Link to="/impact" className="link" key="2" id='scroll-to-members'>Voir nos résultats <FaArrowRight /></Link>,
                ]}
            />

            <section className="members my-5" data-aos="fade-up">
                <h2 className='text-center'>Notre Équipe</h2>
                
                <CardsContainer>
                    {members.map((member, index) => 
                        <MemberCard {...member} key={index} />
                    )}
                </CardsContainer>
                <span id='scroll-to-our-history'></span>
            </section>

            <section className="our-history my-5" data-aos="fade-up">
                <h2 className='text-center my-5'>Notre Histoire</h2>
                <Timeline>
                    {milestones.map((milestone, index) =>
                        <TimelineItem {...milestone} key={index} />
                    )}
                </Timeline>
            </section>
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
  );
}