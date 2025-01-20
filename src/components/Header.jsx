import { AppBar, Toolbar, IconButton, Typography, Box, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = ({ isSidebarExpanded, toggleSidebar }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        color: "#232D44",
        backgroundColor: "#fff",
        zIndex: 1201, // Ensures the header is above other components
        transition: "margin-left 0.3s ease",
        marginLeft: isSidebarExpanded ? "200px" : "0px", // Sidebar width when toggled
        width: `calc(100% - ${isSidebarExpanded ? "312px" : "0px"})`,
      }}
    >
      <Toolbar>
        {/* Menu Button */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* Notification Icon */}
        <IconButton color="inherit" sx={{ marginRight: 2 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* User Icon */}
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
