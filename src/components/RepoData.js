import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const RepoData = ({ repo }) => {
  const navigate = useNavigate();
  return (
    <Stack borderBottom="1px solid #30363D" pb="20px" mb="20px" gap="20px">
      <Box display={"flex"} alignItems={"center"} gap="10px">
        <Typography
          color="primary"
          sx={{
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
          fontWeight={600}
          fontSize="25px"
          onClick={() => navigate(`/repositories/${repo.name}`)}
        >
          {repo.name}
        </Typography>
        <Typography
          color="#737B85"
          borderRadius="15px"
          border="1px solid #30363D"
          sx={{ px: "5px", py: "3px", textTransform: "capitalize" }}
        >
          {repo.visibility}
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap="30px">
        {repo?.language ? (
          <Typography color="#737B85" fontSize="14px">
            {repo.language}
          </Typography>
        ) : null}
        <Typography color="#737B85" fontSize="14px">
          {"Updated on " + moment(repo.updated_at).format("MMM DD")}
        </Typography>
      </Box>
    </Stack>
  );
};

export default RepoData;
