import React from 'react';
import AOS from 'aos';
import { FaArrowUp } from 'react-icons/fa';
import './Header.css';

/**
 * A custom Header component for the Lions Club of Remastered website.
 * It accepts a logo and brand name as props, and renders a navigation bar
 * with a hamburger menu for mobile devices. The navigation bar is fixed
 * at the top of the page, and the background color changes when the user
 * scrolls past 50px from the top of the page. The component also renders a
 * button to scroll up to the top of the page when the user has scrolled
 * more than 100px from the top of the page.
 * @param {Object} props - The component props.
 * @param {string} props.id - The id of the navbar.
 * @param {Object} [props.logo] - The logo of the Lions Club of Remastered.
 * @param {string} props.logo.src - The path to the logo image file.
 * @param {string} props.logo.alt - The alt text for the logo image.
 * @param {ReactElement} [props.brand] - The brand name of the Lions Club of Remastered.
 * @returns {ReactElement} - The rendered Header component.
 */
export default function Header(props) {
    const [scrolled, setScrolled] = React.useState(false);
    const [showScrollUp, setShowScrollUp] = React.useState(false);
    const ctaButton = React.Children.toArray(props.children).find(child => child.type == 'button');
    const links = React.Children.toArray(props.children).filter(child => child.type !== 'button'); 

    React.useEffect(() => {
        AOS.init({duration: 1000, once: false});
    }, [])

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setShowScrollUp(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    function onToggleNav() {
        setScrolled(true);
    }

    function scrollUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
        <header className={`fixed-top ${scrolled ? 'scrolled' : ''}`} data-aos="fade-down">
            <nav className="navbar navbar-expand-lg" data-aos="fade-down">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        {props.logo &&
                            <img src={props.logo.src} alt={props.logo.alt}  className="logo me-2" />
                        }

                        {props.brand &&
                            <span className={`brand-name-container d-lg-inline fw-bold fs-4 ${props.scrolled ? 'scrolled' : ''}`}>
                                {props.brand}
                            </span>
                        }
                    </a>

                    <button 
                        className={`navbar-toggler ${scrolled ? "navbar-light" : "navbar-dark"}`}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#${props.id}`}
                        onClick={onToggleNav}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id={props.id}>
                        {links.length > 0 && 
                            <ul className="navbar-nav px-2">
                                {links.map((link, index) =>
                                    <li key={index} className='navbar-item my-auto mx-2 py-2'>{link}</li>
                                )}
                            </ul>
                        }      

                        {ctaButton}
                    </div>
                </div>
            </nav>
        </header>
        <button type='button' className={`back-top-btn btn btn-warning ${showScrollUp ? 'show' : ''}`} onClick={scrollUp} >
            <FaArrowUp />
        </button>
        </>
    );
}