import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from './UIUXdata.json';

function UIUX() {
    // Ensure projects is initialized with an empty array if data is undefined
    let [projects, setProjects] = useState(data || []);

    return (
        <>
            <div className="row">
                {projects.map((el) => {
                    // Add a check for the 'mentors' property
                    const mentorsList = el.mentors && el.mentors.map((mentor) => (
                        <a href={"https://github.com/" + mentor + " "} target="_blank" rel="noreferrer">{mentor + " "}</a>
                    ));

                    return (
                        <div className="col-lg-6 col-md-6 col-sm-12" key={el.title}>
                            <div className="nwoc-repo-card">
                                <div className="repo-heading">
                                    <img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/mark-github.svg" alt="" />
                                    <a className="repo-title" href={el["repo-url"]} target="_blank" rel="noreferrer">{el.title}</a>
                                </div>
                                <div className="repo-desc">{el.desc}</div>
                                <div className="repo-mentors">Mentors: {"  "}
                                    {mentorsList}
                                </div>
                                <ul className="repo-stats">
                                    <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/file-code.svg" alt="" /> {
                                        el.lang.toString().replaceAll(',', '/')
                                    }</li>
                                    <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/tag.svg" alt="" /> {el.tag.toString().replaceAll(',', '/')}</li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default UIUX;
