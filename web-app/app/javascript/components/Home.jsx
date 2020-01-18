import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">NUS Botfessions</h1>
        <p className="lead">
          What our fellow normal human students in NUS have to say about their normal lives in school.
          Totally human things.
        </p>
        <hr className="my-4" />
        <Link
          to="/confessions"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Confessions
        </Link>
      </div>
    </div>
  </div>
);