import Box from "@mui/material/Box"; 
import Card from "./Card";
import PieChart from "./PieChart"; 
import NewProductsTable from "./NewProductsTable"; 
import FeedsTable from "./FeedsTable";
import Graph from "./Graph"; 
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import RepeatIcon from "@mui/icons-material/Repeat";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DashboardMetrics from "./DashboardMetrics";

const MainComponent = () => {
  const cardData = [
    { icon: PeopleIcon, title: "Customers", value: "1,000" },
    { icon: PublicIcon, title: "Revenue", value: "$1,252" },
    { icon: AttachMoneyIcon, title: "Growth", value: "100%" },
    { icon: RepeatIcon, title: "Returns", value: "3,550" },
    { icon: CloudDownloadIcon, title: "Downloads", value: "3,550" },
    { icon: ShoppingCartIcon, title: "Orders", value: "2,350" },
    {
      icon: MonetizationOnIcon,
      title: "Total Profit",
      value: "$21,000",
      description: "Profit generated this year",
    },
    {
      icon: ShoppingCartIcon,
      title: "Total Orders",
      value: "2,350",
      description: "Orders placed this year",
    },
    {
      icon: PriceCheckIcon,
      title: "Average Price",
      value: "$35",
      description: "Average price per order",
    },
    {
      icon: LocalOfferIcon,
      title: "Products Sold",
      value: "12,500",
      description: "Total products sold",
    },
  ];

  const getBackgroundColor = (index) => {
    if ((index + 1) % 4 === 2) return "#f0f8ff"; 
    if ((index + 1) % 4 === 3) return "#fafad2"; 
    return "#ffffff"; 
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
      {/* First Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          mb: 5,
          "@media (max-width: 1200px)": {
            gridTemplateColumns: "1fr",
          },

          "@media (max-width: 605px)": {
            display:"block",
          },
        }}
      >
        {/* Left Column */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ mb: 4 }}>
            <DashboardMetrics />
          </Box>
          <Box sx={cardStyle}>
            <PieChart />
          </Box>
          <Box sx={tableStyle}>
            <NewProductsTable />
          </Box>
        </Box>

        {/* Right Column */}
        <Box>
          <Box sx={{...cardStyle, mb: 4}}>
            <Graph />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
              mb: 4,

              "@media (max-width: 605px)": {
                gridTemplateColumns: "repeat(1, 1fr)",
              },
            }}
          >
            {cardData.slice(6).map((card, index) => (
              <Card
                key={index + 6}
                icon={card.icon}
                title={card.title}
                value={card.value}
                description={card.description}
                backgroundColor={getBackgroundColor(index)}
              />
            ))}
          </Box>
          <Box sx={tableStyle}>
            <FeedsTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Styles for specific components
const cardStyle = {
  backgroundColor: "#fff",
  padding: 2,
  borderRadius: 2,
  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
};

const tableStyle = {
  backgroundColor: "#fff",
  borderRadius: 2,
  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
};

export default MainComponent;
