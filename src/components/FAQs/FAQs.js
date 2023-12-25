import React, { useState, useRef } from "react";
import "./FAQs.css";

const faqs = [
    {
        id: 1,
        question: "What is Lorem Ipsum?",
        answer: `Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy answer ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        id: 2,
        question: "Where does it come from?",
        answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
    },
    {
        id: 3,
        question: "Why do we use it?",
        answer: `Contrary to popular belief, Lorem Ipsum is not simply random answer. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
        id: 4,
        question: "Where can I get some?",
        answer: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { question, id, answer } = faq;

    return (
        <div className="rc-accordion-card">
            <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                <h2 className="rc-accordion-title">{question}</h2>
                <i className="fa fa-chevron-down rc-accordion-icon"></i>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{answer}</p>
                </div>
            </div>
        </div>
    )
}

const FAQs = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        setActive((prevActive) => (prevActive === index ? null : index));
    }

    return (
        <div className="container">
            <div className="question-container">
                <h1 className="headline">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                ))}
            </div>
        </div>
    );
};

export default FAQs;
