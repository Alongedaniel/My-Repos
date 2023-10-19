import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import OverviewIcon from "../assets/icons/OverviewIcon";
import ErrorBoundaryIcon from "../assets/icons/ErrorBoundaryIcon";
import ErrorIcon from "../assets/icons/ErrorIcon";
import RepoIcon from "../assets/icons/RepoIcon";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProfileIcon from "../assets/icons/ProfileIcon";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [followersCount, setFollowersCount] = useState();
  const [followingCount, setFollowingCount] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedRoute(location.pathname);
    axios
      .get("https://api.github.com/users/Alongedaniel/followers")
      .then((response) => setFollowersCount(response?.data));
    axios
      .get("https://api.github.com/users/Alongedaniel/following")
      .then((response) => setFollowingCount(response?.data));
  }, [location.pathname]);

  const [selectedRoute, setSelectedRoute] = useState("Overview");
  const navList = [
    {
      text: "Overview",
      route: "/",
      icon: <OverviewIcon />,
    },
    {
      text: "Repositories",
      route: "/repositories",
      icon: <RepoIcon />,
    },
    {
      text: "Error 404",
      route: "/error",
      icon: <ErrorIcon />,
    },
    {
      text: "ErrorBoundary",
      route: "/testerror",
      icon: <ErrorBoundaryIcon />,
    },
  ];
  return (
    <Stack
    >
      <Container maxWidth="xl" disableGutters sx={{ px: "60px", pt: "100px" }}>
        <Helmet>
          <title>Home page</title>
          <meta
            name="description"
            content="This is the home page for my github repositories using the github api calls"
          />
          <link rel="canonical" href="/" />
        </Helmet>
        <Stack direction="row" gap="20px">
          <Box>
            <img
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                border: "1px solid #30363D",
                cursor: 'pointer'
              }}
              src="https://avatars.githubusercontent.com/u/89586536?v=4"
              alt="profile"
              loading="lazy"
              onClick={() =>
                window.location.href = 
                  "https://avatars.githubusercontent.com/u/89586536?v=4"
                
              }
            />
            <Box>
              <Typography color="#E6EDF3" fontWeight={700} fontSize="30px">
                Daniel Alonge
              </Typography>
              <Typography
                variant="subtitle2"
                color="#707781"
                fontWeight={300}
                fontSize="20px"
              >
                Alongedaniel
              </Typography>
              <Typography variant="subtitle2" color="#E6EDE5" fontSize="20px">
                Frontend Developer(React)
              </Typography>
              <Box mt="10px" display="flex" alignItems="center">
                <ProfileIcon />
                <Typography
                  variant="subtitle2"
                  color="#E6EDE5"
                  fontWeight={300}
                  fontSize="14px"
                  ml="5px"
                >
                  {followersCount?.length}{" "}
                  <span style={{ color: "#707781" }}>followers</span>
                </Typography>
                <Box
                  width="3px"
                  height="3px"
                  borderRadius="100%"
                  bgcolor="#E6EDE5"
                  mx="10px"
                ></Box>
                <Typography
                  variant="subtitle2"
                  color="#E6EDE5"
                  fontWeight={300}
                  fontSize="14px"
                >
                  {followingCount?.length}{" "}
                  <span style={{ color: "#707781" }}>following</span>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box flex={1}>
            <Stack>
              <Box
                pl="20px"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
                borderBottom="1px solid #30363D"
              >
                {navList.map((navItem) => (
                  <Box
                    key={navItem.text}
                    py="5px"
                    borderBottom={
                      selectedRoute === navItem.route
                        ? "3px solid #F78166"
                        : undefined
                    }
                    sx={{ transition: "all .4s ease" }}
                  >
                    <Box
                      display={"flex"}
                      alignItems="center"
                      gap="5px"
                      sx={{
                        px: "8px",
                        py: "5px",
                        borderRadius: ".5rem",
                        transition: "all .4s ease",
                        "&:hover": {
                          bgcolor: "#21262C",
                        },
                      }}
                    >
                      {navItem.icon}
                      <Link
                        style={{ textDecoration: "none", color: "#E6EDE5" }}
                        to={navItem.route}
                        onClick={() => setSelectedRoute(location.pathname)}
                      >
                        {navItem.text}
                      </Link>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box>{children}</Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default MainLayout;
