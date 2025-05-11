import { useEffect } from 'react';
import AOS from 'aos';
import './SimpleHero.css';

/**
 * A SimpleHero component for the Lions Club of Remastered website.
 * It displays a simple hero section with a title, paragraph, and optional call-to-action buttons.
 * The component initializes the AOS (Animate On Scroll) library for animations.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.title - The title displayed in the hero section.
 * @param {string} props.paragraph - The paragraph text displayed in the hero section.
 * @param {ReactElement[]} [props.ctaButtons] - Optional call-to-action buttons displayed in the hero section.
 * @returns {ReactElement} - The rendered SimpleHero component.
 */
export default function SimpleHero(props) {
    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    }, [])

    return (
        <section className="hero-section bg-dark text-center text-white pb-5" data-aos="fade-down">
            <h1>{props.title}</h1>
            <p className="px-2 lead">{props.paragraph}</p>

            {props.ctaButtons &&
                <div className="cta-buttons-container">
                    {props.ctaButtons}
                </div>
            }
        </section>
    );
}