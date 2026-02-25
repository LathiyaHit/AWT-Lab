import {useLocation} from "react-router-dom";

function UserDashboard(){

  const location = useLocation();
  const username = location.state?.user || "User";

  return(

    <div style={{background:"#ecfeff",minHeight:"100vh"}}>

      {/* Top bar */}
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"20px 40px",
        background:"#0891b2",
        color:"white"
      }}>
        <h2>User Dashboard</h2>

        <button
          onClick={()=>window.location="/"}
          style={{
            background:"white",
            color:"#0891b2",
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

        <h1>Hello {username}</h1>

        <div style={{
          marginTop:"30px",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px"
        }}>

          <div style={cardStyle}>
            <h3>Your Profile</h3>
            <p>Active</p>
          </div>

          <div style={cardStyle}>
            <h3>Messages</h3>
            <p>3 New</p>
          </div>

          <div style={cardStyle}>
            <h3>Account Type</h3>
            <p>Standard</p>
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

export default UserDashboard;