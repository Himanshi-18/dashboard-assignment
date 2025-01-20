import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ isSidebarExpanded }) => {
  const data = {
    labels: ["Satisfied", "Neutral", "Dissatisfied"],
    datasets: [
      {
        label: "Customer Satisfaction",
        data: [70, 20, 10],
        backgroundColor: ["#4caf50", "#ffc107", "#f44336"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Box
      sx={{
        width: isSidebarExpanded ? "calc(100% - 20px)" : "500px", // Adjust container width
        height: "400px", // Fixed container height
        margin: "0 auto", // Center the chart
        padding: "20px", // Uniform padding for the container
        boxSizing: "border-box",
        backgroundColor: "#fff", // Optional: Add background color for better visibility
        borderRadius: "8px", // Optional: Rounded corners for the container
        position: "relative",

        "@media (max-width: 605px)": {
          width: "auto",
        }
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        Customer Satisfaction
      </h3>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Doughnut
          data={data}
          options={{
            responsive: true, // Ensures the chart resizes
            maintainAspectRatio: false, // Makes it fill the container
            plugins: {
              legend: {
                position: "bottom", // Adjust legend position
                labels: {
                  boxWidth: 15, // Reduce legend box size
                  font: {
                    size: 12, // Adjust font size
                  },
                },
                padding: 20, // Add spacing around the legend
              },
            },
            layout: {
              padding: {
                top: 20,
                bottom: 30,
                left: 20,
                right: 20,
              }, // Equal padding for all sides
            },
          }}
        />
      </div>
    </Box>
  );
};

export default PieChart;
