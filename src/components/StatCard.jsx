
import { Card as MuiCard, Box, Typography } from "@mui/material";

const StatCard = ( {icon, value, title} ) => {
  return (
    <MuiCard
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "16px",
        borderRadius: "12px",
        height: "100%",
      }}
    >
      <Box sx={{ fontSize: "40px", color: "#6C63FF" }}>{icon}</Box>
      <Typography variant="h5" fontWeight="bold">
        {value}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {title}
      </Typography>
    </MuiCard>
  );
};

export default StatCard;

