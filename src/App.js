import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home";
import Repos from "./components/Repos.js";
import SingleRepo from "./components/SingleRepo";
import Error from "./components/Error.js";
import ErrorBoundary from "./components/ErrorBoundary";
import TestError from "./components/TestError";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import MainLayout from "./components/MainLayout.js";
import "@fontsource/poppins";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });
  return (
    <div>
      <Router>
          <ThemeProvider theme={theme}>
            <ErrorBoundary>
              <CssBaseline />
              <Routes>
                <Route
                  path="/"
                  element={
                    <MainLayout>
                      <Home />
                    </MainLayout>
                  }
                />
                <Route
                  path="/repositories"
                  element={
                    <MainLayout>
                      <Repos />
                    </MainLayout>
                  }
                />
                <Route
                  path="/repositories/:userId"
                  element={
                    <MainLayout>
                      <SingleRepo />
                    </MainLayout>
                  }
                />
                <Route
                  path="*"
                  element={
                    <MainLayout>
                      <Error />
                    </MainLayout>
                  }
                />
                <Route
                  path="/testerror"
                  element={
                    <MainLayout>
                      <TestError />
                    </MainLayout>
                  }
                />
              </Routes>
            </ErrorBoundary>
          </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
