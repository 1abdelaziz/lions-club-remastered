import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, } from 'react-icons/fa';
import './MemberCard.css';

/**
 * A MemberCard component for the Lions Club of Remastered website.
 * It displays a card with a member's name, title, description, and social media links.
 * The component initializes the AOS (Animate On Scroll) library for animations.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.img - The image details for display.
 * @param {string} props.img.src - The source URL of the image.
 * @param {string} props.img.alt - The alt text for the image.
 * @param {string} props.name - The name displayed in the card.
 * @param {string} props.title - The title displayed in the card.
 * @param {string} props.description - The description displayed in the card.
 * @param {string} props.linkedin - The LinkedIn link displayed in the card.
 * @param {string} props.facebook - The Facebook link displayed in the card.
 * @param {string} props.instagram - The Instagram link displayed in the card.
 * @param {string} props.twitter - The Twitter link displayed in the card.
 * @returns {ReactElement} - The rendered MemberCard component.
 */
export default function MemberCard(props) {
    return (
        <div className="member-card lions-card h-100 p-4 text-center">
            <img
                src={props.img.src}
                alt={props.img.alt}
                className="card-img-top image-rounded my-3 mx-auto"
            />

            <div className="card-body d-flex flex-column">
                <h3 className="card-title">{props.name}</h3>
                <h6 className="card-subtitle mb-3 text-muted">{props.title}</h6>

                <p>{props.description}</p>
            </div>

            <div className="card-footer d-flex justify-content-center">
                <a href={props.linkedin} className='link' target="_blank"><FaLinkedin className="mx-3" /></a>
                <a href={props.facebook} className='link' target="_blank"><FaFacebook className="mx-3" /></a>
                <a href={props.instagram} className='link' target="_blank"><FaInstagram className="mx-3" /></a>
                <a href={props.twitter} className='link' target="_blank"><FaTwitter className="mx-3" /></a>
            </div>
        </div>
    );
}