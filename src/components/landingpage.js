import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Grid className="Landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
              alt="avatar"
              className="aavatar-image"
            />
            <div className="banner-text">
              <h1>Software Developer</h1>
              <hr />
              <p>
                JAVA | R | Python | Nodejs | NodeJS | React | HTML/CSS |
                SQL/NoSQL
              </p>
              <div className="social-links">
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  targets="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  targets="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  targets="_blank"
                >
                  <i className="fa fa-stack-overflow" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
