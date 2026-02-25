import {useLocation} from "react-router-dom";

function AdminDashboard(){

  const location = useLocation();
  const username = location.state?.user || "Admin";

  return(

    <div style={{background:"#eef2ff",minHeight:"100vh"}}>

      {/* Top bar */}
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"20px 40px",
        background:"#4f46e5",
        color:"white"
      }}>
        <h2>Admin Panel</h2>

        <button
          onClick={()=>window.location="/"}
          style={{
            background:"white",
            color:"#4f46e5",
            border:"none",
            padding:"8px 18px",
            borderRadius:"6px",
            cursor:"pointer"
          }}
        >
          Logout
        </button>
      </div>


      {/* Content */}
      <div style={{padding:"40px"}}>

        <h1>Welcome {username}</h1>

        <div style={{
          marginTop:"30px",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px"
        }}>

          <div style={cardStyle}>
            <h3>Total Users</h3>
            <p>120</p>
          </div>

          <div style={cardStyle}>
            <h3>Reports</h3>
            <p>15 Pending</p>
          </div>

          <div style={cardStyle}>
            <h3>Server Status</h3>
            <p>Running</p>
          </div>

        </div>

      </div>

    </div>

  );
}

const cardStyle={
  background:"white",
  padding:"25px",
  borderRadius:"12px",
  boxShadow:"0 6px 15px rgba(0,0,0,0.1)",
  textAlign:"center"
};

export default AdminDashboard;