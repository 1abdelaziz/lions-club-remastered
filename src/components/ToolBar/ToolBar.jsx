import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import AOS from 'aos';
import './ToolBar.css';

/**
 * A ToolBar component for the Lions Club of Remastered website.
 * It displays a bar with buttons and an optional search bar.
 * The component initializes the AOS (Animate On Scroll) library for animations.
 * @param {Object} props - The component props.
 * @param {ReactElement[]} props.buttons - The buttons to be displayed in the bar.
 * @param {Object} props.search - The search bar details.
 * @param {string} props.search.name - The name of the search input field.
 * @param {string} props.search.id - The id of the search input field.
 * @param {string} props.search.placeholder - The placeholder text for the search input field.
 * @param {function} props.search.onChange - The change handler for the search input field.
 * @returns {ReactElement} - The rendered ToolBar component.
 */
export default function ToolBar(props) {
    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    }, [])

    return (
        <section className="toolbar container my-5" data-aos="fade-up">
            <ul className="buttons-container d-flex p-0">
                {props.buttons && props.buttons.map((button, index) => 
                    <li key={index} className="list-unstyled mx-1">
                        {button}
                    </li>
                )}
            </ul>

            {props.search &&
                <div className="input-group mb-3">
                    <span className="input-group-text">
                        <FaSearch />
                    </span>
                    <input
                        type="search"
                        onChange={props.search.onChange}
                        name={props.search.name}
                        className='form-control'
                        id={props.search.id}
                        placeholder={props.search.placeholder}
                    />
              </div>
            }   
        </section>
    )
}