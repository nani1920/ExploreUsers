/** @format */

import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Box,
  CardContent,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useNavigate } from "react-router-dom";

const colors = [
  "#FF6347", // Tomato (A warm red-orange color)
  "#FF4500", // OrangeRed (A bold, intense red-orange)
  "#32CD32", // LimeGreen (A fresh, bright green)
  "#1E90FF", // DodgerBlue (A bright, cool blue)
  "#FFD700", // Gold (A rich, luxurious yellow)
  "#8A2BE2", // BlueViolet (A mix of blue and purple)
  "#FF1493", // DeepPink (A bright, energetic pink)
  "#00FA9A", // MediumSpringGreen (A vibrant, tropical green)
  "#00BFFF", // DeepSkyBlue (A calming, light blue)
  "#FF69B4", // HotPink (A bold and playful pink)
  "#FFD700", // Goldenrod (A warm, golden yellow)
  "#DC143C", // Crimson (A rich red with a hint of blue)
  "#20B2AA", // LightSeaGreen (A calming, soft green)
  "#9932CC", // DarkOrchid (A deep purple)
  "#FF8C00", // DarkOrange (A deep, vivid orange)
  "#48D1CC", // MediumTurquoise (A tropical, cool blue-green)
  "#C71585", // MediumVioletRed (A vibrant, reddish-purple)
  "#F08080", // LightCoral (A soft, warm red)
  "#90EE90", // LightGreen (A soft, pastel green)
  "#D2691E", // Chocolate (A rich, deep brown)
];

const UserCard = (props) => {
  const theme = useTheme();
  const { item } = props;
  const { name, email, address, website, id } = item;
  const navigate = useNavigate();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const gotoUserDetails = () => {
    navigate(`/users/${id}`);
  };
  return (
    <div>
      <Card
        sx={{
          width: 290,
          height: 230,
          padding: theme.spacing(1),
          border: `1px solid ${theme.palette.borders.main}`,
          background: "transparent",
          cursor: "pointer",
          "@media (max-width:600px)": {
            width: 280,
            padding: 0,
            margin: "10px 0px",
          },
          "@media (min-width:760px) and (max-width:900px)": {
            width: 290,
            padding: theme.spacing(2),
          },
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          },
        }}
        elevation={1}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: randomColor }} aria-label="recipe">
              {name[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <Box sx={{ display: "flex", flexGrow: 1 }} />
              {/* <StarIcon
                sx={{
                  color: "#0288d1",
                  mr: 1,
                  "@media (max-width:600px)": {
                    mr: 1, // 100% width on small screens
                  },
                }}
              /> */}
              {/* <StarOutlineIcon
                sx={{
                  color: "#0288d1",
                  ml: 0,
                  "@media (max-width:600px)": {
                    ml: 0, // 100% width on small screens
                  },
                }}
              /> */}
            </IconButton>
          }
          title={name}
          subheader={
            <Typography
              sx={{
                fontSize: 12,
                mt: 0.2,
                color: "#757575",
                "@media (max-width:600px)": {
                  fontSize: "0.9rem",
                },
              }}
            >
              {email}
            </Typography>
          }
        />
        <CardContent>
          <Box
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 2,
              fontSize: 13,
            }}
          >
            <LocationOnIcon sx={{ color: "#00897b", fontSize: 18 }} />
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              {address.city}
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              marginTop: 5,
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={gotoUserDetails}
              variant="outlined"
              sx={{
                width: 110,
                height: 35,
                fontSize: 10,
                padding: 0,
                marginTop: 1,
                color: theme.palette.text.secondary,
                border: `1px solid ${theme.palette.borders.main}`,
              }}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              elevation={2}
            >
              {" "}
              View Profile
            </Button>
            <Button
              variant="contained"
              sx={{
                width: 130,
                height: 35,
                fontSize: 10,
                padding: 0,
                marginTop: 1,
                background: "#009688",
                color: "#ffffff",
              }}
              href={website}
              target="blank"
              elevation={2}
            >
              Website
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
