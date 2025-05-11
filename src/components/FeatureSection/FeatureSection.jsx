import { useEffect } from 'react';
import AOS from 'aos';
import './FeatureSection.css';

/**
 * A FeatureSection component for the Lions Club of Remastered website.
 * This component displays a section with text and image content that can
 * be animated using the AOS (Animate On Scroll) library. The text and image
 * are displayed side by side and can switch positions based on the 'right'
 * property of the image prop.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title displayed in the text container.
 * @param {string} props.paragraph - The paragraph text displayed in the text container.
 * @param {Object} props.img - The image details for display.
 * @param {string} props.img.src - The source URL of the image.
 * @param {string} props.img.alt - The alt text for the image.
 * @param {boolean} props.img.right - Determines if the image is displayed on the right or left.
 * @param {ReactElement[]} [props.ctaLinks] - Optional call-to-action links displayed below the text.
 * @returns {ReactElement} - The rendered FeatureSection component.
 */

export default function FeatureSection(props) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section data-aos="fade-up" className="container feature-section row my-5">
            <div className={`text-container col-12 col-md-6 ${props.img.right ? "left" : "right"}`}>
                <h2>{props.title}</h2>
                <p>{props.paragraph}</p>

                {props.ctaLinks && 
                    <div className="cta-container">
                        {props.ctaLinks}
                    </div>
                }
            </div>            

            <div className={`img-container col-12 col-md-6 ${props.img.right ? "right" : "left"}`} data-aos="fade-up" data-aos-delay="100">
                <img src={props.img.src} alt={props.img.alt} className="img-fluid" />
            </div>
        </section>
    )
}
