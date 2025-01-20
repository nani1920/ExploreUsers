/** @format */

import { styled } from "@mui/material";

export const ProfileCont = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "@media (max-width:600px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const ProfileIcon = styled("div")(({ theme }) => ({
  height: 100,
  minWidth: 100,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "50",
  margin: 10,
  "@media (max-width:600px)": {
    height: 90,
    width: 60,
  },
}));

export const UserDetailsCont = styled("div")(({ theme }) => ({
  height: 200,
}));
