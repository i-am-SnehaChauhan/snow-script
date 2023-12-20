import React, { useEffect, useRef } from 'react';
import './AnimeComponent.css'; // Import your CSS file

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
      <div >
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nobis nesciunt illo, voluptas numquam doloremque cumque optio mollitia esse veritatis sapiente, aperiam possimus aut? Architecto velit quisquam debitis, reprehenderit error perspiciatis, sapiente molestias modi fuga dolorem hic vero? Deleniti voluptate natus architecto perspiciatis cumque minus enim mollitia tempore. Velit distinctio quidem, facilis et nemo est aliquid cupiditate aspernatur dolorem autem iste, tenetur fugit ut voluptatibus animi, doloremque aliquam repellendus ea aperiam obcaecati mollitia pariatur exercitationem suscipit soluta? 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeComponent;
