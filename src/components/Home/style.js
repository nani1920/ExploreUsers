/** @format */

import { styled } from "@mui/material";

export const ListContainer = styled("ul")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  padding: 10,
  paddingBottom: 30,
  justifyContent: "flex-start",

  // Media query for screen sizes less than 600px (mobile view)
  "@media (max-width:600px)": {
    justifyContent: "center",
    gap: 0,
    padding: 0,
  },
  "@media (min-width:600px) and (max-width:900px)": {
    justifyContent: "flex-start",
  },
}));

export const FailureImg = styled("img")(({ theme }) => ({
  height: 300,
  width: 300,
  "@media (max-width:600px)": {
    height: 150,
    width: 150,
  },
}));
export const NoSearchResultsImg = styled("img")(({ theme }) => ({
  height: 400,
  width: 400,
  "@media (max-width:600px)": {
    height: 150,
    width: 150,
  },
}));
