/** @format */

import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  Container,
  Typography,
  IconButton,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Skeleton,
  useMediaQuery,
  Pagination,
} from "@mui/material";
import { ListContainer, FailureImg, NoSearchResultsImg } from "./style.js";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import TextField from "@mui/material/TextField";
import UserCard from "../UserCard";
import Navbar from "../Navbar/index.js";
import { useThemeContext } from "../../context/theme.js";
import { UserContext } from "../../context/userContext";
import { useTheme } from "@mui/material/styles";

const apiStatusConstant = {
  success: "Success",
  failure: "Failure",
  loading: "Loading",
  initial: "Initial",
};

export default function Home() {
  const { isDarkMode } = useThemeContext();
  const theme = useTheme();
  const { userList, onUpdateUserList } = useContext(UserContext);
  const [filteredUserList, setFilteredUsersList] = useState(userList);
  const [apiStatus, setApiStatus] = useState(apiStatusConstant.initial);
  const [sortOrder, setSortOrder] = useState("A-Z");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = isMobile ? 4 : 6;
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const onSortOrderChange = (event) => {
    if (event.target.value === "A-Z") {
      const updatedList = filteredUserList.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilteredUsersList(updatedList);
    } else {
      const updatedList = filteredUserList.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setFilteredUsersList(updatedList);
    }
    setSortOrder(event.target.value);
  };

  const onSearchInput = (event) => {
    const searchTerm = event.target.value;

    if (searchTerm === "") {
      setFilteredUsersList(userList);
      return;
    }

    const updatedList = userList.filter((each) =>
      each.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsersList(updatedList);
  };

  useEffect(() => {
    const getUsersList = async () => {
      try {
        setApiStatus(apiStatusConstant.loading);
        const url = "https://jsonplaceholder.typicode.com/users/";
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok === true) {
          onUpdateUserList(data);
          setFilteredUsersList(data);
          setApiStatus(apiStatusConstant.success);
        } else {
          setApiStatus(apiStatusConstant.failure);
        }
      } catch (e) {
        console.log("Error in the Fetch call", e);
      }
    };
    getUsersList();
  }, [onUpdateUserList]);

  const renderUserCardsCont = () => {
    const lastUserIndex = currentPage * rowsPerPage;
    const firstUserIndex = lastUserIndex - rowsPerPage;
    const currentUsersList = filteredUserList.slice(
      firstUserIndex,
      lastUserIndex
    );

    return (
      <Container>
        <ListContainer>
          {currentUsersList.length === 0
            ? renderNoSearchResultFound()
            : currentUsersList.map((each) => (
                <UserCard key={each.id} item={each} />
              ))}
        </ListContainer>
        <Pagination
          count={Math.ceil(filteredUserList.length / rowsPerPage)} // Set the number of pages
          page={currentPage} // Current page
          onChange={handlePageChange} // Function to update the current page
          color="primary"
          sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
        />
      </Container>
    );
  };

  const renderLoadingView = () => {
    const count = 10;
    const skeletons = [];

    for (let i = 0; i < count; i++) {
      const boxKey = uuidv4();

      skeletons.push(
        <Box
          key={boxKey}
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
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <FailureImg src={imgUrl} alt="failure-view" />
        <Typography
          variant="body"
          mt={3}
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
      </Box>
    );
  };

  const renderNoSearchResultFound = () => {
    const imgUrl =
      "https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png";
    return (
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <NoSearchResultsImg src={imgUrl} alt="no result found" />
        <Typography variant="h5" mt={4} color={theme.palette.text.primary}>
          No Results Found !!!
        </Typography>
      </Container>
    );
  };

  const renderViewCont = () => {
    switch (apiStatus) {
      case apiStatusConstant.success:
        return renderUserCardsCont();
      case apiStatusConstant.failure:
        return renderFailureView();
      case apiStatusConstant.loading:
        return renderLoadingView();
      default:
        return;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.secondary,
        minHeight: "100vh",
        transition: "background-color 0.3s",
        paddingBottom: 10,
      }}
    >
      {/* //Header Section */}
      <Navbar />

      {/* //InputBox Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.secondary,
          transition: "background-color 0.3s",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            color={theme.palette.text.primary}
            gutterBottom
            sx={{
              padding: theme.spacing(2),
            }}
          >
            Users List
          </Typography>
          <TextField
            label="Search..."
            variant="outlined"
            autoComplete="off" //  autoComplete off
            onChange={onSearchInput}
            sx={{
              maxWidth: (theme) => theme.spacing(100),
              width: "90%",
              marginTop: (theme) => theme.spacing(1),
              marginLeft: theme.spacing(2),
              fontSize: 20,
            }}
            InputProps={{
              endAdornment: (
                <>
                  <IconButton edge="end">
                    <SearchIcon sx={{ m: 1 }} />
                  </IconButton>

                  <Popup
                    trigger={
                      <IconButton edge="end">
                        <FilterListIcon />
                      </IconButton>
                    }
                    position="bottom center"
                  >
                    <Container
                      sx={{
                        padding: 2,
                        backgroundColor: theme.palette.background.secondary,
                        color: theme.palette.text.primary,
                      }}
                    >
                      <FormLabel>Sort By</FormLabel>
                      <RadioGroup
                        value={sortOrder}
                        onChange={onSortOrderChange}
                      >
                        <FormControlLabel
                          value="A-Z"
                          control={<Radio />}
                          label="A-Z"
                        />
                        <FormControlLabel
                          value="Z-A"
                          control={<Radio />}
                          label="Z-A"
                        />
                      </RadioGroup>
                    </Container>
                  </Popup>
                </>
              ),
            }}
          />
        </Container>
      </Box>

      {/* //UserCardList Container */}
      {renderViewCont()}
    </Box>
  );
}
