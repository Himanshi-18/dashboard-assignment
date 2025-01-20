import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarVisible(!isMobileSidebarVisible);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", position: "relative" }}>
      
      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: isSidebarExpanded ? "280px" : "0px",
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
      >
        {isSidebarExpanded && <Sidebar />}
      </Box>

      {/* Mobile/Tablet Sidebar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: isMobileSidebarVisible ? 0 : "-280px",  // Sidebar hidden initially
          width: "280px",
          height: "100vh",
          backgroundColor: "#151B28",
          zIndex: 1500,
          transition: "left 0.3s ease-in-out",
          boxShadow: "2px 0 10px rgba(0,0,0,0.3)",
          display: { xs: "block", md: "none" },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={toggleMobileSidebar}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#fff",
            fontSize: "32px",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Sidebar />
      </Box>

      {/* Overlay for Mobile Sidebar */}
      {isMobileSidebarVisible && (
        <Box
          onClick={toggleMobileSidebar}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)", // Overlay effect
            zIndex: 1400,
            display: { xs: "block", md: "none" },
          }}
        />
      )}

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          transition: "margin-left 0.3s ease",
          marginLeft: { md: isSidebarExpanded ? "80px" : "0px" },
          width: "100%",
        }}
      >
        <Header
          isSidebarExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
          toggleMobileSidebar={toggleMobileSidebar}
        />
        <Box
          component="main"
          sx={{ padding: "16px", marginTop: "64px", height: "calc(100vh - 64px)" }}
        >
          <MainComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
