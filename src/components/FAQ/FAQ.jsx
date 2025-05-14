import './FAQ.css';

/**
 * A FAQ component for the Lions Club of Remastered website.
 * It displays a list of questions and answers in an accordion style.
 * The component takes a single prop, `faqItems`, which is an array of objects
 * with `question` and `answer` properties.
 * The component renders a container with a class of `faq-container`, which contains
 * a child container with a class of `faq-items`, which contains a list of FAQ items
 * rendered as a `details` element with a class of `faq-item`.
 * Each FAQ item contains a `summary` element with a class of `faq-question`, which
 * displays the question, and a `div` element with a class of `faq-answer`, which
 * displays the answer.
 * @param {Object[]} props.faqItems - An array of objects with `question` and `answer` properties.
 * @returns {ReactElement} - The rendered FAQ component.
 */
export default function FAQ(props) {
    return (
        <div className="faq-container my-3">
            <div className="faq-items">
                {props.faqItems.map((item, index) => (
                    <details key={index} className="faq-item">
                        <summary className="faq-question">
                            {item.question}
                        </summary>
                        <div className="faq-answer">
                            {item.answer}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    )
}