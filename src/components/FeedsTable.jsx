
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const FeedsTable = () => {
  const feeds = [
    {
      id: 1,
      icon: <NotificationsIcon style={{ color: "#b197fc" }} />,
      message: "You have 3 pending tasks.",
      time: "Just Now",
    },
    {
      id: 2,
      icon: <ShoppingCartIcon style={{ color: "#ff6b6b" }} />,
      message: "New order received",
      time: "30 min ago",
    },
    {
      id: 3,
      icon: <TaskAltIcon style={{ color: "#63e6be" }} />,
      message: "You have 3 pending tasks.",
      time: "Just Now",
    },
    {
      id: 4,
      icon: <NotificationsIcon style={{ color: "#b197fc" }} />,
      message: "You have 4 tasks Done.",
      time: "1 hour ago",
    },
    {
      id: 5,
      icon: <TaskAltIcon style={{ color: "#63e6be" }} />,
      message: "You have 2 pending tasks.",
      time: "Just Now",
    },
    {
      id: 6,
      icon: <ShoppingCartIcon style={{ color: "#ff6b6b" }} />,
      message: "New order received",
      time: "4 hours ago",
    },
  ];

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>Feeds</h3>
      <div style={feedWrapperStyle} className="feed-wrapper">
        {feeds.map((feed) => (
          <div key={feed.id} style={feedItemStyle}>
            <div style={contentStyle}>
              <div style={iconStyle}>{feed.icon}</div>
              <div>
                <p style={messageStyle}>{feed.message}</p>
              </div>
            </div>
            <div>
              <span style={timeStyle}>{feed.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  margin: "20px auto",
};

const headingStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#333",
  padding: "20px 15px 15px 15px",
  borderBottom: "1px solid #f0f0f0",
};

const feedWrapperStyle = {
  maxHeight: "200px",
  overflowY: "hidden",
  paddingRight: "10px",
  transition: "overflow-y 0.3s ease",
  paddingBottom: "20px",
};

const feedItemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "15px 15px 15px 15px",
};

const iconStyle = {
  flexShrink: 0,
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f9f9f9",
  borderRadius: "50%",
  marginRight: "10px",
};

const contentStyle = {
  display: "flex",
  alignItems: "center",
};

const messageStyle = {
  margin: 0,
  fontSize: "14px",
  color: "#333",
};

const timeStyle = {
  fontSize: "12px",
  color: "#888",
};

// Hover effect for scrollbar
document.addEventListener("DOMContentLoaded", () => {
  const feedWrapper = document.querySelector(".feed-wrapper");
  feedWrapper.addEventListener("mouseenter", () => {
    feedWrapper.style.overflowY = "auto";
  });
  feedWrapper.addEventListener("mouseleave", () => {
    feedWrapper.style.overflowY = "hidden";
  });
});

export default FeedsTable;
