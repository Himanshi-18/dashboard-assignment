import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LockIcon from "@mui/icons-material/Lock";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  return (
    <Box
      sx={{
        position: "fixed",  // Fixed sidebar
        top: 0,
        left: 0,
        width: "280px", // Sidebar width
        height: "100vh", // Full height
        backgroundColor: "#151B28",
        color: "#fff",
        padding: "16px",
        overflowY: "auto",  // Make it scrollable if needed
        transition: "width 0.3s",  // Smooth transition when resizing
      }}
    >
      {/* Logo */}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        My Dashboard
      </Typography>

      {/* NAVIGATION */}
      <Typography
        variant="subtitle2"
        sx={{ color: "#8F92A1", marginTop: 2, marginBottom: 1 }}
      >
        NAVIGATION
      </Typography>
      <List>
        <ListItem button={true} sx={{ backgroundColor: "#232D44", borderRadius: 1 }}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>

      {/* ELEMENTS */}
      <Typography
        variant="subtitle2"
        sx={{ color: "#8F92A1", marginTop: 4, marginBottom: 1 }}
      >
        ELEMENTS
      </Typography>
      <List>
        <ListItem button={true}>
          <ListItemIcon>
            <TextFieldsIcon sx={{ color: "#8F92A1" }} />
          </ListItemIcon>
          <ListItemText primary="Typography" />
        </ListItem>
        <ListItem button={true}>
          <ListItemIcon>
            <ColorLensIcon sx={{ color: "#8F92A1" }} />
          </ListItemIcon>
          <ListItemText primary="Color" />
        </ListItem>
        <ListItem button={true}>
          <ListItemIcon>
            <InsertPhotoIcon sx={{ color: "#8F92A1" }} />
          </ListItemIcon>
          <ListItemText primary="Icons" />
        </ListItem>
      </List>

      {/* PAGES */}
      <Typography
        variant="subtitle2"
        sx={{ color: "#8F92A1", marginTop: 4, marginBottom: 1 }}
      >
        PAGES
      </Typography>
      <List>
        <ListItem button={true}>
          <ListItemIcon>
            <LockIcon sx={{ color: "#8F92A1" }} />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button={true}>
          <ListItemIcon>
            <PersonAddIcon sx={{ color: "#8F92A1" }} />
          </ListItemIcon>
          <ListItemText primary="Register" />
        </ListItem>
      </List>

      {/* OTHER */}
      <Typography
        variant="subtitle2"
        sx={{ color: "#8F92A1", marginTop: 4, marginBottom: 1 }}
      >
        OTHER
      </Typography>
      <List>
        <ListItem button={true}>
          <ListItemIcon>
            <MenuIcon sx={{ color: "#8F92A1" }} />
          </ListItemIcon>
          <ListItemText primary="Menu Levels" />
        </ListItem>
        <ListItem button={true}>
          <ListItemIcon>
            <MenuIcon sx={{ color: "#8F92A1" }} />
          </ListItemIcon>
          <ListItemText primary="Sample Page" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
