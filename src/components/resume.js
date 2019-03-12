import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid style={{ backgroundColor: "white" }}>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Akshay Tenkale</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              • Strong IT professional working experience in Analysis, Design
              and Development of robust, scalable client server applications
              with users across the globe. • Extensive experience in developing
              Java/J2ee application using JavaScript and JQuery, knowledge of
              MVC framework for creating web applications.• Good Understanding
              of Bio-informatics data and experience in analyzing millions of
              genetic data to develop application using R language and Neo4j
              NoSql database. • Good understanding of Spring architecture and
              how to use the different modules in Spring. • Expertise in Object
              Oriented Programming. • Experience in RESTful web services
              development. • Experience in using ORM technologies such as
              Hibernate.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>
              707, Martin Luther King Drive West, Apt 510, Cincinnati,
              Ohio-45220.
            </p>
            <h5>Phone</h5>
            <p>(513) 652-2055</p>
            <h5>Email</h5>
            <p>tenkaleakshay94@gmail.com</p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2018}
              schoolName="University of Cincinnati"
              schoolDescription="•	Master’s in Computer Science.     GPA: 3.87/4"
            />
            <Education
              startYear={2011}
              endYear={2015}
              schoolName="Shri guru gobind singhji institute of engineering and technology"
              schoolDescription="•	Bachelor of Technology in Computer Science and Engineering.  GPA: 3.20/4.0"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Software Developer"
              jobDescription="• Customize Enovia PLM software for P&G .
• Used MQL (Matrix Query Language) commands to query ENOVIA database.
• Developed business logic in JPO’s.
• Creating environments (MDEV, SIT, QA etc.) for development teams to test their code.
• Performing upgrades and migrations for releases in Enovia.
• Implemented spinners to change the schema of the ENOVIA database.
• Used REST API to implement the web services."
            />
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Software Developer"
              jobDescription="•	Under Division of Human Genetics project, built robust application using large amounr of data and graphical database tool neo4J, to help in enhancing the research work.
                              •	Analyzed and parsed millions of records to get meaningful data.
                              •	Developed Gene-phenotype search-based application Using R ad Neo4j database and designed front end using Rshiny and JavaScript. "
            />
            <Experience
              startYear={2015}
              endYear={2017}
              jobName="System Engineer (Java Developer)"
              jobDescription="•	Developed Electronic Part Inventory System (EPICS) to enhance the existing system, which helped in cost reduction and increase the profit.
•	Enhanced Pay as Build portal to ease the stock delivery and payment status checker system.
•	Exploited spring core annotations for dependency Injection Spring DI and spring MVC for REST APIs. Spring Boot for micro-services, Mainframe technology like COBOL, JCL for DB2 database processing.
•	Implemented the Struts2 frame work with MVC architecture, developed the presentation layer using JSP, HTML and client-side validations using JavaScript.
•	Designed and documented REST/HTTP APIs, including JSON data formats and API versioning strategy.
•	Used Hadoop for data processing, imported 60-80GB data from MYSQL to HDFS using Sqoop, shared responsibility for administration of Hadoop, Hive."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="java" progress={90} />
            <Skills skill="R" progress={70} />
            <Skills skill="Python" progress={50} />
            <Skills skill="React" progress={45} />
            <Skills skill="javascript" progress={60} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={60} />
            <Skills skill="SQL/NoSql" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
