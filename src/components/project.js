import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>Personal Portfolio</CardText>
            <CardActions border>
              <a
                href="https://github.com/tenkaleakshay/Personal-Portfolio"
                rel="noopener noreferrer"
                targets="_blank"
              >
                <Button colored>Github</Button>
              </a>

              <a
                href="https://akshay-personal-portfolio.herokuapp.com/"
                rel="noopener noreferrer"
                targets="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "30px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>Project Managment</CardText>
            <CardActions border>
              <a
                href="https://github.com/tenkaleakshay/Project-Management-Tool/"
                rel="noopener noreferrer"
                targets="_blank"
              >
                <Button colored>Github</Button>
              </a>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover"
              }}
            >
              NodeJs Project #1
            </CardTitle>
            <CardText>Chat APP</CardText>
            <CardActions border>
              <a
                href="https://github.com/tenkaleakshay/Chat-App"
                rel="noopener noreferrer"
                targets="_blank"
              >
                <Button colored>Github</Button>
              </a>

              <a
                href="https://floating-shore-86550.herokuapp.com/"
                rel="noopener noreferrer"
                targets="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "30px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover"
              }}
            >
              NodeJs Project #2
            </CardTitle>
            <CardText>TO-DO API</CardText>
            <CardActions border>
              <a
                href="https://github.com/tenkaleakshay/Node-TODO-API"
                rel="noopener noreferrer"
                targets="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover"
              }}
            >
              ML Project #1
            </CardTitle>
            <CardText>Spam Filter</CardText>
            <CardActions border>
              <a
                href="https://github.com/tenkaleakshay/Spam_Filter"
                rel="noopener noreferrer"
                targets="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "30px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover"
              }}
            >
              ML Project #2
            </CardTitle>
            <CardText>ML Decision Tree</CardText>
            <CardActions border>
              <a
                href="https://github.com/tenkaleakshay/Decicion-Tree"
                rel="noopener noreferrer"
                targets="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover"
              }}
            >
              Java Project #1
            </CardTitle>
            <CardText>Artist Search API</CardText>
            <CardActions border>
              <a
                href="https://github.com/tenkaleakshay/Artist-Search-Service"
                rel="noopener noreferrer"
                targets="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>NodeJs</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Java</Tab>
        </Tabs>
        <section className="projects-grid">
          {this.toggleCategories()}
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Project;
