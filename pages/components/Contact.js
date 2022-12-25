import React from 'react';

const Contact = () => {
    return (
      <div className="flex  text-4xl">
        <div className="m-6 basis-1/2 flex">
          <p>Follow @</p>
          <div>
            <a
              href="https://twitter.com/3618parshvi"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/parshviSri/social-dshboard"
              className="px-2"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://qpxaa35qo8d.typeform.com/to/PwpLoXky"
              className="px-2"
              target="_blank"
              rel="noreferrer"
            >
              Feedback
            </a>
          </div>
        </div>
        <div className="m-6 basis-1/2 flex">
          <p>
            <a
              href="https://www.buymeacoffee.com/parshvisri1"
              target="_blank"
              rel="noreferrer"
            >
              Enjoying the app ? - You can buy me coffee
            </a>
          </p>
          <button></button>
        </div>
      </div>
    );
}

export default Contact;
