import { useEffect } from 'react';
import AOS from 'aos';
import './PromoBanner.css';

/**
 * A PromoBanner component for the Lions Club of Remastered website.
 * It displays a promo section with a title, paragraph, and optional call-to-action buttons.
 * The component initializes the AOS (Animate On Scroll) library for animations.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title displayed in the promo section.
 * @param {string} props.paragraph - The paragraph text displayed in the promo section.
 * @param {ReactElement[]} [props.ctaButtons] - The call-to-action buttons displayed in the promo section.
 * @param {string} [props.className] - The custom CSS class name for the promo section.
 * @returns {ReactElement} - The rendered PromoBanner component.
 */
export default function PromoBanner(props) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false })
    }, [])

    return (
        <section className={`promobanner container my-5 py-5 ${props.className && props.className}`} data-aos="fade-up">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>

            {props.ctaButtons &&
                <div className="cta-buttons-container d-flex g-4">
                    {props.ctaButtons}
                </div>
            }
        </section>
    )
}
