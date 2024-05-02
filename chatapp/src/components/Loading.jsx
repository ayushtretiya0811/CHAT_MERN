import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import CircularProgress from '@mui/material/CircularProgress';
function Loading() {
  return (

    // <Stack
    //   sx={{ color: "grey.500" }}
    //   color="primary"
    //   open={true}
    //   style={{
    //    color: 'grey.500', 
    //     backgroundColor: 'rgba(255, 255, 255, 0.5)', // Example: 50% transparent white
    //     position: 'fixed', 
    //     top: 0, 
    //     left: 0, 
    //     width: '100vw', // Cover the entire viewport width
    //     height: '100vh', // Cover the entire viewport height
    //     display: 'flex', // Use flexbox to center the loader
    //     justifyContent: 'center', // Center horizontally
    //     alignItems: 'center', // Center vertically
    //     backdropFilter: 'blur(5px)',
    //     zIndex: 9999 
    //   }}
    //   spacing={2}
    //   direction="row"
    // >
    //   {/* <CircularProgress color="secondary" /> */}
    //   <CircularProgress color="success" />
    //   {/* <CircularProgress color="inherit" /> */}
    // </Stack>
    <div className="load">

        <div className="loader"></div>
    </div>
  );
}

export default Loading;
