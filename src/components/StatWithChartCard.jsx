
import { Card as MuiCard, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";

const StatWithChartCard = ({ value, title, chartData }) => {
  return (
    <MuiCard
      elevation={3}
      sx={{
        padding: "16px",
        borderRadius: "12px",
        height: "100%",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {value}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Line data={chartData} />
    </MuiCard>
  );
};

export default StatWithChartCard;
