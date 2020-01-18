import React from "react";
import { Link } from "react-router-dom";

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
}
export default Confessions;