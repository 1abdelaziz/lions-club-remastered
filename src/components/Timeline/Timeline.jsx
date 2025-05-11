import { useEffect } from 'react';
import AOS from 'aos';
import './Timeline.css';

export default function Timeline(props) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false })
    })

    return (
        <div className="timeline my-5">
            <div className='timeline-items-container'>
                {props.children}
            </div>
        </div>
    )
}

export function TimelineItem(props) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false })
    })

    return (
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
            <time dateTime={props.date.datetime || null}>{props.date.text}</time>
            <h4>{props.title}</h4>
            <p>{props.paragraph}</p>
        </div>
    )
}