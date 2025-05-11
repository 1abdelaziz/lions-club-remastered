import './SimpleCard.css';

/**
 * A SimpleCard component for the Lions Club of Remastered website.
 * It displays a simple card with an optional icon, title, and paragraph.
 * The component initializes the AOS (Animate On Scroll) library for animations.
 * @param {Object} props - The component props.
 * @param {ReactElement} [props.icon] - The icon displayed inside the card.
 * @param {string} props.title - The title displayed inside the card.
 * @param {string} props.paragraph - The paragraph text displayed inside the card.
 * @returns {ReactElement} - The rendered SimpleCard component.
 */
export default function SimpleCard(props) {
    return (
        <div className='lions-card simple-card'>
            {props.icon && 
                <div className="icon-container">
                    {props.icon}
                </div>
            }

            <h3>{props.title}</h3>
            <p className='mt-auto'>{props.paragraph}</p>
        </div>
    )
}