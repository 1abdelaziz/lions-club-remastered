import './InfoBox.css';

/**
 * An InfoBox component for the Lions Club of Remastered website.
 * It displays a simple box with an optional icon, title, and paragraph.
 * The component renders a container with a class of `infobox-container`, which
 * contains a child container with a class of `icon-container` for the icon,
 * and a child container for the title and paragraph.
 * The component takes a single prop, `icon`, which is an optional React element
 * that displays the icon, and two required props, `title` and `paragraph`, which
 * are the title and paragraph text displayed in the box.
 * The component can also take an optional `className` prop to add a custom CSS class
 * name to the container.
 * @param {Object} props - The component props.
 * @param {ReactElement} [props.icon] - The icon displayed inside the box.
 * @param {string} props.title - The title displayed in the box.
 * @param {string} props.paragraph - The paragraph text displayed in the box.
 * @param {string} [props.className] - The custom CSS class name for the container.
 * @returns {ReactElement} - The rendered InfoBox component.
 */
export default function InfoBox(props) {
    return (
        <div className={`infobox-container d-flex align-items-center my-2 rounded-3 ${props.className || ''}`}>
            {props.icon && 
                <div className="icon-container">
                    {props.icon}
                </div>
            }
            <div className='container'>
                <h5 className="my-1 fw-semibold">{props.title}</h5>
                <p className="my-1">{props.paragraph}</p>
            </div>
        </div>
    )
}