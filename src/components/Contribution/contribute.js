import React from 'react';
import "./contribute.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <h1 className="display-4 conthead">How to contribute</h1>
      <div className="container text-center contributebox">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-6 col-sm-6">
              <div className="modal-dialog modal-xl">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Hcc1LXldeJk"
                  frameBorder="0"
                  allowFullScreen
                  title="YouTube Video"
                 
                ></iframe>
              </div>
            </div>
            <div className="col-6 col-sm-6">
              <p className="contributetext">
                Project-specific resources are provided in the READMEs of every
                project but here for some general resources and contribution
                guidelines to get you started!
                <br />
                - You can update existing projects or contribute any project
                you made to participate.<br />
                - Take a look at the Existing Issues of your project and find
                one that interests you or create your own Issues! <br />
                - Add Screenshots to help us know what this Script is all
                about.<br />
                - Repository-specific contribution information is in the
                respective READMEs of each repo.<br />
                - Do not abuse or use foul language. Ensure you don't insult
                anyone. Be respectful and inclusive.<br />
                - Please mention your full name on your GitHub handle to be
                eligible for prizes.
              </p>
              <button type="button" className="btn  resbtn">
                Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
