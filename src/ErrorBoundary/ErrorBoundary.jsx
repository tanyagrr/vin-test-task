import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1
          style={{
            margin: "18rem auto 0",
            textAlign: "center",
            fontWeight: 500,
            color: "#333",
            width: "fit-content",
          }}
        >
          Something went wrong. Please refresh the page.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
