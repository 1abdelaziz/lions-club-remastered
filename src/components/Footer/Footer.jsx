import { useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import AOS from 'aos';
import './Footer.css';

/**
 * A Footer component for the Lions Club of Remastered website.
 * It displays a footer section with logo, brand name, paragraph, social media links, quick links, contact information, and important links.
 * The component initializes the AOS (Animate On Scroll) library for animations.
 * @param {Object} props - The component props.
 * @param {Object} props.logo - The logo details for display.
 * @param {string} props.logo.src - The source URL of the logo.
 * @param {string} props.logo.alt - The alt text for the logo.
 * @param {ReactElement} props.brand - The brand name of the Lions Club of Remastered.
 * @param {string} props.paragraph - The paragraph text displayed in the footer section.
 * @param {ReactElement[]} [props.socialMediaLinks] - The social media links for display.
 * @param {ReactElement[]} [props.quickLinks] - The quick links for display.
 * @param {string} props.address - The address of the Lions Club of Remastered.
 * @param {string} props.mail - The email of the Lions Club of Remastered.
 * @param {string} props.phone - The phone number of the Lions Club of Remastered.
 * @param {ReactElement[]} [props.importantLinks] - The important links for display.
 * @returns {ReactElement} - The rendered Footer component.
 */
export default function Footer(props) {
    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    }, []);

    return (
        <footer className="text-white pt-5 pb-3" data-aos="fade-up">
            <div className="container">
                <div className="row g-5">
                    {/* Lions Club Section */}
                    <section className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
                        <div className='d-flex align-items-center mb-3'>
                            <img src={props.logo.src} alt={props.logo.alt} className='logo me-2' width={'60'} />
                            <h3 className='mb-0'>{props.brand}</h3>
                        </div>
                        <p className='text-white mb-4'>
                           {props.paragraph}
                        </p>

                        {props.socialMediaLinks &&
                            <div className='d-flex'>
                                {props.socialMediaLinks}
                            </div>
                        }       
                    </section>

                    {/* Quick Links Section */}
                    <section className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h3 className='text-warning mb-4 h5'>Liens Rapides</h3>
                        <ul className='list-unstyled'>
                            {props.quickLinks.map((link, index) => 
                                <li key={index}>{link}</li>
                            )}
                        </ul>
                    </section>

                    {/* Contact Section */}
                    <section className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                        <h3 className='text-warning mb-4 h5'>Contact</h3>
                        <address>
                            <ul className='list-unstyled'>
                                <li className='mb-3 d-flex'>
                                    <FaMapMarkerAlt className='text-warning me-2 mt-1' />
                                    <span>{props.address}</span>     
                                </li>
                                <li className='mb-3 d-flex'>
                                    <FaEnvelope className='text-warning me-2 mt-1' />
                                    <a href={`mailto:${props.mail}`} className='text-white text-decoration-none link'>{props.mail}</a>    
                                </li>
                                <li className='d-flex'>
                                    <FaPhone className='text-warning me-2 mt-1' />
                                    <a href={`tel:${props.phone}`} className='text-white text-decoration-none link'>{props.phone}</a>  
                                </li>
                            </ul>
                        </address>
                    </section>

                    {/* Important Section */}
                    <section className="col-lg-3 col-md-6">
                        <h3 className='text-warning mb-4 h5'>Important</h3>
                        <ul className='list-unstyled'>
                            {props.importantLinks.map((link, index) =>
                                <li key={index}>{link}</li>
                            )}
                        </ul>
                    </section>
                </div>
                
                <hr className='my-4 bg-light' />
                
                <div className="text-center ">
                    <p className="mb-0">© {new Date().getFullYear()} Lions Club FSBM. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}