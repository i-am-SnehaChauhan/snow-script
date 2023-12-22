import React, { useEffect, useRef } from "react";
import "./AnimeComponent.css"; // Import your CSS file

const AnimeComponent = () => {
  const animeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply your transition effect when the component is in view
          document.querySelector(".image").classList.add("rtl");
          document.querySelector(".text").classList.add("ltr");
        }
      });
    });

    observer.observe(animeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={animeRef}>
      <div>
        <h1 className="mainHeading">How to contribute</h1>
      </div>
      <div className="container topmargin">
        <div className="anime_review">
          <div className="image">
            {/* Replace the iframe with the appropriate React component for embedding YouTube videos */}
            <iframe
              width="410"
              height="230"
              src="https://www.youtube.com/embed/Hcc1LXldeJk"
              frameBorder="0"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
          <div className="text">
            {/* Replace the Lorem Ipsum text with your actual content */}
            {/* You can use state and props to manage dynamic content */}

            <p>
              Project-specific resources are provided in the READMEs of every
              project but here for some general resources and contribution
              guidelines to get you started!
            </p>

            <ul>
              <li>
                You can update existing projects or contribute any project you
                made to participate.
              </li>
              <li>
                Take a look at the Existing Issues of your project and find one
                that interests you or create your own Issues!{" "}
              </li>
              <li>
                {" "}
                Add Screenshots to help us know what this Script is all about.
              </li>
              <li>
                {" "}
                Repository-specific contribution information is in the
                respective READMEs of each repo.
              </li>
              <li>
                {" "}
                Do not abuse or use foul language. Ensure you don't insult
                anyone. Be respectful and inclusive.
              </li>
              <li>
                Please mention your full name on your GitHub handle to be
                eligibl
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeComponent;
