import React, { useState, useRef } from "react";
import "./FAQs.css";

const faqs = [
    {
        id: 1,
        question: "What is SWOC",
        answer: `SWOC, organized by GDSC IGDTUW, is a month-long open-source event aimed at inspiring and guiding passionate innovators. Participants can contribute to diverse projects, receiving mentorship to enhance their technical skills for impactful solutions, from the comfort of their homes.`
    },
    {
        id: 2,
        question: "Who can contribute?",
        answer: `Everyone irrespective of age, gender and technical experience is welcome!`
        
    },
    {
        id: 3,
        question: "Do I need past experience?",
        answer: `No, you don't need any past experience. You can contribute even if you are an absolute beginner. `
        
    },
    {
        id: 4,
        question: "Where will GDSC Snowscript Winter Of Code be held?",
        answer: `You can contribute to any of the existing projects online on GitHub from the comfort of your home.`
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { question, id, answer } = faq;

    return (
        <div className="rc-accordion-card">
            <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                <h5 className="rc-accordion-title">{question}</h5>
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
            <div className="card question-container">
                <h1 className="headline">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                ))}
            </div>
        </div>
    );
};

export default FAQs;
