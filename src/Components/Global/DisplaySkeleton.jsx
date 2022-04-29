import React from "react";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

export default function DisplaySkeleton({ width }) {
  return (
    <Box sx={{ width: width ? width : 300, height: 100 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}
