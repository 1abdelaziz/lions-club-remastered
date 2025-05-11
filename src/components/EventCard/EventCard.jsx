import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapPin, FaCalendar, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './EventCard.css';



/**
 * A EventCard component for the Lions Club of Remastered website.
 * It displays a card with event details, including title, date, time, location, description, and a link to learn more.
 * The component initializes the AOS (Animate On Scroll) library for animations.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.img - The image details for display.
 * @param {string} props.img.src - The source URL of the image.
 * @param {string} props.img.alt - The alt text for the image.
 * @param {string} props.title - The title displayed in the card.
 * @param {Date} props.date - The event date displayed in the card.
 * @param {Date} props.startTime - The event start time displayed in the card.
 * @param {Date} props.endTime - The event end time displayed in the card.
 * @param {string} props.location - The event location displayed in the card.
 * @param {string} props.description - The event description displayed in the card.
 * @param {string} props.link - The link to learn more about the event displayed in the card.
 * @returns {ReactElement} - The rendered EventCard component.
 */
export default function EventCard(props) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className="lions-card event-card-container card h-100" data-aos="fade-up" key={props.key}>
            <img src={props.img.src} alt={props.img.alt} className="card-img-top object-fit-cover" style={{height: "200px"}} />
            <div className="card-body d-flex flex-column">
                <h3 className="card-title">{props.title}</h3>
                <div className="mb-2">
                    <h4 className='date text-muted'>
                        <FaCalendar className="me-2" />
                        {new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(props.date)}
                    </h4>
                    <h4 className='time text-muted'>
                        <FaClock className="me-2" />
                        {new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(props.startTime)} 
                        - 
                        {new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(props.endTime)}
                    </h4>
                    <h4 className='location text-muted'>
                        <FaMapPin className="me-2" />
                        {props.location}
                    </h4>
                </div>
                <p className="card-text flex-grow-1">{props.description}</p>
                <Link className='link mt-auto align-self-start' to={props.link}>
                    Learn More <FaArrowRight className="ms-1" />
                </Link>
            </div>
        </div>
    )
}