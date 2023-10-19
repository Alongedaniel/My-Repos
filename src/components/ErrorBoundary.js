import { Button } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

function refreshPage() {
  window.location.reload(false);
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 className="error-header">Oops! Something went wrong!!!</h1>
          <div className="error-btn">
            <p>To Fix this Error, Kindly</p>
            <Button variant="contained" sx={{ textTransform: "none" }}>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                Reset
              </Link>
            </Button>
            <p className="reload-p"> and</p>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              onClick={refreshPage}
            >
              Reload
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
