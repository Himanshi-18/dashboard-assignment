const NewProductsTable = () => {
    const products = [
      { id: 1, name: "HeadPhone", image: "🎧", status: "Pending", price: "$10" },
      { id: 2, name: "iPhone 6", image: "📱", status: "Cancel", price: "$20" },
      { id: 3, name: "Jacket", image: "🧥", status: "Success", price: "$35" },
    ];
  
    return (
      <div style={containerStyle}>
        <h2 style={headingStyle}>New Products</h2>
        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={headerCellStyle}>Product Name</th>
                <th style={headerCellStyle}>Image</th>
                <th style={headerCellStyle}>Status</th>
                <th style={headerCellStyle}>Price</th>
                <th style={headerCellStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} style={rowStyle}>
                  <td style={bodyCellStyle}>{product.name}</td>
                  <td style={bodyCellStyle}>
                    <span style={imageStyle}>{product.image}</span>
                  </td>
                  <td style={{ ...bodyCellStyle }}>
                  <span style={{ ...getStatusStyle(product.status) }}>
                    {product.status}
                  </span>   
                  </td>
                  <td style={bodyCellStyle}>{product.price}</td>
                  <td style={{...bodyCellStyle, ...btn}}>
                    <button style={actionEditStyle}>Edit</button>
                    <button style={actionDeleteStyle}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  // Styles
  const containerStyle = {
    // width: "90%",
    // margin: "20px auto",
    // backgroundColor: "#ffffff",
    // borderRadius: "10px",
    // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    // padding: "20px",
  };
  
  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
    padding: "20px 20px 0px 20px",
  };
  
  const tableWrapperStyle = {
    overflowX: "auto",
  };
  
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
  };
  
  const headerCellStyle = {
    padding: "15px 0px 15px 15px",
    borderBottom: "2px solid #ddd",
    textAlign: "left",
    fontSize: "16px",
    color: "#333",
    fontWeight: "bold",
  };
  
  const bodyCellStyle = {
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
    color: "#555",
    padding: "15px",
  };

  const btn ={
    display: "flex",
  }
  
  const rowStyle = {
    backgroundColor: "#ffffff",
    padding: "20px 20px 0px 20px",
  };
  
  const imageStyle = {
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
  };
  
  const actionEditStyle = {
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    marginRight: "10px",
    cursor: "pointer",
  };
  
  const actionDeleteStyle = {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  };
  
  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return {
          backgroundColor: "#ffeeba",
          color: "#856404",
          padding: "5px 10px",
          borderRadius: "5px",
          textAlign: "center",
          fontWeight: "500",
        };
      case "Cancel":
        return {
          backgroundColor: "#f8d7da",
          color: "#721c24",
          padding: "5px 10px",
          borderRadius: "5px",
          textAlign: "center",
          fontWeight: "500",
        };
      case "Success":
        return {
          backgroundColor: "#d4edda",
          color: "#155724",
          padding: "5px 10px",
          borderRadius: "5px",
          textAlign: "center",
          fontWeight: "500",
        };
      default:
        return {};
    }
  };
  
  export default NewProductsTable;
  