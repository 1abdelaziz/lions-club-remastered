import { useEffect } from 'react';
import AOS from 'aos';
import './MainHero.css';

/**
 * A MainHero component for the Lions Club of Remastered website.
 * It displays a full-page hero section with a background image, overlay,
 * title, paragraph, and optional call-to-action buttons.
 * The component initializes the AOS (Animate On Scroll) library for animations.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.background - The background image for the hero section.
 * @param {string} props.background.src - The image source URL.
 * @param {string} props.background.alt - The alt text for the background image.
 * @param {string} props.title - The title displayed in the hero section.
 * @param {string} props.paragraph - The paragraph text displayed in the hero section.
 * @param {ReactElement[]} [props.ctaButtons] - Optional call-to-action buttons displayed in the hero section.
 * @returns {ReactElement} - The rendered MainHero component.
 */

export default function MainHero(props) {
    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    })

    return (
        <section className="main-hero">
            <img src={props.background.src} alt={props.background.alt} />
            <div className="overlay"></div>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>

            {props.ctaButtons &&
                <div className="cta-buttons-container">
                    {props.ctaButtons}
                </div>
            }
        </section>
    )
}