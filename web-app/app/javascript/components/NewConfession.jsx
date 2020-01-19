import React from "react";
import { Link } from "react-router-dom";

class NewConfession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confession_body: "",
      category: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/confessions/create";
    const { confession_body, category } = this.state;

    if (confession_body.length == 0 || category.length == 0)
      return;

    const body = {
      confession_body: confession_body.replace(/\n/g, "<br> <br>"),
      category
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/confessions`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              We shall predict your NUS confession
            </h1>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="confession_body">Enter few words of confession.. (e.g. "Dear Prof Ben,")</label>
              <textarea
                className="form-control"
                id="confession_body"
                name="confession_body"
                rows="5"
                required
                onChange={this.onChange}
              />
              <input
                type="hidden"
                className="form-control"
                id="category"
                name="category"
                required
                onChange={this.onChange}
                value="1"
              />
              <button type="submit" className="btn custom-button mt-3">
                Create confession
              </button>
              <Link to="/confessions" className="btn btn-link mt-3">
                Back to confessions
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default NewConfession;
