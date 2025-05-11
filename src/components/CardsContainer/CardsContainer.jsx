import React from 'react';

/**
 * A CardsContainer component that acts as a layout wrapper.
 * It renders its children within a responsive container
 * that adjusts its width based on the screen size.
 *
 * @param {Object} props - The component props.
 * @param {ReactElement[]} props.children - The child elements to be rendered inside the container.
 * @returns {ReactElement} - The rendered CardContainer component.
 */

export default function CardsContainer(props) {
    const cards = React.Children.toArray(props.children)

    return (
        <div className="d-flex justify-content-center row g-4 my-5">
            {cards.map((card, index) => (
            <div key={index} className="col-md-6 col-lg-4 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={index % 3 * 100}>
                {card}
            </div>
            ))}
      </div>
    )
}

