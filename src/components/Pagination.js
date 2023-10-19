import React from "react";
import "../App.css";
import { Box, Button, Stack } from "@mui/material";

const Pagination = ({
  page,
  totalPages,
  handlePrev,
  handleClick,
  handleNext,
  disabledPrev,
  disabledNext,
}) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  // const [page, setPage] = useState(1);

  return (
    <Stack direction="row" justifyContent="center" gap="30px" pt="20px">
      <Button
        variant="contained"
        disabled={disabledPrev}
        aria-disabled={disabledPrev}
        onClick={() => handlePrev()}
      >
        Prev
      </Button>

      <Box display="flex" alignItems="center" gap="10px">
        {pages.map((num) => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              color: "#fff",
              border: page === num ? undefined : "1px solid #1976d2",
              bgcolor: page === num ? "#1976d2" : undefined,
              cursor: 'pointer'
            }}
            key={num}
            onClick={() => handleClick(num)}
          >
            {num}
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        disabled={disabledNext}
        aria-disabled={disabledNext}
        onClick={() => handleNext()}
      >
        Next
      </Button>
    </Stack>
  );
};
export default Pagination;
