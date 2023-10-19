import React from "react";
import { useEffect, useState } from "react";
import Profiles from "./Profiles.js";
import Pagination from "./Pagination";
import { PageUsers } from "./PageUsers";
import { Helmet } from "react-helmet";
import { CircularProgress, Stack } from "@mui/material";

export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const URL = "https://api.github.com/users/Alongedaniel/repos";

    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setRepos(data);
      setTotalPages(Math.ceil(data.length / PageUsers));
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <Stack>
      <Helmet>
        <title>All Repos</title>
        <meta
          name="description"
          content="This is the home page for my github repositories using the github api calls"
        />
        <link rel="canonical" href="/repos" />
      </Helmet>
      <div className="loader">
        {loading ? (
          <Stack alignItems="center" justifyContent="center">
            <CircularProgress />
          </Stack>
        ) : (
          <Stack
            borderTop="1px solid #30363D"
            pt="20px"
            height={{ lg: "430px" }}
            overflow={"scroll"}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Profiles repos={repos} page={page} id={repos.name} />
          </Stack>
        )}

        <Pagination
          page={page}
          totalPages={totalPages}
          handlePrev={handlePrev}
          handleClick={handleClick}
          handleNext={handleNext}
          disabledPrev={page <= 1}
          disabledNext={page >= totalPages}
        />
      </div>
    </Stack>
  );
}
