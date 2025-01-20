
import { Card as MuiCard, Typography, Button } from "@mui/material";
import { Bar } from "react-chartjs-2";

const SalesChart = ({title, chartData} ) => {
  return (
    <MuiCard
      elevation={3}
      sx={{
        padding: "16px",
        borderRadius: "12px",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Bar data={chartData} />
      <Button
        variant="contained"
        color="error"
        sx={{ marginTop: "16px", alignSelf: "center" }}
      >
        Buy Now
      </Button>
    </MuiCard>
  );
};

export default SalesChart;
