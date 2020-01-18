import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

class Confessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        confessions: []
    };
  };

  componentDidMount() {
    const url = "/confessions/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ confessions: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { confessions } = this.state;
    const allConfessions = confessions.map((confession, index) => (
      <div key={index} className="confession">
        <div className="card mb-4">
          <div className="card-body">
            <body
              className="card-title"
              dangerouslySetInnerHTML={{
                  __html: `${confession.confession_body}`
              }}
            />
          </div>
        </div>
      </div>
    ));
    const noConfession = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No confessions yet. Why not <Link to="/new_confessions">create one</Link>
        </h4>
      </div>
    );
  
    return (
      <>
      <Menu>
        <div id="home" className="menu-item">NUS Botfessions</div>
        <div></div>
        <div id="categories" className="menu-item">Categories</div>
        <a id="about" className="menu-item" href="/rant">Rant</a>
        <a id="contact" className="menu-item" href="/romance">Romance</a>
        <a id="ask-prof-ben" className="menu-item" href="/ask-prof-ben">Ask Prof Ben</a>
      </Menu>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Confessions from all over NUS</h1>
            <p className="lead text-muted">
              The buzz all over NUS, written by our human friends. I assure you that these
              are submissions made by our friends
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/confession" className="btn custom-button">
                Create New Confession
              </Link>
            </div>
            <div className="row">
              {confessions.length > 0 ? allConfessions : noConfession}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}
export default Confessions;