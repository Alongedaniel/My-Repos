import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

const TestError = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw Error("Something went wrong!");
  }
  return (
    <div className="error-btn">
      <Button
        variant="contained"
        sx={{ textTransform: "none", mt: "20px" }}
        onClick={() => setError(true)}
      >
        Test ErrorBoundary
      </Button>
    </div>
  );
};

export default TestError;
