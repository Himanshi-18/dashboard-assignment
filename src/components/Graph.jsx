
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
import Box from "@mui/material/Box"; 

const Graph = ( {isSidebarExpanded} )  => {
  const data = {
    labels: ["Feb '03", "Apr '03", "Jun '03", "Aug '03", "Oct '03"],
    datasets: [
      {
        label: "Total Sales",
        data: [20, 40, 60, 80, 50],
        backgroundColor: "#6a5acd",
      },
      {
        label: "Average",
        data: [15, 35, 55, 75, 45],
        backgroundColor: "#c8a2c8",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Department-wise Monthly Sales Report",
      },
    },
  };

  return (
    <Box sx={{  
        width:  isSidebarExpanded ? "calc(100% - 20px)" : "500px" , 
        height: "300px", 
        margin: "0 auto", // Center the chart
        position: "relative",

        "@media (max-width: 605px)": {
          width: "auto",
        }
        }}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default Graph;
