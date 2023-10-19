import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import moment from "moment";
import ArrowBackIcon from "../assets/icons/ArrowBackIcon";

const RepoDetails = () => {
  const navigate = useNavigate();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    const URL = `https://api.github.com/repos/Alongedaniel/${userId}`;
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setRepos(data);
      console.log(data);
    };
    fetchUsers();
  }, [userId]);

  return loading ? (
    <Stack alignItems="center" justifyContent="center">
      <CircularProgress />
    </Stack>
  ) : (
    <Stack>
      <Helmet>
        <title>Repo Details</title>
        <meta
          name="description"
          content="This is the error page for handling any possible errors during an api call"
        />
        <link rel="canonical" href="/error" />
      </Helmet>

      <div>
        <Box display="flex" alignItems="center">
          <Box sx={{cursor: 'pointer'}} onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </Box>
          <Typography
            flex={1}
            fontSize={"30px"}
            color="primary"
            align="center"
            fontWeight={600}
            py="10px"
          >
            Repo Details
          </Typography>
        </Box>
        <Box borderBottom="1px solid #30363D"></Box>
        <Typography color="#737B85" fontSize="18px" mb="10px">
          Repo Name: {repos.name}{" "}
        </Typography>
        <Typography color="#737B85" fontSize="18px" mb="10px">
          Repo Full_Name: {repos.full_name}{" "}
        </Typography>
        <Typography color="#737B85" fontSize="18px" mb="10px">
          Node ID: {repos.node_id}{" "}
        </Typography>
        <Typography color="#737B85" fontSize="18px" mb="10px">
          Visibility: {repos.visibility}{" "}
        </Typography>
        <Typography color="#737B85" fontSize="18px" mb="10px">
          Forks: {repos.forks}{" "}
        </Typography>
        <Typography color="#737B85" fontSize="18px" mb="10px">
          Subscribers: {repos.subscribers_count}{" "}
        </Typography>
        <Typography color="#737B85" fontSize="18px" mb="10px">
          Size: {repos.size}{" "}
        </Typography>
        <Typography color="#737B85" fontSize="18px" mb="10px">
          GitHub Link:{" "}
          <a href={repos.html_url} className="repo--link">
            {repos.html_url}
          </a>
        </Typography>

        <Typography color="#737B85" fontSize="18px" mb="10px" className="date">
          Created 0n {moment(repos.created_at).format("MMM DD")}{" "}
        </Typography>
        <Box borderBottom="1px solid #30363D"></Box>
      </div>
    </Stack>
  );
};

export default RepoDetails;
