/** @format */

import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Skeleton,
} from "@mui/material";
import { useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useNavigate, useParams } from "react-router-dom";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import ArrowRightAltTwoToneIcon from "@mui/icons-material/ArrowRightAltTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import UserTabs from "../Tabs/index.js";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FailureImg } from "../Home/style.js";
import { useThemeContext } from "../../context/theme.js";
import { ProfileCont, ProfileIcon, UserDetailsCont } from "./style.js";

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

const apiStatusConstant = {
  success: "Success",
  failure: "Failure",
  loading: "Loading",
  initial: "Initial",
};

function UserDetails() {
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();
  const params = useParams();
  const [UserDetailsList, setUserDetailsList] = useState();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tabId, setTabId] = useState("Company");
  const [apiStatus, setApiStatus] = useState(apiStatusConstant.initial);

  const navigate = useNavigate();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleTabId = (event, newValue) => {
    setTabId(newValue);
  };

  const onSuccess = (data) => {
    setUserDetailsList(data);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setApiStatus(apiStatusConstant.loading);
        const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok === true) {
          onSuccess(data);
          setApiStatus(apiStatusConstant.success);
        } else {
          setApiStatus(apiStatusConstant.failure);
        }
      } catch (e) {
        console.log("Error at fetch Api", e);
      }
    };
    fetchUserDetails();
  }, [params]);

  const goBack = () => {
    navigate("/");
  };

  const renderUserDetailsSuccessCont = () => (
    <Box
      sx={{
        backgroundColor: theme.palette.background.secondary,
        color: theme.palette.text.primary,

        paddingBottom: 2,
        transition: "background-color 0.4s",
      }}
    >
      {/* UserTitleSection */}

      <Box
        sx={{
          backgroundColor: theme.palette.background.secondary,
          color: theme.palette.text.primary,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip title="Go Back" onClick={goBack}>
          <IconButton
            sx={{
              display: "flex",
              alignItems: "center",
              height: 20,
              width: 20,
              m: 1,
            }}
            onClick={goBack}
          >
            <ArrowBackIcon
              aria-label="Go Back"
              title="Go Back"
              fontSize="large"
              sx={{
                display: "flex",
                alignSelf: "center",
                "@media (max-width:600px)": {
                  pt: 1,
                  fontSize: 25,
                },
              }}
              onClick={goBack}
            />
          </IconButton>
        </Tooltip>
        <Typography
          fontWeight={500}
          align="center"
          pt={1}
          pl={3}
          sx={{
            fontSize: 45,
            "@media (max-width:600px)": {
              fontSize: 20,
              pl: 1,
            },
          }}
        >
          User Profile - {UserDetailsList?.name || "Loading..."}
        </Typography>
      </Box>

      {/* UserDetailsCardSection */}
      <Container
        sx={{
          backgroundColor: theme.palette.background.primary,
          m: 4,
          pb: 4,
          height: "auto",
          width: "90%",
          borderRadius: 2,
          "@media (max-width:600px)": {
            m: 2,
          },
        }}
      >
        <ProfileCont>
          <ProfileIcon
            sx={{
              backgroundColor: randomColor,
              "@media (max-width:600px)": {
                mb: 4,
              },
            }}
          >
            <Typography
              variant="h2"
              fontWeight={400}
              sx={{
                "@media (max-width:600px)": {
                  fontSize: 40,
                },
              }}
            >
              {UserDetailsList?.name?.[0] || ""}
            </Typography>
          </ProfileIcon>
          <UserDetailsCont>
            <Container>
              {/* Name */}
              <Typography
                variant={isMobile ? "h5" : "h4"}
                p={2}
                sx={{
                  color: theme.palette.primary.main,
                  "@media (max-width:600px)": {
                    p: 0,
                    pt: 1,
                  },
                }}
              >
                {UserDetailsList?.name || ""}
              </Typography>
              {/* Email */}
              <Box
                variant={isMobile ? "body2" : "body1"}
                pl={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.primary.main,
                  "@media (max-width:600px)": {
                    p: 0,
                    pt: 1,
                  },
                }}
              >
                <EmailTwoToneIcon
                  fontSize="large"
                  sx={{
                    display: "flex",
                    color: "#f50057",
                    alignSelf: "center",
                    pr: 2,
                  }}
                />
                {UserDetailsList?.email || ""}
              </Box>
              {/* phone */}
              <Box
                variant={isMobile ? "body2" : "body1"}
                p={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.primary.main,
                  "@media (max-width:600px)": {
                    p: 0,
                    pt: 1,
                    alignItems: "flex-start",
                    flexDirection: "column",
                  },
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "@media (max-width:600px)": {
                      display: "flex",
                    },
                  }}
                >
                  <LocalPhoneTwoToneIcon
                    fontSize="large"
                    sx={{
                      display: "flex",
                      color: "#f50057",
                      alignSelf: "center",
                      pr: 2,
                    }}
                  />

                  {UserDetailsList?.phone || ""}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    ml: 2,
                    "@media (max-width:600px)": {
                      m: 1,
                      display: "none",
                      alignSelf: "flex-end",
                    },
                  }}
                >
                  Call Now
                </Button>
              </Box>
              {/* website */}
              <a
                href={`http://${
                  UserDetailsList ? UserDetailsList.website : ""
                }`}
                target="blank"
                style={{ textDecoration: "none" }}
              >
                <Box
                  color={theme.palette.primary.main}
                  pl={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "@media (max-width:600px)": {
                      display: "flex",
                      p: 0,
                      pt: 2,
                    },
                  }}
                >
                  <LanguageTwoToneIcon
                    fontSize="large"
                    sx={{
                      display: "flex",
                      color: "#f50057",
                      alignSelf: "center",
                      P: 0,
                      pr: 2,
                    }}
                  />
                  <Typography>Visit Website</Typography>
                  <ArrowRightAltTwoToneIcon
                    fontSize="large"
                    sx={{
                      display: "flex",
                      alignSelf: "center",

                      "@media (max-width:600px)": {
                        p: 0,
                        alignItems: "flex-start",
                        flexDirection: "column",
                      },
                    }}
                  />
                </Box>
              </a>
            </Container>
          </UserDetailsCont>
        </ProfileCont>
      </Container>

      {/* TabsContainer */}

      <Container
        sx={{
          backgroundColor: theme.palette.background.primary,
          m: 4,
          pb: 4,
          height: "auto",
          width: "90%",
          borderRadius: 2,
          "@media (max-width:600px)": {
            m: 2,
          },
        }}
      >
        {/* TabsContainer */}
        <UserTabs tabId={tabId} handleTabId={handleTabId} />
        <Card
          sx={{
            borderRadius: "12px",
            boxShadow: 2,
            transition: "transform 0.3s ease",
            mt: 1,
            "&:hover": {
              boxShadow: 6,
            },
            cursor: "pointer",
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            pt: 3,
            pb: 3,
            "@media (max-width:600px)": {
              flexDirection: "column",
              p: 1,
            },
          }}
        >
          <CardHeader
            avatar={
              tabId === "Company" ? (
                <BusinessTwoToneIcon
                  fontSize="large"
                  sx={{
                    fontSize: 80,
                    m: 0,
                    border: "1px solid #008394",
                    p: 6,
                    display: "flex",
                    color: "#008394",
                    alignSelf: "center",
                    borderRadius: "50%",
                    "@media (max-width:600px)": {
                      fontSize: 60,
                      p: 2,
                    },
                  }}
                />
              ) : (
                <HomeIcon
                  fontSize="large"
                  sx={{
                    fontSize: 80,
                    m: 0,
                    border: "1px solid #008394",
                    p: 6,
                    display: "flex",
                    color: "#008394",
                    alignSelf: "center",
                    borderRadius: "50%",
                    "@media (max-width:600px)": {
                      fontSize: 60,
                      p: 2,
                    },
                  }}
                />
              )
            }
          />
          {tabId === "Company" ? (
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.secondary,
                  marginBottom: 1,
                }}
              >
                Company :
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                  marginBottom: 2,
                }}
              >
                {UserDetailsList
                  ? UserDetailsList.company.name
                  : "No company data"}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.secondary,
                  marginBottom: 1,
                }}
              >
                Vision :
              </Typography>
              <Typography
                variant="body1"
                color={theme.palette.text.primary}
                gutterBottom
                sx={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  textTransform: "capitalize",
                }}
              >
                {UserDetailsList
                  ? UserDetailsList.company.bs
                  : "No vision data"}
              </Typography>
            </CardContent>
          ) : (
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                "@media (max-width:600px)": {
                  flexDirection: "column",
                },
              }}
            >
              {/* Street */}
              <Box
                sx={{
                  ml: 1,
                  width: 150,
                  p: 1,
                  "@media (max-width:600px)": { ml: 0, p: 0 },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    marginBottom: 1,
                  }}
                >
                  Street :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    marginBottom: 2,
                  }}
                >
                  {UserDetailsList
                    ? UserDetailsList.address.street
                    : "No street data"}
                </Typography>

                {/* Suite */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    marginBottom: 1,
                  }}
                >
                  Suite :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    marginBottom: 2,
                  }}
                >
                  {UserDetailsList
                    ? UserDetailsList.address.suite
                    : "No suite data"}
                </Typography>

                {/* City */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    marginBottom: 1,
                  }}
                >
                  City :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    marginBottom: 2,
                  }}
                >
                  {UserDetailsList
                    ? UserDetailsList.address.city
                    : "No city data"}
                </Typography>
              </Box>
              <Box
                sx={{
                  ml: 1,
                  width: 150,
                  p: 1,
                  "@media (max-width:600px)": { ml: 0, p: 0 },
                }}
              >
                {/* Zipcode */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    marginBottom: 1,
                  }}
                >
                  Zipcode :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    marginBottom: 2,
                  }}
                >
                  {UserDetailsList
                    ? UserDetailsList.address.zipcode
                    : "No zipcode data"}
                </Typography>

                {/* Geo Coordinates */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    marginBottom: 1,
                  }}
                >
                  Coordinates :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    marginBottom: 2,
                  }}
                >
                  Lat:{" "}
                  {UserDetailsList ? UserDetailsList.address.geo.lat : "N/A"}{" "}
                  <br />
                  Lng:{" "}
                  {UserDetailsList ? UserDetailsList.address.geo.lng : "N/A"}
                </Typography>
              </Box>
            </CardContent>
          )}
        </Card>
      </Container>
    </Box>
  );

  const renderLoadingView = () => {
    let count = isMobile ? 2 : 12;
    const skeletons = [];
    for (let i = 0; i < count; i++) {
      skeletons.push(
        <Box
          key={uuidv4()}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 230,
          }}
        >
          <Skeleton variant="rectangular" width={220} height={200} />
          <Skeleton variant="rectangular" width={220} height={20} m={1} p={1} />
        </Box>
      );
    }

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 5,
          m: 1,
        }}
      >
        {skeletons}
      </Box>
    );
  };

  const renderFailureView = () => {
    const imgUrl = isDarkMode
      ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png";
    return (
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.palette.background.primary,
          flexDirection: "column",
          justifyContent: "center",
          pt: 5,
        }}
      >
        <FailureImg src={imgUrl} />
        <Typography
          variant="body"
          mt={3}
          mb={2}
          color={theme.palette.text.primary}
          sx={{
            textAlign: "center",
            ml: 12,
            "@media (max-width:600px)": {
              ml: 0,
            },
          }}
        >
          Something Went Wrong!!
        </Typography>
        <Button
          color="primary"
          align="center"
          variant="contained"
          mt={12}
          onClick={goBack}
          sx={{
            mt: 2,
            ml: 10,
            "@media (max-width:600px)": {
              ml: 0,
            },
          }}
        >
          Go back
        </Button>
      </Box>
    );
  };

  const renderViewCont = () => {
    switch (apiStatus) {
      case apiStatusConstant.success:
        return renderUserDetailsSuccessCont();
      case apiStatusConstant.failure:
        return renderFailureView();
      case apiStatusConstant.loading:
        return renderLoadingView();
      default:
        return;
    }
  };

  return (
    <div>
      <Navbar />
      {renderViewCont()}
    </div>
  );
}

export default UserDetails;
